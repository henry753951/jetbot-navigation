import numpy as np
from scipy.spatial.transform import Rotation
from jetnav.landmark_obstacles import metric_landmarks,fit_floor_plane


def test_relative_landmarks_are_invariant_to_raw_map_rigid_correction():
    raw=np.eye(4);raw[:3,3]=[4,-3,2]
    raw[:3,:3]=Rotation.from_euler('xyz',[.2,-.1,.4]).as_matrix()
    local=np.array([[.1,.1,1],[.2,-.2,2],[0,0,-1],[10,0,1]])
    points=local@raw[:3,:3].T+raw[:3,3]
    metric=np.eye(4);metric[:3,3]=[7,5,.2]
    expected=metric_landmarks(points,raw,metric,.75)
    correction=np.eye(4);correction[:3,:3]=Rotation.from_euler('xyz',[-.3,.2,1]).as_matrix();correction[:3,3]=[2,1,-.5]
    updated_points=points@correction[:3,:3].T+correction[:3,3]
    assert expected.shape==(2,3)
    np.testing.assert_allclose(metric_landmarks(updated_points,correction@raw,metric,.75),expected,atol=1e-12)
    np.testing.assert_allclose(expected,local[:2]*.75+metric[:3,3])


def test_floor_plane_resists_obstacles_and_refuses_raised_surface():
    rng=np.random.default_rng(7)
    xy=rng.uniform([-.6,.2],[.6,2.],(200,2))
    z=.04*xy[:,0]-.03*xy[:,1]+.02+rng.normal(0,.003,200)
    points=np.c_[xy,z]
    obstacles=np.c_[rng.uniform([-.5,.5],[.5,1.5],(50,2)),np.full(50,.18)]
    coeff=fit_floor_plane(np.r_[points,obstacles],[0,0])
    np.testing.assert_allclose(coeff,[.04,-.03,.02],atol=.003)
    assert fit_floor_plane(np.c_[xy,np.full(200,.15)],[0,0]) is None
    assert fit_floor_plane(points[:20],[0,0]) is None


def test_floor_plane_rejects_collinear_support():
    x=np.linspace(-1,1,100)
    assert fit_floor_plane(np.c_[x,x,np.zeros(100)],[0,0]) is None
