import numpy as np
import pytest
from jetnav.recorded_poses import planar_fusion_cameras


def test_camera_loader_uses_fusion_and_mount_not_truth():
    report={'fusion':{'enabled':True},'map_frame_check':'verified','metric_frame_id':'frame',
            'metric_source':'encoder calibration','wheel_geometry':{'root_height_above_ground_m':.0335},
            'visual_samples':[{'t':0.,'valid':True,'fused':[2.,3.,0.],'truth':'MUST NOT BE READ'},
                              {'t':.1,'valid':False,'fused':[2.,3.,np.pi/2]}]}
    times,valid,cameras,metadata=planar_fusion_cameras(report)
    np.testing.assert_allclose(cameras[0,:3,3],[2.06,3,.1935])
    np.testing.assert_allclose(cameras[1,:3,3],[2,3.06,.1935])
    assert valid.tolist()==[True,False]
    assert metadata['metric_frame_id']=='frame'
    report['map_frame_check']='legacy'
    with pytest.raises(ValueError):planar_fusion_cameras(report)
