import cv2
import numpy as np
from jetnav.monocular_depth import temporal_depth


def test_temporal_stereo_recovers_textured_plane_and_rejects_no_baseline():
    rng = np.random.default_rng(4)
    gray = rng.integers(0, 256, (120, 160), dtype=np.uint8)
    gray = cv2.GaussianBlur(gray, (3, 3), .7)
    reference = np.repeat(gray[:, :, None], 3, axis=2)
    K = np.array([[120., 0, 80], [0, 120., 60], [0, 0, 1]])
    first = np.eye(4)
    second = np.eye(4)
    second[0, 3] = .4
    # A plane at z=2 projects 24 pixels left after the camera moves right.
    source = cv2.warpAffine(reference, np.float32([[1, 0, -24], [0, 1, 0]]), (160, 120))
    depth = temporal_depth(reference, source, K, first, second, planes=256)
    finite = depth[np.isfinite(depth)]
    assert len(finite) > 4000
    assert abs(np.median(finite)-2.) < .06
    assert np.quantile(abs(finite-2.), .95) < .1
    assert not np.isfinite(temporal_depth(reference, reference, K, first, first)).any()
