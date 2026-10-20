import numpy as np
from jetnav.bias_fusion import BiasAwareFusion


def test_slow_visual_translation_drift_is_separated_from_wheel_motion():
    fusion=BiasAwareFusion([0,0,0]);position=0.
    for step in range(1000):
        fusion.predict([.1,.1]);position+=.003
        if step%6==0:
            assert fusion.update([position+step*.001,0,0])
    assert abs(fusion.pose[0]-position)<.1
    assert fusion.bias[0]>.8
    assert np.linalg.eigvalsh(fusion.covariance).min()>0
    previous=fusion.pose.copy()
    assert not fusion.update([20,20,2])
    assert np.array_equal(fusion.pose,previous)


def test_initial_visual_bias_does_not_pull_saved_metric_frame_to_raw_atlas():
    metric=np.array([7.7,4.73,.2]);raw=np.array([7.6,4.6,.2])
    fusion=BiasAwareFusion(metric,initial_visual_pose=raw)
    for _ in range(100):
        fusion.predict([0.,0.]);assert fusion.update(raw)
    assert np.allclose(fusion.pose,metric)
    assert np.allclose(fusion.bias,raw[:2]-metric[:2])
