import numpy as np
import pytest
from jetnav.map_identity import metric_frame_id, check_frame
from jetnav.navigation import GridMap


def test_saved_map_retains_metric_frame_and_rejects_other_calibration(tmp_path):
    alignment={'scale':1.,'rotation':np.eye(3).tolist(),'translation':[0,0,0],'atlas_sha256':'a'*64}
    identity=metric_frame_id(alignment)
    grid=GridMap(np.zeros((30,30),np.int8),radius=.2,margin=.1,metadata={'metric_frame_id':identity})
    path=tmp_path/'map.npz';grid.save(path)
    loaded=GridMap.load(path)
    assert loaded.radius==.2 and loaded.margin==.1
    assert check_frame(loaded.metadata,identity)=='verified'
    for changed in ({**alignment,'scale':2.},{**alignment,'atlas_sha256':'b'*64}):
        with pytest.raises(ValueError,match='do not match'):
            check_frame(loaded.metadata,metric_frame_id(changed))
    with pytest.raises(ValueError):check_frame(loaded.metadata,None)
    expanded=dict(alignment,atlas_sha256='c'*64,reference_atlas_sha256=alignment['atlas_sha256'])
    assert metric_frame_id(expanded)==identity
