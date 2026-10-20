import heapq
import math
import json
import numpy as np
from scipy.ndimage import distance_transform_edt, uniform_filter, label

class GridMap:
    def __init__(self, grid, resolution=.05, origin=(0.,0.), radius=.15, margin=.08, metadata=None):
        self.grid=np.asarray(grid,dtype=np.int8); self.resolution=resolution
        self.origin=np.asarray(origin,float); self.radius=radius; self.margin=margin
        self.metadata=dict(metadata or {})
    def cell(self,xy): return tuple(np.floor((np.asarray(xy)-self.origin)/self.resolution).astype(int)[::-1])
    def world(self,cell): return (np.asarray(cell)[::-1]+.5)*self.resolution+self.origin
    def blocked(self):
        # Unknown is not traversable. Boundary outside the map is occupied.
        free=np.pad(self.grid==0,1,constant_values=False)
        uncertainty=float(self.metadata.get('position_uncertainty_m',0.))
        if not np.isfinite(uncertainty) or uncertainty<0: raise ValueError('Invalid map position uncertainty')
        return distance_transform_edt(free)[1:-1,1:-1]*self.resolution <= self.radius+self.margin+uncertainty+self.resolution/2**.5
    def valid(self,c,blocked): return 0<=c[0]<blocked.shape[0] and 0<=c[1]<blocked.shape[1] and not blocked[c]
    def plan(self,start,goal):
        b=self.blocked(); s=self.cell(start); t=self.cell(goal)
        if not self.valid(s,b) or not self.valid(t,b): raise ValueError('Start/goal is unknown, occupied, outside map, or lacks clearance')
        clearance=distance_transform_edt(~b)*self.resolution
        queue=[(0.,s)]; costs={s:0.}; parent={}
        while queue:
            _,u=heapq.heappop(queue)
            if u==t:
                cells=[u]
                while u in parent: u=parent[u]; cells.append(u)
                path=np.array([self.world(c) for c in cells[::-1]])
                path[-1]=np.asarray(goal)
                return path
            for dy,dx in ((0,1),(0,-1),(1,0),(-1,0),(1,1),(1,-1),(-1,1),(-1,-1)):
                v=(u[0]+dy,u[1]+dx)
                if not self.valid(v,b): continue
                if dy and dx and (b[u[0]+dy,u[1]] or b[u[0],u[1]+dx]): continue
                c=costs[u]+math.hypot(dx,dy)*(1+.15/max(clearance[v],.025))
                if c < costs.get(v,float('inf')):
                    costs[v]=c; parent[v]=u
                    heapq.heappush(queue,(c+math.dist(v,t),v))
        raise ValueError('No reachable path')
    def refresh_path(self,start,path):
        """Replan when new observations invalidate any cell of an active route.

        Raises ValueError if the new map cannot support a safe route. Callers
        must stop on that error rather than keep the previously valid route.
        """
        if not len(path):return path
        blocked=self.blocked()
        clear=self.valid(self.cell(start),blocked)
        previous=None
        # Include diagonal side cells, matching A*'s no-corner-cutting rule.
        for begin,end in zip(path[:-1],path[1:]):
            count=max(2,int(np.ceil(np.linalg.norm(end-begin)/(.5*self.resolution)))+1)
            for point in np.linspace(begin,end,count):
                cell=self.cell(point)
                if not self.valid(cell,blocked):clear=False;break
                if previous is not None and cell[0]!=previous[0] and cell[1]!=previous[1]:
                    if blocked[previous[0],cell[1]] or blocked[cell[0],previous[1]]:clear=False;break
                previous=cell
            if not clear:break
        if len(path)==1:clear=clear and self.valid(self.cell(path[0]),blocked)
        return path if clear else self.plan(start,path[-1])

    def frontier(self,start,visited=None,heading=None):
        # Reachable known-free frontier, with conservative clearance from unknown.
        blocked=self.blocked(); start_cell=self.cell(start)
        if not self.valid(start_cell,blocked): raise ValueError('Start lacks frontier planning clearance')
        components,_=label(~blocked)
        reachable=components==components[start_cell]
        unknown=self.grid<0
        if not np.any(unknown):raise ValueError('No reachable frontier remains')
        # Candidate observation positions must sit beyond the same uncertainty
        # margin as the planner. A fixed 0.4 m band disappears at larger margins.
        stand_off=self.radius+self.margin+float(self.metadata.get('position_uncertainty_m',0.))+self.resolution/2**.5
        unknown_distance=distance_transform_edt(~unknown)*self.resolution
        fringe=(self.grid==0)&(unknown_distance<=stand_off+.2)&reachable
        cells=np.argwhere(fringe)
        if not len(cells): raise ValueError('No reachable frontier remains')
        positions=np.array([self.world(c) for c in cells]); delta=positions-start
        distances=np.linalg.norm(delta,axis=1)
        eligible=distances>.6
        if visited is not None:
            for previous in visited:
                eligible &= np.linalg.norm(positions-np.asarray(previous),axis=1)>.6
        if heading is None:
            order=np.argsort(np.where(eligible,distances,np.inf))
        else:
            # Prefer observations of unknown space without repeated short backtracks.
            gain=uniform_filter(unknown.astype(float),size=max(31,2*int(np.ceil((stand_off+.2)/self.resolution))+1))
            facing=np.cos(np.arctan2(delta[:,1],delta[:,0])-heading)
            utility=gain[cells[:,0],cells[:,1]]/(1+distances)+.12*facing
            order=np.argsort(-np.where(eligible,utility,-np.inf))
        for i in order:
            if not eligible[i]: continue
            try:
                path=self.plan(start,self.world(cells[i]))
                if np.linalg.norm(path[-1]-start)>.6: return path
            except ValueError: pass
        raise ValueError('No reachable frontier remains')
    def save(self,path,source='sensor'):
        np.savez_compressed(path,grid=self.grid,resolution=self.resolution,origin=self.origin,source=source,
                            metadata_json=json.dumps(self.metadata,sort_keys=True),radius=self.radius,margin=self.margin)
    @classmethod
    def load(cls,path):
        with np.load(path,allow_pickle=False) as d:
            return cls(d['grid'],float(d['resolution']),d['origin'],
                       radius=float(d['radius']) if 'radius' in d else .15,
                       margin=float(d['margin']) if 'margin' in d else .08,
                       metadata=json.loads(str(d['metadata_json'])) if 'metadata_json' in d else {})

