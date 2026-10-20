"""Experimental wheel/visual EKF with correlated visual translation drift.

State: x, y, yaw, visual_bias_x, visual_bias_y. Wheel noise must be calibrated
on physical hardware. Bias is not a correction to the saved SLAM Atlas.
"""
import numpy as np
from .navigation import wrap


class BiasAwareFusion:
    def __init__(self,initial_pose,radius=.03,separation=.1125,initial_visual_pose=None):
        self.state=np.r_[np.asarray(initial_pose,float),0.,0.]
        if initial_visual_pose is not None:self.state[3:]=np.asarray(initial_visual_pose,float)[:2]-self.state[:2]
        self.covariance=np.diag([.02**2,.02**2,.03**2,.1**2,.1**2])
        self.radius=radius;self.separation=separation
        self.accepted=0;self.rejected=0;self.last_mahalanobis=None

    @property
    def pose(self):return self.state[:3]

    @property
    def bias(self):return self.state[3:]

    def predict(self,wheel_delta):
        left,right=np.asarray(wheel_delta)*self.radius
        distance=(left+right)/2;turn=(right-left)/self.separation
        theta=self.state[2]+turn/2
        F=np.eye(5);F[0,2]=-distance*np.sin(theta);F[1,2]=distance*np.cos(theta)
        self.state[:2]+=distance*np.array([np.cos(theta),np.sin(theta)])
        self.state[2]=wrap(self.state[2]+turn)
        wheel_position=abs(distance)*.000025+1e-9
        wheel_heading=abs(turn)*.0004+abs(distance)*.0001+1e-9
        visual_drift=abs(distance)*.01+abs(turn)*.0001+1e-9
        Q=np.diag([wheel_position,wheel_position,wheel_heading,visual_drift,visual_drift])
        self.covariance=F@self.covariance@F.T+Q
        return self.pose.copy()

    def update(self,visual_pose):
        z=np.asarray(visual_pose,float)
        if z.shape!=(3,) or not np.isfinite(z).all():
            self.rejected+=1;return False
        H=np.array([[1,0,0,1,0],[0,1,0,0,1],[0,0,1,0,0]],float)
        residual=z-H@self.state;residual[2]=wrap(residual[2])
        R=np.diag([.1**2,.1**2,.05**2])
        S=H@self.covariance@H.T+R
        self.last_mahalanobis=float(residual@np.linalg.solve(S,residual))
        if self.last_mahalanobis>11.345:
            self.rejected+=1;return False
        K=np.linalg.solve(S,H@self.covariance).T
        self.state+=K@residual;self.state[2]=wrap(self.state[2])
        I=np.eye(5)-K@H
        self.covariance=I@self.covariance@I.T+K@R@K.T
        self.accepted+=1;return True
