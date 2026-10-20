"""Experimental local metric poses anchored to saved SLAM keyframes.

The Atlas remains in its visual coordinates. Metric reference poses come from
wheel/visual fusion, never simulation truth. Requires a frozen matching Atlas.
"""
import numpy as np
from scipy.spatial.transform import Rotation


def transform(position, quaternion):
    T=np.eye(4);T[:3,:3]=Rotation.from_quat(quaternion).as_matrix();T[:3,3]=position
    return T


def pose_time_supported(times, timestamp, maximum_gap=.25):
    """Allow exact observations or short interpolation, never tracking gaps."""
    times=np.asarray(times,float)
    if times.ndim!=1 or not np.isfinite(times).all() or np.any(np.diff(times)<=0):
        raise ValueError('Pose timestamps must be finite and chronological')
    if not np.isfinite(timestamp) or not np.isfinite(maximum_gap) or maximum_gap<=0:
        raise ValueError('Invalid interpolation query')
    if not len(times) or timestamp<times[0] or timestamp>times[-1]:return False
    right=int(np.searchsorted(times,timestamp))
    if right<len(times) and abs(times[right]-timestamp)<=1e-5:return True
    if right>0 and abs(times[right-1]-timestamp)<=1e-5:return True
    return bool(0<right<len(times) and times[right]-times[right-1]<=maximum_gap)


class PoseAnchors:
    def __init__(self,bundle,allow_nearest=False):
        if bundle.get('validation_status')=='rejected':raise ValueError('Metric anchor bundle was rejected: '+bundle.get('rejection_reason','unspecified'))
        self.bundle=bundle
        self.anchors={int(a['keyframe_id']):a for a in bundle['anchors']}
        self.maximum_distance=float(bundle.get('maximum_reference_distance_m',1.))
        self.allow_nearest=allow_nearest;self.last_reference_id=None
        self.anchor_ids=list(self.anchors)
        self.raw_poses=np.array([self.anchors[k]['raw_camera_pose'] for k in self.anchor_ids])
        self.scales=np.array([self.anchors[k]['scale'] for k in self.anchor_ids])

    def camera_pose(self,position,quaternion,reference):
        self.last_reference_id=None
        if reference is None:raise ValueError('No reference keyframe for metric localization')
        anchor=self.anchors.get(int(reference['id']))
        if anchor is None:raise ValueError('Reference keyframe has no validated metric anchor')
        reference_pose=transform(reference['position'],reference['quaternion'])
        stored_reference=np.asarray(anchor['raw_camera_pose'],float)
        if not np.allclose(reference_pose,stored_reference,atol=1e-3):
            raise ValueError('Reference keyframe changed after metric anchor export')
        camera=transform(position,quaternion)
        if not np.isfinite(camera).all():raise ValueError('Nonfinite visual camera pose')
        relative=np.linalg.inv(reference_pose)@camera
        relative[:3,3]*=float(anchor['scale'])
        if np.linalg.norm(relative[:3,3])>self.maximum_distance:
            replacement=None
            if self.allow_nearest:
                distances=np.linalg.norm(self.raw_poses[:,:3,3]-camera[:3,3],axis=1)*self.scales
                for index in np.argsort(distances):
                    if distances[index]>self.maximum_distance:break
                    rotation=self.raw_poses[index,:3,:3].T@camera[:3,:3]
                    if (np.trace(rotation)-1)/2<.5:continue  # at most 60 degrees
                    replacement=self.anchors[self.anchor_ids[index]];break
            if replacement is None:raise ValueError('Visual pose is too far from its metric reference keyframe')
            anchor=replacement
            relative=np.linalg.inv(np.asarray(anchor['raw_camera_pose']))@camera
            relative[:3,3]*=float(anchor['scale'])
        self.last_reference_id=int(anchor['keyframe_id'])
        return np.asarray(anchor['metric_camera_pose'],float)@relative


def camera_base_pose(camera):
    forward=camera[:3,2];yaw=float(np.arctan2(forward[1],forward[0]))
    return np.array([camera[0,3]-.06*np.cos(yaw),camera[1,3]-.06*np.sin(yaw),yaw])


def planar_alignment(source,target):
    angle=float((target[2]-source[2]+np.pi)%(2*np.pi)-np.pi)
    c,s=np.cos(angle),np.sin(angle);rotation=np.array([[c,-s],[s,c]])
    return {'angle':angle,'translation':(np.asarray(target[:2])-rotation@source[:2]).tolist()}


def apply_planar_alignment(pose,alignment):
    pose=np.asarray(pose,float);translation=np.asarray(alignment['translation'],float);a=float(alignment['angle'])
    if pose.shape!=(3,) or translation.shape!=(2,) or not np.isfinite(np.r_[pose,translation,a]).all():
        raise ValueError('Invalid metric bootstrap transform')
    c,s=np.cos(a),np.sin(a)
    xy=np.array([[c,-s],[s,c]])@pose[:2]+translation
    return np.r_[xy,(pose[2]+a+np.pi)%(2*np.pi)-np.pi]
