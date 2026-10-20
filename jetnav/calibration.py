"""Metric Sim(3) calibration from wheel odometry; no simulation truth input."""
import numpy as np


def calibrate_initial_heading(times, xyz, quaternions, odometry, camera_height=.1935, camera_forward=.06):
    """Forward encoder baseline with visual heading changes and one known heading.

    Unlike averaging every camera orientation as if the vehicle never turned,
    anchor the rotation to the observation at the known initial placement.
    Only encoder displacement magnitudes supply metric scale. No truth input.
    """
    from scipy.spatial.transform import Rotation
    times=np.asarray(times,float);xyz=np.asarray(xyz,float);odometry=np.asarray(odometry,float)
    if times.ndim!=1 or len(times)<8 or xyz.shape!=(len(times),3) or odometry.ndim!=2 or odometry.shape[1]!=4 or len(odometry)<2:
        raise ValueError('Invalid calibration observations')
    if not all(np.isfinite(x).all() for x in (times,xyz,odometry)) or np.any(np.diff(times)<=0) or np.any(np.diff(odometry[:,0])<=0):
        raise ValueError('Finite chronological observations required')
    if abs(times[0]-odometry[0,0])>1e-6 or times[-1]>odometry[-1,0]:
        raise ValueError('Initial camera observation must coincide with known placement')
    pitch=np.arctan(.1)
    optical=np.array([[0,-np.sin(pitch),np.cos(pitch)],[-1,0,0],[0,-np.cos(pitch),-np.sin(pitch)]])
    camera_rotations=Rotation.from_quat(quaternions).as_matrix()
    if camera_rotations.shape!=(len(times),3,3):raise ValueError('Quaternion count mismatch')
    rotation=Rotation.from_rotvec([0,0,odometry[0,3]]).as_matrix()@optical@camera_rotations[0].T
    world_camera=rotation@camera_rotations
    yaw=np.unwrap(np.arctan2(world_camera[:,1,2],world_camera[:,0,2]))
    span=float(np.max(Rotation.from_matrix(camera_rotations@camera_rotations[0].T).magnitude()))
    if span>.03:raise ValueError('Requires a forward, approximately straight calibration phase')
    lengths=np.linalg.norm(np.diff(odometry[:,1:3],axis=0),axis=1)
    middle=(odometry[:-1,0]+odometry[1:,0])/2
    heading=np.interp(middle,times,yaw)
    displacement=np.c_[lengths*np.cos(heading),lengths*np.sin(heading)]
    base=np.r_[odometry[:1,1:3],odometry[:1,1:3]+np.cumsum(displacement,axis=0)]
    target=np.c_[np.interp(times,odometry[:,0],base[:,0])+camera_forward*np.cos(yaw),
                 np.interp(times,odometry[:,0],base[:,1])+camera_forward*np.sin(yaw),np.full(len(times),camera_height)]
    if np.linalg.norm(target[-1]-target[0])<.5:raise ValueError('Need at least 0.5 m baseline')
    x=(xyz-xyz.mean(0))@rotation.T;y=target-target.mean(0)
    denominator=float(np.sum(x*x))
    if denominator<1e-8:raise ValueError('No visual translation baseline')
    scale=float(np.sum(x*y)/denominator);translation=target.mean(0)-scale*rotation@xyz.mean(0)
    rmse=float(np.sqrt(np.mean(np.sum((scale*xyz@rotation.T+translation-target)**2,axis=1))))
    if scale<=0 or rmse>.05:raise ValueError('Inconsistent encoder/visual calibration')
    return {'source':'initial known heading + visual relative rotations + forward wheel distances; no GT fit',
            'scale':scale,'rotation':rotation.tolist(),'translation':translation.tolist(),
            'calibration_rmse_m':rmse,'correspondences':len(times),'visual_rotation_span_rad':span,
            'camera_height_m':camera_height,'camera_forward_m':camera_forward,
            'limitations':['Requires known initial placement and camera mounting','Forward encoder baseline may slip; visual rotation may drift','Independent metric navigation validation required']}


def fit_similarity(source, target):
    source, target = np.asarray(source, float), np.asarray(target, float)
    if source.shape != target.shape or source.ndim != 2 or source.shape[1] != 3:
        raise ValueError('Expected corresponding Nx3 coordinates')
    if len(source) < 10 or not np.isfinite(source).all() or not np.isfinite(target).all():
        raise ValueError('Insufficient finite correspondences')
    x, y = source-source.mean(0), target-target.mean(0)
    # A turning, planar trajectory is sufficient; a stationary/straight run is not.
    target_spread = np.linalg.svd(y/np.sqrt(len(y)), compute_uv=False)
    if target_spread[1] < .08:
        raise ValueError('Calibration needs translation in two directions; include a turn')
    variance = np.mean(np.sum(x*x, axis=1))
    if variance < 1e-8:
        raise ValueError('Visual trajectory has no usable baseline')
    u, singular, vt = np.linalg.svd(y.T@x/len(x))
    sign = np.eye(3); sign[-1,-1] = np.linalg.det(u@vt)
    rotation = u@sign@vt
    scale = np.trace(np.diag(singular)@sign)/variance
    if not np.isfinite(scale) or scale <= 0:
        raise ValueError('Invalid scale')
    translation = target.mean(0)-scale*rotation@source.mean(0)
    errors = np.linalg.norm(scale*source@rotation.T+translation-target, axis=1)
    return scale, rotation, translation, errors


