"""Conservative metric occupancy fusion. Sparse SLAM points never imply free space."""
import numpy as np
from .navigation import GridMap

class OccupancyMapper:
    def __init__(self,shape=(200,240),resolution=.05,position_uncertainty=0.):
        self.logodds=np.zeros(shape,np.float32); self.observed=np.zeros(shape,bool)
        self.resolution=resolution;self.position_uncertainty=position_uncertainty
    def ray(self,origin,end,hit=True):
        a=np.asarray(origin[:2])/self.resolution; b=np.asarray(end[:2])/self.resolution
        n=max(2,int(np.linalg.norm(b-a)*2)+1)
        cells=np.unique(np.floor(np.linspace(a,b,n)).astype(int),axis=0)
        # unique sorts coordinates; identify hit by explicit endpoint, not last index.
        target=np.floor(b).astype(int)
        inside=(cells[:,0]>=0)&(cells[:,0]<self.logodds.shape[1])&(cells[:,1]>=0)&(cells[:,1]<self.logodds.shape[0])
        cells=cells[inside]
        x,y=cells.T
        # Each cell occurs once in this ray. Keep ray order and saturation across
        # successive rays unchanged, but avoid one NumPy call per cell.
        increments=np.full(len(cells),-.4,dtype=self.logodds.dtype)
        if hit: increments[np.all(cells==target,axis=1)]=.85
        self.logodds[y,x]=np.clip(self.logodds[y,x]+increments,-5,5)
        self.observed[y,x]=True
    def sparse_obstacles(self,xyz):
        for p in np.asarray(xyz):
            if not np.isfinite(p).all() or not .04<p[2]<.45: continue
            x,y=np.floor(p[:2]/self.resolution).astype(int)
            if 0<=y<self.logodds.shape[0] and 0<=x<self.logodds.shape[1]:
                self.logodds[y,x]=min(5,max(.85,self.logodds[y,x]+.85)); self.observed[y,x]=True
    def grid(self):
        result=np.full(self.logodds.shape,-1,np.int8)
        result[self.observed&(self.logodds<-.2)]=0
        result[self.observed&(self.logodds>.6)]=100
        return GridMap(result,self.resolution,metadata={'position_uncertainty_m':self.position_uncertainty})

    def fuse_depth(self,depth,K,T_world_camera,max_range=4.,stride=12):
        """Fuse an auxiliary metric depth sensor, NOT monocular inferred depth.
        Optical camera coordinates: x right, y down, z forward. T is metric.
        Occupied evidence is applied after free rays to prevent same-frame clearing.
        """
        depth=np.asarray(depth);K=np.asarray(K);T=np.asarray(T_world_camera)
        v,u=np.mgrid[0:depth.shape[0]:stride,0:depth.shape[1]:stride]
        z=depth[v,u].reshape(-1);u=u.reshape(-1);v=v.reshape(-1)
        keep=np.isfinite(z)&(z>.05)&(z<max_range)
        z=z[keep];u=u[keep];v=v[keep]
        points=np.c_[(u-K[0,2])*z/K[0,0],(v-K[1,2])*z/K[1,1],z]
        xyz=points@T[:3,:3].T+T[:3,3]
        obstacles=[]
        for q in xyz:
            if q[2]<-.02 or q[2]>.45:continue
            # Ground returns give free space; obstacle returns mark their endpoint.
            hit=q[2]>.045
            self.ray(T[:3,3],q,hit=False)
            if hit:obstacles.append(q)
        self.sparse_obstacles(np.array(obstacles).reshape(-1,3))
