import numpy as np
from jetnav.recovery import RecoveryScan


def test_scan_is_bounded_and_does_not_assert_relocalization():
    recovery=RecoveryScan();pose=np.array([2.,2.,0.]);angles=[]
    for _ in range(1600):
        action=recovery.step(pose,False,True,1/60)
        assert action[0]==0 and abs(action[1])<=.12
        pose[2]+=action[1]/60;angles.append(pose[2])
    assert max(abs(np.array(angles)))<=.35
    assert recovery.state=='stopped' and recovery.recovered==0
    assert np.all(recovery.step(pose,False,True,1)==0)
    recovery.step(pose,True,True,1/60)
    assert recovery.state=='idle'


def test_scan_refuses_unknown_clearance_and_stops_on_translation():
    recovery=RecoveryScan(delay=0)
    assert np.all(recovery.step([0,0,0],False,False,.1)==0)
    recovery.step([0,0,0],True,True,.1)
    assert recovery.step([0,0,0],False,True,.1)[1]>0
    assert np.all(recovery.step([.06,0,0],False,True,.1)==0)
    assert recovery.state=='stopped'


def test_scan_completes_both_sides_with_low_speed_motor_deadband():
    recovery=RecoveryScan();pose=np.zeros(3);angles=[]
    for _ in range(1200):
        action=recovery.step(pose,False,True,1/60)
        actual_rate=action[1] if abs(action[1])>=.06 else 0.
        pose[2]+=actual_rate/60;angles.append(pose[2])
        if recovery.state=='stopped':break
    assert min(angles)<-.30 and max(angles)>.30
    assert abs(pose[2])<.025
    assert recovery.state=='stopped' and recovery.elapsed<20.


def test_brief_relocalization_cannot_reset_no_progress_budget():
    recovery=RecoveryScan(delay=0)
    pose=np.zeros(3)
    for _ in range(2):
        assert recovery.step(pose,False,True,.1)[1]>0
        recovery.step(pose,True,True,.1)
    assert np.all(recovery.step(pose,False,True,.1)==0)
    assert recovery.exhausted
    assert np.all(recovery.step(pose,True,True,.1)==0)
    assert recovery.state=='stopped'
    recovery.reset_budget()
    assert recovery.step(pose,False,True,.1)[1]>0


def test_navigation_progress_allows_another_recovery():
    recovery=RecoveryScan(delay=0,max_attempts_without_progress=1)
    recovery.step([0,0,0],False,True,.1)
    recovery.step([0,0,0],True,True,.1)
    assert recovery.step([.2,0,0],False,True,.1)[1]>0
    assert not recovery.exhausted
