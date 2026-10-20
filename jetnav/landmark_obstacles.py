"""Project relative monocular landmarks into the wheel/visual metric frame."""
import numpy as np


def fit_floor_plane(points, camera_xy, seed=0):
    """Bounded local floor hypothesis from RGB landmarks, never scene truth.

    Returns z = a*(x-camera_x)+b*(y-camera_y)+c. Rejects planes
    without two-dimensional support or consistent with a raised surface.
    A failed hypothesis supplies no new obstacle evidence.
    """
    points=np.asarray(points,float)
    if points.ndim!=2 or points.shape[1]!=3 or not np.isfinite(points).all():
        raise ValueError('Invalid metric landmarks')
    xy=points[:,:2]-np.asarray(camera_xy,float)
    candidate=np.abs(points[:,2])<.2
    p=np.column_stack((xy[candidate],np.ones(candidate.sum())))
    z=points[candidate,2]
    if len(z)<30:return None
    rng=np.random.default_rng(seed);best=None;best_count=0
    def plausible(coeff):
        return np.linalg.norm(coeff[:2])<=np.tan(np.deg2rad(10)) and abs(coeff[2])<=.08
    for _ in range(100):
        ids=rng.choice(len(z),3,replace=False)
        if abs(np.linalg.det(p[ids]))<.005:continue
        coeff=np.linalg.solve(p[ids],z[ids])
        if not plausible(coeff):continue
        mask=abs(p@coeff-z)<.025
        count=int(mask.sum())
        if count>best_count:best,best_count=mask,count
    if best is None or best_count<max(30,.35*len(z)):return None
    centered=p[best,:2]-p[best,:2].mean(axis=0)
    if np.linalg.eigvalsh(centered.T@centered/best_count)[0]<.01:return None
    coeff=np.linalg.lstsq(p[best],z[best],rcond=None)[0]
    if not plausible(coeff):return None
    return coeff


def metric_landmarks(points,raw_camera,metric_camera,scale):
    points=np.asarray(points,float);raw=np.asarray(raw_camera,float);metric=np.asarray(metric_camera,float)
    if points.ndim!=2 or points.shape[1]!=3 or raw.shape!=(4,4) or metric.shape!=(4,4):raise ValueError('Invalid point/camera shape')
    if not np.isfinite(scale) or scale<=0 or not np.isfinite(raw).all() or not np.isfinite(metric).all():raise ValueError('Invalid camera calibration')
    local=(points-raw[:3,3])@raw[:3,:3]*scale
    # Only visible, finite front-camera points in the calibrated image and range.
    z=local[:,2]
    visible=np.isfinite(local).all(axis=1)&(z>.1)&(z<4)&(np.abs(local[:,0])<z*320/480)&(np.abs(local[:,1])<z*240/480)
    return local[visible]@metric[:3,:3].T+metric[:3,3]
