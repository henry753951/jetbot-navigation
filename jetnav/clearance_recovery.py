"""Bounded recovery from conservative grid inflation, without reducing clearance."""
import numpy as np
from scipy.spatial import cKDTree
from .navigation import wrap


class ExactClearance:
    """Snapshot distance to closed unknown/occupied cell boxes and map boundaries."""
    def __init__(self,grid):
        self.resolution=grid.resolution;self.origin=grid.origin.copy()
        self.upper=self.origin+np.array(grid.grid.shape[::-1])*grid.resolution
        self.required=grid.radius+grid.margin+float(grid.metadata.get('position_uncertainty_m',0.))
        if not np.isfinite(self.required) or self.required<=0:raise ValueError('Invalid required clearance')
        self.centers=np.argwhere(grid.grid!=0)[:,::-1]*grid.resolution+grid.origin+grid.resolution/2
        self.tree=cKDTree(self.centers) if len(self.centers) else None

    def distance(self,points):
        points=np.atleast_2d(np.asarray(points,float))
        if points.shape[1]!=2 or not np.isfinite(points).all():raise ValueError('Invalid query points')
        result=np.minimum(points-self.origin,self.upper-points).min(axis=1)
        if self.tree is not None:
            nearest=self.tree.query(points)[0]
            # Any box closer than the nearest center is inside this radius.
            neighborhoods=self.tree.query_ball_point(points,nearest+self.resolution/2**.5)
            for i,(point,ids) in enumerate(zip(points,neighborhoods)):
                delta=np.maximum(abs(self.centers[ids]-point)-self.resolution/2,0)
                result[i]=min(result[i],float(np.linalg.norm(delta,axis=1).min()))
        return result

    def segment_clear(self,start,end):
        count=max(2,int(np.ceil(np.linalg.norm(np.asarray(end)-start)/.005))+1)
        distances=self.distance(np.linspace(start,end,count))
        # Distance is 1-Lipschitz; half the sampling interval bounds the gap
        # between evaluated samples. Includes the same position uncertainty.
        return bool(distances.min()>=self.required+.0025)


class ClearanceRecovery:
    def __init__(self):
        self.state='idle';self.events=[];self.attempts=0;self.total_attempts=0
        self.budget_origin=None;self.target=None;self.origin=None;self.elapsed=0.
        self.max_distance=.25;self.max_seconds=25.;self.speed=.025;self.yaw_rate=.12

    @property
    def active(self):return self.state=='active'

    def cancel(self,reset=False):
        self.state='idle'
        if reset:self.attempts=0;self.budget_origin=None

    def start(self,grid,pose,timestamp):
        pose=np.asarray(pose,float)
        if self.budget_origin is not None and np.linalg.norm(pose[:2]-self.budget_origin)>=.3:
            self.attempts=0;self.budget_origin=None
        if self.active or self.attempts>=2:return False
        blocked=grid.blocked()
        if grid.valid(grid.cell(pose[:2]),blocked):return False
        oracle=ExactClearance(grid)
        if oracle.distance(pose[:2])[0]<oracle.required+.0025:return False
        positions=np.array([grid.world(c) for c in np.argwhere(~blocked)]).reshape(-1,2)
        distance=np.linalg.norm(positions-pose[:2],axis=1)
        positions=positions[(distance>.05)&(distance<=self.max_distance)]
        if not len(positions):return False
        positions=positions[oracle.distance(positions)>=oracle.required+.04]
        candidates=[]
        for target in positions:
            delta=target-pose[:2];angle=abs(wrap(np.arctan2(delta[1],delta[0])-pose[2]))
            if angle<=np.pi/2:candidates.append((np.linalg.norm(delta)+.03*angle,target))
        for _,target in sorted(candidates,key=lambda pair:pair[0]):
            if not oracle.segment_clear(pose[:2],target):continue
            self.origin=pose.copy();self.target=target.copy();self.elapsed=0.;self.state='active'
            self.minimum_checked_clearance=float(oracle.distance(pose[:2])[0])
            if self.budget_origin is None:self.budget_origin=pose[:2].copy()
            self.attempts+=1;self.total_attempts+=1
            self.events.append({'t':timestamp,'event':'started','pose':pose.tolist(),'target':target.tolist(),
                                'required_clearance_m':oracle.required,'initial_exact_clearance_m':float(oracle.distance(pose[:2])[0])})
            return True
        return False

    def step(self,grid,pose,dt,visual_valid,timestamp):
        if not self.active:return np.zeros(2)
        self.elapsed+=dt;pose=np.asarray(pose,float);oracle=ExactClearance(grid)
        current_clearance=float(oracle.distance(pose[:2])[0])
        self.minimum_checked_clearance=min(self.minimum_checked_clearance,current_clearance)
        reason=None
        if not visual_valid:reason='visual_pose_unavailable'
        elif self.elapsed>self.max_seconds:reason='timeout'
        elif np.linalg.norm(pose[:2]-self.origin[:2])>self.max_distance:reason='displacement_limit'
        elif abs(wrap(pose[2]-self.origin[2]))>np.pi/2:reason='rotation_limit'
        elif current_clearance<oracle.required+.0025:reason='clearance_lost'
        if reason is not None:
            self.state='failed';self.events.append({'t':timestamp,'event':'failed','reason':reason,'pose':pose.tolist()});return np.zeros(2)
        # A rotating camera can briefly clear the current grid cell before the
        # robot has actually moved into the selected safe interior. Finish at
        # the connector target, not at the first transient valid boundary cell.
        at_target=np.linalg.norm(pose[:2]-self.target)<=.02
        if at_target and grid.valid(grid.cell(pose[:2]),grid.blocked()) and current_clearance>=oracle.required+.025:
            self.state='completed';self.events.append({'t':timestamp,'event':'completed','pose':pose.tolist(),
                'minimum_checked_clearance_m':self.minimum_checked_clearance,'required_clearance_m':oracle.required,
                'estimated_displacement_m':float(np.linalg.norm(pose[:2]-self.origin[:2]))});return np.zeros(2)
        if not oracle.segment_clear(pose[:2],self.target):
            self.state='failed';self.events.append({'t':timestamp,'event':'failed','reason':'connector_invalidated','pose':pose.tolist()});return np.zeros(2)
        delta=self.target-pose[:2];angle=wrap(np.arctan2(delta[1],delta[0])-pose[2])
        velocity=self.speed if abs(angle)<.1 else 0.
        if velocity:
            ahead=pose[:2]+.01*np.array([np.cos(pose[2]),np.sin(pose[2])])
            if not oracle.segment_clear(pose[:2],ahead):velocity=0.
        return np.array([velocity,float(np.clip(2*angle,-self.yaw_rate,self.yaw_rate))])

    def report(self):
        return {'state':self.state,'total_attempts':self.total_attempts,'maximum_displacement_m':self.max_distance,
                'maximum_seconds':self.max_seconds,'maximum_speed_mps':self.speed,'maximum_yaw_rate_radps':self.yaw_rate,
                'attempts_without_30cm_progress':self.attempts,'events':self.events,
                'clearance_rule':'exact distance to unknown/occupied cell boxes >= radius + margin + position uncertainty; no margin relaxation'}
