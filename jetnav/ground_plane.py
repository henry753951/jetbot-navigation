"""Experimental RGB ground-plane consistency; flat floor and measured camera mount are priors.

Returns directly observed floor points only. Does not clear rays or infer free
space in unobserved cells. No simulator depth, scene geometry or truth poses.
"""
import cv2
import numpy as np


def consistent_floor(reference, source, K, T_reference, T_source, maximum=4., reject_ambiguous=False):
    K=np.asarray(K,float);first=np.asarray(T_reference,float);second=np.asarray(T_source,float)
    if reference.shape!=source.shape or reference.ndim!=3:
        raise ValueError('Expected equal RGB image shapes')
    if K.shape!=(3,3) or first.shape!=(4,4) or second.shape!=(4,4):
        raise ValueError('Invalid calibration shape')
    if not all(np.isfinite(x).all() for x in (K,first,second)) or first[2,3]<=0 or second[2,3]<=0:
        raise ValueError('Finite calibration and positive camera heights required')
    gray=cv2.cvtColor(reference,cv2.COLOR_RGB2GRAY).astype(np.float32)/255
    other=cv2.cvtColor(source,cv2.COLOR_RGB2GRAY).astype(np.float32)/255
    h,w=gray.shape;v,u=np.mgrid[:h,:w]
    rays=np.stack([(u-K[0,2])/K[0,0],(v-K[1,2])/K[1,1],np.ones_like(u)],axis=-1)
    direction=rays@first[:3,:3].T
    distance=np.divide(-first[2,3],direction[:,:,2],out=np.full((h,w),np.nan),where=direction[:,:,2]<-1e-6)
    points=direction*distance[:,:,None]+first[:3,3]
    camera=(points-second[:3,3])@second[:3,:3]
    z=camera[:,:,2]
    mx=(K[0,0]*camera[:,:,0]/np.maximum(z,1e-6)+K[0,2]).astype(np.float32)
    my=(K[1,1]*camera[:,:,1]/np.maximum(z,1e-6)+K[1,2]).astype(np.float32)
    relative=np.linalg.inv(second)@first
    rotated=rays@relative[:3,:3].T
    rx=K[0,0]*rotated[:,:,0]/np.maximum(rotated[:,:,2],1e-6)+K[0,2]
    ry=K[1,1]*rotated[:,:,1]/np.maximum(rotated[:,:,2],1e-6)+K[1,2]
    parallax=np.hypot(mx-rx,my-ry)
    valid=(np.isfinite(distance)&(distance>.1)&(distance<maximum)&(z>.05)&
           (mx>=3)&(mx<w-3)&(my>=3)&(my<h-3)&(parallax>1.5))
    valid=cv2.erode(valid.astype(np.uint8),np.ones((5,5),np.uint8)).astype(bool)
    warped=cv2.remap(other,np.nan_to_num(mx,nan=-1000),np.nan_to_num(my,nan=-1000),cv2.INTER_LINEAR)
    mean=lambda x:cv2.boxFilter(x,-1,(5,5))
    a,b=mean(gray),mean(warped)
    va=np.maximum(mean(gray*gray)-a*a,0);vb=np.maximum(mean(warped*warped)-b*b,0)
    correlation=(mean(gray*warped)-a*b)/np.sqrt(np.maximum(va*vb,1e-12))
    error=mean(abs(gray-warped))
    valid &= (va>.0008)&(vb>.0008)&(correlation>.92)&(error<.06)
    if reject_ambiguous:
        # A match to the floor is not evidence of floor if low raised surfaces
        # explain it equally well (e.g. an edge parallel to camera translation).
        alternative=np.full((h,w),np.inf);support=np.zeros((h,w),np.uint8)
        for elevation in (.04,.08,.12):
            if elevation>=min(first[2,3],second[2,3]):continue
            lam=distance*(first[2,3]-elevation)/first[2,3]
            elevated=direction*lam[:,:,None]+first[:3,3]
            candidate=(elevated-second[:3,3])@second[:3,:3]
            cz=candidate[:,:,2]
            cx=(K[0,0]*candidate[:,:,0]/np.maximum(cz,1e-6)+K[0,2]).astype(np.float32)
            cy=(K[1,1]*candidate[:,:,1]/np.maximum(cz,1e-6)+K[1,2]).astype(np.float32)
            visible=(cz>.05)&(cx>=3)&(cx<w-3)&(cy>=3)&(cy<h-3)
            visible=cv2.erode(visible.astype(np.uint8),np.ones((5,5),np.uint8)).astype(bool)
            competitor=cv2.remap(other,np.nan_to_num(cx,nan=-1000),np.nan_to_num(cy,nan=-1000),cv2.INTER_LINEAR)
            alternative=np.minimum(alternative,np.where(visible,mean(abs(gray-competitor)),np.inf))
            support+=visible
        valid &= (support>=2)&(alternative-error>.01)
    return points,valid


def observed_floor_cells(mask,K,T_world_camera,shape=(200,240),resolution=.05,origin=(0.,0.)):
    """Require the complete projected cell bounding box to have floor evidence.

    Inverse rasterization fills perspective sampling gaps without morphological
    free-space filling. The image bounding box over-approximates the projected
    cell, so requiring all of it is deliberately conservative.
    """
    mask=np.asarray(mask,bool);K=np.asarray(K,float);T=np.asarray(T_world_camera,float)
    y,x=np.mgrid[:shape[0],:shape[1]]
    centers=np.stack([(x+.5)*resolution+origin[0],(y+.5)*resolution+origin[1],np.zeros(shape)],axis=-1)
    offsets=np.array([[-.5,-.5,0],[.5,-.5,0],[.5,.5,0],[-.5,.5,0]])*resolution
    camera=(centers[:,:,None,:]+offsets-T[:3,3])@T[:3,:3]
    z=camera[:,:,:,2]
    u=K[0,0]*camera[:,:,:,0]/np.maximum(z,1e-6)+K[0,2]
    v=K[1,1]*camera[:,:,:,1]/np.maximum(z,1e-6)+K[1,2]
    left=np.floor(u.min(axis=2)).astype(np.int64);right=np.ceil(u.max(axis=2)).astype(np.int64)
    top=np.floor(v.min(axis=2)).astype(np.int64);bottom=np.ceil(v.max(axis=2)).astype(np.int64)
    h,w=mask.shape
    visible=(z>.05).all(axis=2)&(left>=0)&(right<w)&(top>=0)&(bottom<h)
    left=np.clip(left,0,w-1);right=np.clip(right,0,w-1);top=np.clip(top,0,h-1);bottom=np.clip(bottom,0,h-1)
    invalid=cv2.integral((~mask).astype(np.uint8))
    missing=invalid[bottom+1,right+1]-invalid[top,right+1]-invalid[bottom+1,left]+invalid[top,left]
    return visible&(missing==0)