def wrap(a): return (a+np.pi)%(2*np.pi)-np.pi

def command(pose,path,max_speed=.22,goal_tolerance=.10,max_yaw_rate=1.5):
    if not all(np.isfinite(v) and v>0 for v in (max_speed,goal_tolerance,max_yaw_rate)):
        raise ValueError("Controller limits must be finite and positive")
    distances=np.linalg.norm(path-np.asarray(pose[:2]),axis=1)
    closest=int(np.argmin(distances)); k=min(closest+4,len(path)-1)
    delta=path[k]-pose[:2]; err=wrap(math.atan2(delta[1],delta[0])-pose[2])
    remaining=np.linalg.norm(path[-1]-pose[:2])
    if remaining<goal_tolerance: return np.zeros(2), True
    v=min(max_speed,remaining)*max(0.,math.cos(err)) if abs(err)<.65 else 0.
    return np.array([v,float(np.clip(2.8*err,-max_yaw_rate,max_yaw_rate))]),False

def wheels(twist,r=.03,b=.1125):
    v,w=twist; return np.array([(v-w*b/2)/r,(v+w*b/2)/r])

def integrate(pose,wheel,dt=.05,r=.03,b=.1125):
    v=r*(wheel[0]+wheel[1])/2; w=r*(wheel[1]-wheel[0])/b
    theta=pose[2]+w*dt/2
    return np.array([pose[0]+v*np.cos(theta)*dt,pose[1]+v*np.sin(theta)*dt,wrap(pose[2]+w*dt)])
