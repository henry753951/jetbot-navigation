import numpy as np
from jetnav.navigation import GridMap
from jetnav.clearance_recovery import ExactClearance,ClearanceRecovery


def fixture():
    cells=np.zeros((200,240),np.int8);cells[122,137]=100
    return GridMap(cells,metadata={'position_uncertainty_m':.3}),np.array([6.7515,6.6853,.3844])


def test_exact_distance_includes_cell_volume_and_map_boundary():
    cells=np.zeros((20,20),np.int8);cells[7,7]=100
    oracle=ExactClearance(GridMap(cells,resolution=.1))
    np.testing.assert_allclose(oracle.distance([[.5,.5],[.75,.75],[-.1,.5]]),[np.sqrt(.08),0,-.1],atol=1e-12)


def test_short_connector_preserves_full_clearance_and_speed_limits():
    grid,pose=fixture();recovery=ClearanceRecovery();oracle=ExactClearance(grid)
    assert grid.blocked()[grid.cell(pose[:2])]
    assert oracle.distance(pose[:2])[0]>oracle.required
    assert recovery.start(grid,pose,0.)
    initial=pose.copy()
    for i in range(500):
        twist=recovery.step(grid,pose,.05,True,i*.05)
        assert abs(twist[0])<=.025 and abs(twist[1])<=.12
        pose[2]+=twist[1]*.05
        pose[:2]+=twist[0]*.05*np.array([np.cos(pose[2]),np.sin(pose[2])])
        assert oracle.distance(pose[:2])[0]>=oracle.required+.0025
        if not recovery.active:break
    assert recovery.state=='completed'
    assert np.linalg.norm(pose[:2]-initial[:2])<=.25


def test_refuses_unsafe_start_and_stops_on_loss_with_bounded_retries():
    grid,pose=fixture();recovery=ClearanceRecovery()
    assert not recovery.start(grid,[6.875,6.3,0],0.)
    for i in range(2):
        assert recovery.start(grid,pose,i)
        np.testing.assert_array_equal(recovery.step(grid,pose,.05,False,i+.05),[0,0])
        assert recovery.state=='failed'
    assert not recovery.start(grid,pose,3.)


def test_new_observation_invalidates_connector():
    grid,pose=fixture();recovery=ClearanceRecovery();assert recovery.start(grid,pose,0.)
    cells=grid.grid.copy();cells[grid.cell(recovery.target)]=100
    updated=GridMap(cells,metadata=grid.metadata)
    np.testing.assert_array_equal(recovery.step(updated,pose,.05,True,.05),[0,0])
    assert recovery.state=='failed'


def test_new_free_observation_does_not_complete_before_reaching_target():
    grid,pose=fixture();recovery=ClearanceRecovery();assert recovery.start(grid,pose,0.)
    target=recovery.target.copy()
    updated=GridMap(np.zeros_like(grid.grid),metadata=grid.metadata)
    recovery.step(updated,pose,.05,True,.05)
    assert recovery.active
    assert np.linalg.norm(pose[:2]-target)>.02
    at_target=np.r_[target,pose[2]]
    np.testing.assert_array_equal(recovery.step(updated,at_target,.05,True,.1),[0,0])
    assert recovery.state=='completed'
