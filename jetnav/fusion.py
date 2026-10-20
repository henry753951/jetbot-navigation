"""Planar wheel/visual EKF with innovation gating. No truth pose inputs.
Odometry bridges frame intervals; tracking loss still stops navigation upstream.
"""
import numpy as np
from .navigation import wrap

class PoseFusion:
    def __init__(self, initial_pose, radius=.03, separation=.1125):
        self.pose=np.array(initial_pose,dtype=float)
        self.covariance=np.diag([.02**2,.02**2,.03**2])
        self.radius=radius;self.separation=separation
        self.accepted=0;self.rejected=0;self.last_mahalanobis=None
    def predict(self,wheel_delta):
        left,right=np.asarray(wheel_delta)*self.radius
        distance=(left+right)/2;turn=(right-left)/self.separation
        theta=self.pose[2]+turn/2
        jacobian=np.eye(3);jacobian[0,2]=-distance*np.sin(theta);jacobian[1,2]=distance*np.cos(theta)
        self.pose[:2]+=distance*np.array([np.cos(theta),np.sin(theta)])
        self.pose[2]=wrap(self.pose[2]+turn)
        # Distance/rotation-dependent uncertainty; must be calibrated on physical wheels.
        noise=np.diag([abs(distance)*.0001+1e-9,abs(distance)*.0001+1e-9,abs(turn)*.0001+abs(distance)*.0001+1e-9])
        self.covariance=jacobian@self.covariance@jacobian.T+noise
        return self.pose.copy()
    def update(self,visual_pose,position_sigma=.10,yaw_sigma=.08):
        measurement=np.asarray(visual_pose,dtype=float)
        if measurement.shape!=(3,) or not np.isfinite(measurement).all():
            self.rejected+=1;return False
        residual=measurement-self.pose;residual[2]=wrap(residual[2])
        R=np.diag([position_sigma**2,position_sigma**2,yaw_sigma**2])
        S=self.covariance+R
        score=float(residual@np.linalg.solve(S,residual));self.last_mahalanobis=score
        if score>11.345: # 99% chi-square gate, 3 dimensions
            self.rejected+=1;return False
        gain=np.linalg.solve(S,self.covariance.T).T
        self.pose+=gain@residual;self.pose[2]=wrap(self.pose[2])
        I=np.eye(3)-gain
        self.covariance=I@self.covariance@I.T+gain@R@gain.T
        self.accepted+=1;return True
