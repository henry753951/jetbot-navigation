import numpy as np
from jetnav.bias_fusion import BiasAwareFusion
from jetnav.map_correction import MapCorrectionRecovery


def test_correction_requires_explicit_event_and_preserves_pose():
    fusion=BiasAwareFusion([1,2,.1]);guard=MapCorrectionRecovery()
    before=fusion.pose.copy()
    for i in range(15):assert not guard.observe(fusion,[1.8,2,.1],i*.1,rejected=True)
    outcomes=[guard.observe(fusion,[1.8,2,.1],2+i*.1,map_changed=i==0,rejected=True) for i in range(15)]
    assert sum(outcomes)==1 and np.array_equal(fusion.pose,before)
    assert np.allclose(fusion.bias,[.8,0])
    assert fusion.update([1.8,2,.1])
    assert np.linalg.eigvalsh(fusion.covariance).min()>0


def test_moving_unstable_and_rotated_observations_cannot_rebase():
    for mode in ['moving','unstable','yaw','far']:
        fusion=BiasAwareFusion([0,0,0]);guard=MapCorrectionRecovery()
        for i in range(30):
            if mode=='moving':fusion.state[0]=i*.01
            visual=[fusion.pose[0]+(.8 if mode!='far' else 3),0,.2 if mode=='yaw' else 0]
            if mode=='unstable':visual[1]=.08*(i%2)
            assert not guard.observe(fusion,visual,i*.1,map_changed=i==0,rejected=True)
        assert np.array_equal(fusion.bias,[0,0])


def test_correction_event_expires_and_no_nonfinite_bias():
    fusion=BiasAwareFusion([0,0,0]);guard=MapCorrectionRecovery()
    guard.observe(fusion,[0,0,0],0,map_changed=True)
    for i in range(20):assert not guard.observe(fusion,[.8,0,0],11+i*.1,rejected=True)
    guard.observe(fusion,[np.nan,0,0],14,map_changed=True,rejected=True)
    assert np.isfinite(fusion.state).all()
