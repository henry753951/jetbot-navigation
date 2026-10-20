import numpy as np
import pytest
from jetnav.room import oracle_grid,ROOT
from jetnav.navigation import GridMap,command,integrate,wheels
from jetnav.mapping import OccupancyMapper
from jetnav.rl import WheelPolicy,rollout

def test_cross_room_clearance():
    m=GridMap(oracle_grid()); path=m.plan([1,1],[10.5,7.5]); b=m.blocked()
    assert all(not b[m.cell(p)] for p in path)
    assert np.linalg.norm(path[-1]-[10.5,7.5])<.06

def test_invalid_goals_and_unknown():
    m=GridMap(oracle_grid())
    for g in ([8,2.8],[-1,1],[12,5]):
        with pytest.raises(ValueError): m.plan([1,1],g)
    with pytest.raises(ValueError): GridMap(np.full((20,20),-1)).plan([.5,.5],[.7,.7])

def test_follow_without_collision():
    m=GridMap(oracle_grid()); path=m.plan([1,1],[10.5,7.5]); pose=np.array([1.,1.,0.]); b=m.blocked()
    for _ in range(4000):
        twist,done=command(pose,path)
        if done: break
        pose=integrate(pose,wheels(twist)); assert m.valid(m.cell(pose[:2]),b)
    assert done

def test_save_and_sparse_no_free(tmp_path):
    m=OccupancyMapper(); m.sparse_obstacles([[2,2,.2]])
    assert not np.any(m.grid().grid==0)
    m.ray([1,1],[2,1]); p=tmp_path/'map.npz'; m.grid().save(p)
    assert np.array_equal(GridMap.load(p).grid,m.grid().grid)

def test_trained_policy():
    p=WheelPolicy(ROOT/'examples/pretrained/wheel_policy.npz')
    learned=rollout(p.weights[None],seed=991,episodes=64)[0]
    zero=rollout(np.zeros((1,7,2)),seed=991,episodes=64)[0]
    assert learned>zero+.2
    assert np.max(np.abs(p([.2,1],[0,0])))<=14

def test_policy_obeys_saved_slew_bound_after_direction_reversal(tmp_path):
    weights=np.zeros((7,2));weights[0]=[2.,2.]
    path=tmp_path/'bounded.npz';np.savez(path,weights=weights,slew_delta=.025)
    policy=WheelPolicy(path);previous=np.zeros(2)
    for desired in ([[.3,0]]*30+[[-.3,0]]*30):
        action=policy(desired,[0,0])
        assert np.max(np.abs(action-previous))<=.025*14+1e-12
        previous=action
    assert np.all(previous<0)

def test_depth_requires_metric_and_preserves_unknown():
    m=OccupancyMapper();T=np.eye(4);T[:3,:3]=[[0,0,1],[-1,0,0],[0,-1,0]];T[:3,3]=[1,1,.2]
    m.fuse_depth(np.ones((20,20)),[[40,0,10],[0,40,10],[0,0,1]],T,stride=2)
    g=m.grid().grid
    assert np.any(g==100) and np.any(g==0) and np.any(g==-1)

def test_frontier_avoids_visited_goals_and_disconnected_free_regions():
    grid=np.full((120,180),-1,np.int8)
    grid[10:100,10:70]=0
    grid[10:100,100:170]=0  # Visible but disconnected across unknown space.
    m=GridMap(grid); start=np.array([2.,2.])
    first=m.frontier(start,heading=0.)
    second=m.frontier(start,heading=0.,visited=[first[-1]])
    assert np.linalg.norm(second[-1]-first[-1])>.6
    assert np.all(first[:,0]<3.5) and np.all(second[:,0]<3.5)
    assert all(m.valid(m.cell(point),m.blocked()) for point in second)


def test_position_uncertainty_survives_map_reload(tmp_path):
    grid=np.zeros((60,60),np.int8);grid[:,30]=100
    ordinary=GridMap(grid)
    cautious=GridMap(grid,metadata={'position_uncertainty_m':.3})
    assert np.all(cautious.blocked()[ordinary.blocked()])
    assert cautious.blocked().sum()>ordinary.blocked().sum()
    path=tmp_path/'cautious.npz';cautious.save(path)
    assert np.array_equal(GridMap.load(path).blocked(),cautious.blocked())
    with pytest.raises(ValueError):
        GridMap(grid,metadata={'position_uncertainty_m':-1}).blocked()


def test_precise_arrival_and_camera_turn_rate():
    path=np.array([[0.,0.],[1.,0.]])
    twist,done=command(np.array([.94,0.,0.]),path,goal_tolerance=.03,max_speed=.08,max_yaw_rate=.35)
    assert not done and 0<twist[0]<=.08
    twist,done=command(np.array([.98,0.,0.]),path,goal_tolerance=.03)
    assert done and np.all(twist==0)
    twist,done=command(np.array([0.,0.,np.pi/2]),path,max_yaw_rate=.35)
    assert not done and twist[0]==0 and abs(twist[1])<=.35


def test_new_obstacle_replans_route_and_stops_if_sealed():
    grid=np.zeros((80,100),np.int8);m=GridMap(grid)
    start=[.8,2.];goal=[4.2,2.];path=m.plan(start,goal)
    grid[25:55,50]=100
    refreshed=m.refresh_path(start,path)
    assert np.max(np.abs(refreshed[:,1]-2.))>.5
    assert all(m.valid(m.cell(p),m.blocked()) for p in refreshed)
    grid[:,50]=100
    with pytest.raises(ValueError,match='No reachable path'):
        m.refresh_path(start,refreshed)


def test_map_update_cannot_keep_diagonal_corner_cut():
    grid=np.zeros((12,12),np.int8)
    m=GridMap(grid,radius=0.,margin=0.)
    start=m.world((3,3));goal=m.world((4,4));path=m.plan(start,goal)
    assert len(path)==2
    grid[3,4]=100
    refreshed=m.refresh_path(start,path)
    assert len(refreshed)>2


def test_frontier_supports_localization_uncertainty_without_relaxing_clearance():
    grid=np.full((120,120),-1,np.int8);grid[10:110,10:110]=0
    m=GridMap(grid,metadata={'position_uncertainty_m':.3})
    path=m.frontier(np.array([3.,3.]),heading=0.)
    assert np.linalg.norm(path[-1]-[3.,3.])>.6
    assert all(m.valid(m.cell(point),m.blocked()) for point in path)
    assert (m.grid==-1).sum()>0
    with pytest.raises(ValueError,match='No reachable frontier'):
        GridMap(np.zeros((120,120),np.int8)).frontier(np.array([3.,3.]))
