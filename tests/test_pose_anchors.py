import numpy as np
import pytest
from jetnav.pose_anchors import PoseAnchors,pose_time_supported


def test_anchor_time_rejects_tracking_gap_but_keeps_exact_endpoints():
    times=np.array([400.8,400.9,404.8,404.9])
    assert pose_time_supported(times,400.85)
    assert pose_time_supported(times,400.9)
    assert pose_time_supported(times,404.8)
    assert not pose_time_supported(times,401.)
    assert not pose_time_supported(times,404.7)
    assert not pose_time_supported(times,400.7)
    with pytest.raises(ValueError):pose_time_supported([1,0],.5)


def test_anchor_applies_local_metric_scale_and_rejects_changed_map():
    raw=np.eye(4);metric=np.eye(4);metric[:3,3]=[2,3,.2]
    anchors=PoseAnchors({'anchors':[{'keyframe_id':7,'raw_camera_pose':raw.tolist(),
                                   'metric_camera_pose':metric.tolist(),'scale':2.}]})
    reference={'id':7,'position':[0,0,0],'quaternion':[0,0,0,1]}
    pose=anchors.camera_pose([.1,0,0],[0,0,0,1],reference)
    assert np.allclose(pose[:3,3],[2.2,3,.2])
    with pytest.raises(ValueError,match='changed'):
        anchors.camera_pose([.1,0,0],[0,0,0,1],dict(reference,position=[.1,0,0]))
    with pytest.raises(ValueError,match='too far'):
        anchors.camera_pose([2,0,0],[0,0,0,1],reference)
    with pytest.raises(ValueError,match='no validated'):
        anchors.camera_pose([0,0,0],[0,0,0,1],dict(reference,id=99))


def test_saved_frame_alignment_preserves_distances_and_wraps_yaw():
    from jetnav.pose_anchors import planar_alignment,apply_planar_alignment
    source=np.array([7.6,4.6,3.1]);target=np.array([7.7,4.73,-3.1])
    alignment=planar_alignment(source,target)
    assert np.allclose(apply_planar_alignment(source,alignment),target)
    later=source+np.array([.3,.4,0.])
    assert np.isclose(np.linalg.norm(apply_planar_alignment(later,alignment)[:2]-target[:2]),.5)


def test_rejected_map_bundle_cannot_drive_localization():
    with pytest.raises(ValueError,match='rejected'):
        PoseAnchors({'validation_status':'rejected','anchors':[]})


def test_nonfinite_bootstrap_is_rejected_before_control():
    from jetnav.pose_anchors import apply_planar_alignment
    with pytest.raises(ValueError,match='bootstrap'):
        apply_planar_alignment([1,2,0],{'angle':float('nan'),'translation':[0,0]})


def test_optional_nearby_anchor_keeps_distance_and_changed_map_guards():
    raw=np.eye(4);near=raw.copy();near[0,3]=2
    metric=raw.copy();metric[:3,3]=[20,0,.2]
    bundle={'anchors':[{'keyframe_id':1,'raw_camera_pose':raw.tolist(),'metric_camera_pose':raw.tolist(),'scale':2.},
                       {'keyframe_id':2,'raw_camera_pose':near.tolist(),'metric_camera_pose':metric.tolist(),'scale':2.}]}
    ref={'id':1,'position':[0,0,0],'quaternion':[0,0,0,1]}
    anchors=PoseAnchors(bundle,allow_nearest=True)
    result=anchors.camera_pose([2.1,0,0],[0,0,0,1],ref)
    np.testing.assert_allclose(result[:3,3],[20.2,0,.2]);assert anchors.last_reference_id==2
    with pytest.raises(ValueError,match='changed'):
        anchors.camera_pose([2.1,0,0],[0,0,0,1],dict(ref,position=[.1,0,0]))
    with pytest.raises(ValueError,match='too far'):
        anchors.camera_pose([4,0,0],[0,0,0,1],ref)
    # Nearby geometry with an opposing camera view is not an eligible fallback.
    near[:3,:3]=np.diag([-1,-1,1]);bundle['anchors'][1]['raw_camera_pose']=near.tolist()
    with pytest.raises(ValueError,match='too far'):
        PoseAnchors(bundle,allow_nearest=True).camera_pose([2.1,0,0],[0,0,0,1],ref)
