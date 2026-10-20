"""Load metric camera poses from recorded wheel/visual estimates, never truth fields."""
import numpy as np


def planar_fusion_cameras(report):
    if not report.get('fusion',{}).get('enabled') or report.get('map_frame_check')!='verified':
        raise ValueError('Requires fused estimates in a verified metric map frame')
    identity=report.get('metric_frame_id')
    if not isinstance(identity,str) or not identity:raise ValueError('Missing metric frame identity')
    height=float(report['wheel_geometry']['root_height_above_ground_m'])+.16
    samples=report['visual_samples'];times=np.array([s['t'] for s in samples],float)
    base=np.array([s['fused'] for s in samples],float)
    if base.shape!=(len(times),3) or not np.isfinite(base).all() or not np.isfinite(times).all() or np.any(np.diff(times)<=0) or not np.isfinite(height) or height<=0:
        raise ValueError('Invalid chronological fused pose record')
    pitch=np.arctan(.1)
    optical=np.array([[0,-np.sin(pitch),np.cos(pitch)],[-1,0,0],[0,-np.cos(pitch),-np.sin(pitch)]])
    cameras=np.repeat(np.eye(4)[None],len(times),axis=0)
    for i,(x,y,yaw) in enumerate(base):
        c,s=np.cos(yaw),np.sin(yaw)
        cameras[i,:3,:3]=np.array([[c,-s,0],[s,c,0],[0,0,1]])@optical
        cameras[i,:3,3]=[x+.06*c,y+.06*s,height]
    valid=np.array([bool(s['valid']) for s in samples])
    return times,valid,cameras,{'metric_frame_id':identity,'metric_source':report['metric_source'],
        'camera_height_m':height,'camera_pitch_rad':float(pitch),'pose_source':'recorded wheel/visual fusion, rigid JetBot camera mount; truth fields ignored'}
