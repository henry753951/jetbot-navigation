import numpy as np
import pytest
from scipy.spatial.transform import Rotation
from jetnav.calibration import fit_similarity,calibrate


def test_initial_heading_calibration_does_not_average_away_real_turn():
    from jetnav.calibration import calibrate_initial_heading
    t=np.linspace(0,10,101);yaw=t*.002;length=.012
    mid=(yaw[:-1]+yaw[1:])/2
    xy=np.r_[[[1.,1.]],np.array([[1.,1.]])+np.cumsum(np.c_[length*np.cos(mid),length*np.sin(mid)],axis=0)]
    odom=np.c_[t,xy,yaw]
    pitch=np.arctan(.1);optical=np.array([[0,-np.sin(pitch),np.cos(pitch)],[-1,0,0],[0,-np.cos(pitch),-np.sin(pitch)]])
    mount=Rotation.from_euler('xyz',[.4,-.7,1.1]).as_matrix();offset=np.array([3,5,.2]);scale=4.7
    camera=np.c_[xy[:,0]+.06*np.cos(yaw),xy[:,1]+.06*np.sin(yaw),np.full(len(t),.1935)]
    raw_rotations=mount.T@Rotation.from_rotvec(np.c_[np.zeros(len(t)),np.zeros(len(t)),yaw]).as_matrix()@optical
    result=calibrate_initial_heading(t,(camera-offset)@mount/scale,Rotation.from_matrix(raw_rotations).as_quat(),odom)
    np.testing.assert_allclose(result['rotation'],mount,atol=1e-12)
    assert result['scale']==pytest.approx(scale,abs=1e-10)
    np.testing.assert_allclose(result['translation'],offset,atol=1e-10)
    with pytest.raises(ValueError,match='known placement'):
        calibrate_initial_heading(t[1:],((camera-offset)@mount/scale)[1:],Rotation.from_matrix(raw_rotations[1:]).as_quat(),odom)


def test_recovers_metric_scale_and_frame_from_odom():
    t=np.linspace(0,10,80);yaw=t*.12
    odom=np.c_[t,2*np.cos(yaw),2*np.sin(yaw),yaw+np.pi/2]
    camera=np.c_[odom[:,1]+.06*np.cos(odom[:,3]),odom[:,2]+.06*np.sin(odom[:,3]),np.full(len(t),.19)]
    R=Rotation.from_euler('xyz',[.4,-.7,1.1]).as_matrix();offset=np.array([3,5,.2]);scale=4.7
    visual=(camera-offset)@R/scale
    result=calibrate(t,visual,odom)
    assert result['scale']==pytest.approx(scale)
    assert np.allclose(result['rotation'],R)
    assert np.allclose(result['translation'],offset)
    assert result['calibration_rmse_m']<1e-10


def test_rejects_unobservable_scale_orientation_and_bad_timestamps():
    straight=np.c_[np.arange(20),np.zeros((20,2))]
    with pytest.raises(ValueError,match='two directions'):fit_similarity(straight,straight)
    with pytest.raises(ValueError,match='strictly'):
        calibrate(np.zeros(20),straight,np.c_[np.arange(20),np.zeros((20,3))])


def test_straight_calibration_uses_mount_orientation_constraint():
    from jetnav.calibration import calibrate_straight
    t=np.linspace(0,10,50);odom=np.c_[t,1+t*.12,np.ones(50),np.zeros(50)]
    camera=np.c_[odom[:,1]+.06,odom[:,2],np.full(50,.1935)]
    pitch=np.arctan(.1);optical=np.array([[0,-np.sin(pitch),np.cos(pitch)],[-1,0,0],[0,-np.cos(pitch),-np.sin(pitch)]])
    R=Rotation.from_euler('xyz',[.4,-.7,1.1]).as_matrix();offset=np.array([3,5,.2]);scale=4.7
    visual=(camera-offset)@R/scale
    quaternions=np.tile(Rotation.from_matrix(R.T@optical).as_quat(),(50,1))
    result=calibrate_straight(t,visual,quaternions,odom)
    assert result['scale']==pytest.approx(scale)
    assert np.allclose(result['rotation'],R)
    assert np.allclose(result['translation'],offset)