def calibrate(times, xyz, odometry, camera_forward=.06, camera_height=.19):
    times, xyz = np.asarray(times), np.asarray(xyz)
    odometry = np.asarray(odometry)
    if np.any(np.diff(times)<=0) or np.any(np.diff(odometry[:,0])<=0):
        raise ValueError('Timestamps must strictly increase')
    if times[0]<odometry[0,0] or times[-1]>odometry[-1,0]:
        raise ValueError('Visual timestamps outside encoder coverage')
    yaw = np.interp(times,odometry[:,0],np.unwrap(odometry[:,3]))
    target=np.c_[np.interp(times,odometry[:,0],odometry[:,1])+camera_forward*np.cos(yaw),
                 np.interp(times,odometry[:,0],odometry[:,2])+camera_forward*np.sin(yaw),
                 np.full(len(times),camera_height)]
    scale,rotation,translation,errors=fit_similarity(xyz,target)
    if np.sqrt(np.mean(errors**2))>.15:
        raise ValueError('Visual/encoder inconsistency exceeds 15 cm; inspect slip, timestamps and map resets')
    return {'source':'wheel encoder odometry + known start placement + measured camera extrinsics; no GT fit',
            'scale':float(scale),'rotation':rotation.tolist(),'translation':translation.tolist(),
            'calibration_rmse_m':float(np.sqrt(np.mean(errors**2))),
            'calibration_max_error_m':float(np.max(errors)), 'correspondences':len(times),
            'camera_forward_m':camera_forward,'camera_height_m':camera_height,
            'limitations':['Encoder slip and wheel calibration affect metric accuracy',
                           'Known initial placement defines map frame; this is not global positioning']}


def calibrate_straight(times, xyz, quaternions, odometry, camera_height=.1935, camera_forward=.06):
    """Use a known straight initial heading to resolve orientation, wheels for scale.

    A straight path alone cannot solve full Sim(3). The measured camera mounting
    rotation and known initial heading supply that otherwise missing constraint.
    """
    from scipy.spatial.transform import Rotation
    times=np.asarray(times);xyz=np.asarray(xyz);odometry=np.asarray(odometry)
    if len(times)<8 or np.any(np.diff(times)<=0):raise ValueError('Need at least 8 chronological visual poses')
    if times[0]<odometry[0,0] or times[-1]>odometry[-1,0]:raise ValueError('Timestamps outside encoder coverage')
    yaw=np.interp(times,odometry[:,0],np.unwrap(odometry[:,3]))
    encoder_heading_change=float(np.ptp(yaw))
    # Wheel slip can bias heading during startup. The calibration procedure's
    # known straight heading supplies orientation, not wheel differential yaw.
    yaw=np.full(len(times),odometry[0,3])
    distance=np.r_[0.,np.cumsum(np.linalg.norm(np.diff(odometry[:,1:3],axis=0),axis=1))]
    travel=np.interp(times,odometry[:,0],distance)
    target=np.c_[odometry[0,1]+(travel+camera_forward)*np.cos(yaw),odometry[0,2]+(travel+camera_forward)*np.sin(yaw),np.full(len(times),camera_height)]
    if np.linalg.norm(target[-1]-target[0])<.5:raise ValueError('Need at least 0.5 m of observed straight baseline')
    pitch=np.arctan(.1)
    optical=np.array([[0,-np.sin(pitch),np.cos(pitch)],[-1,0,0],[0,-np.cos(pitch),-np.sin(pitch)]])
    world_base=Rotation.from_rotvec(np.c_[np.zeros(len(yaw)),np.zeros(len(yaw)),yaw]).as_matrix()
    slam_camera=Rotation.from_quat(quaternions).as_matrix()
    visual_rotation_span=float(np.max(Rotation.from_matrix(slam_camera@slam_camera[0].T).magnitude()))
    if visual_rotation_span>.03:raise ValueError('Visual rotations contradict known straight heading')
    if times[0]>odometry[0,0]+1.:raise ValueError('Map did not anchor to the known initial straight heading')
    rotations=world_base@optical@slam_camera.transpose(0,2,1)
    rotation=Rotation.from_matrix(rotations).mean().as_matrix()
    x=(xyz-xyz.mean(0))@rotation.T;y=target-target.mean(0)
    scale=np.sum(x*y)/np.sum(x*x)
    translation=target.mean(0)-scale*rotation@xyz.mean(0)
    errors=np.linalg.norm(scale*xyz@rotation.T+translation-target,axis=1)
    if scale<=0 or np.sqrt(np.mean(errors**2))>.05:raise ValueError('Inconsistent straight calibration')
    return {'source':'straight wheel-encoder baseline + known initial heading + measured camera mounting; no GT fit',
            'scale':float(scale),'rotation':rotation.tolist(),'translation':translation.tolist(),
            'calibration_rmse_m':float(np.sqrt(np.mean(errors**2))),'correspondences':len(times),
            'baseline_m':float(np.linalg.norm(target[-1]-target[0])),'encoder_heading_change_rad':encoder_heading_change,'visual_rotation_span_rad':visual_rotation_span,
            'camera_height_m':camera_height,'camera_forward_m':camera_forward,
            'limitations':['Requires known initial heading and measured camera rotation',
                           'Wheel scale is sensitive to slipping; calibrate on a straight, high-traction segment']}
