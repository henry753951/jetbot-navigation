"""Conservative occupancy transfer between calibrated metric coordinate frames."""
import numpy as np
from .navigation import GridMap


def reframe_grid(grid, matrix, translation, frame_id, source):
    matrix=np.asarray(matrix,float);translation=np.asarray(translation,float)
    if matrix.shape!=(2,2) or translation.shape!=(2,) or not np.isfinite(matrix).all() or not np.isfinite(translation).all() or np.linalg.det(matrix)<=1e-8:
        raise ValueError('Require a finite invertible orientation-preserving map transform')
    if not isinstance(frame_id,str) or not frame_id:raise ValueError('Missing target metric frame')
    h,w=grid.grid.shape;yy,xx=np.mgrid[:h,:w]
    centers=np.stack([xx+.5,yy+.5],axis=-1)*grid.resolution+grid.origin
    corners=centers[:,:,None,:]+np.array([[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]])*grid.resolution
    old=(corners-translation)@np.linalg.inv(matrix).T
    # Include all cells with positive-area overlap with an inverse bounding box.
    # Bounding boxes over-approximate the actual inverse parallelogram.
    low=np.floor((old.min(axis=2)-grid.origin)/grid.resolution+1e-10).astype(int)
    high=np.ceil((old.max(axis=2)-grid.origin)/grid.resolution-1e-10).astype(int)-1
    inside=(low[:,:,0]>=0)&(low[:,:,1]>=0)&(high[:,:,0]<w)&(high[:,:,1]<h)
    x0=np.clip(low[:,:,0],0,w);y0=np.clip(low[:,:,1],0,h)
    x1=np.clip(high[:,:,0]+1,0,w);y1=np.clip(high[:,:,1]+1,0,h)
    def count(mask):
        summed=np.pad(mask.astype(np.int64).cumsum(0).cumsum(1),((1,0),(1,0)))
        return summed[y1,x1]-summed[y0,x1]-summed[y1,x0]+summed[y0,x0]
    output=np.full((h,w),-1,np.int8)
    output[inside&(count(grid.grid!=0)==0)]=0
    output[count(grid.grid==100)>0]=100
    metadata=dict(grid.metadata,metric_frame_id=frame_id,metric_source=source,
                  experimental=True,reframe_rule='inverse cell bounding boxes: all source free required; any occupied dominates; outside unknown')
    return GridMap(output,grid.resolution,grid.origin.copy(),grid.radius,grid.margin,metadata)
