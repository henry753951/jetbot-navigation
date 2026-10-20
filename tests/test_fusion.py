import numpy as np
from jetnav.fusion import PoseFusion


def test_encoder_prediction_and_visual_outlier_rejection():
    f=PoseFusion([0,0,0])
    for _ in range(100):f.predict([.1,.1])
    assert np.allclose(f.pose,[.3,0,0])
    before=f.pose.copy()
    assert not f.update([5,5,2])
    assert np.array_equal(before,f.pose)
    assert f.update([.31,.01,.01])
    assert np.linalg.eigvalsh(f.covariance).min()>0


def test_heading_wrap_does_not_reject_valid_measurement():
    f=PoseFusion([0,0,np.pi-.01])
    assert f.update([0,0,-np.pi+.01])
    assert abs(abs(f.pose[2])-np.pi)<.02
