"""Experimental translation-bias recovery after an explicit SLAM map correction.

Does not alter the robot pose, map grid, metric frame, or normal innovation gate.
Only a stable, stationary observation window following a correction can rebase
visual translation bias. Independent closed-loop validation is required.
"""
import numpy as np
from .navigation import wrap


class MapCorrectionRecovery:
    def __init__(self):
        self.pending=None;self.window=[];self.events=[];self.last_application=-np.inf
        self.previous_time=None

    def observe(self,fusion,visual,timestamp,*,map_changed=False,rejected=False):
        if self.previous_time is not None and timestamp<=self.previous_time:
            self.window=[];return False
        self.previous_time=timestamp
        if map_changed:
            self.pending=timestamp;self.window=[]
            self.events.append({'t':timestamp,'event':'map_correction_observed'})
        if self.pending is None or timestamp-self.pending>10 or timestamp-self.last_application<30:
            self.window=[];return False
        z=np.asarray(visual,float)
        if z.shape!=(3,) or not np.isfinite(z).all() or not rejected:
            self.window=[];return False
        candidate=z[:2]-fusion.pose[:2]
        delta=candidate-fusion.bias
        if not .15<=np.linalg.norm(delta)<=2. or abs(wrap(z[2]-fusion.pose[2]))>.08:
            self.window=[];return False
        if self.window:
            if np.linalg.norm(fusion.pose[:2]-self.window[0][2])>.015 or np.linalg.norm(candidate-self.window[0][1])>.03:
                self.window=[]
        self.window.append((timestamp,candidate.copy(),fusion.pose[:2].copy()))
        if len(self.window)<11 or timestamp-self.window[0][0]<1.:
            return False
        values=np.array([v[1] for v in self.window]);bias=np.median(values,axis=0)
        if np.max(np.linalg.norm(values-bias,axis=1))>.02:
            self.window=[];return False
        old=fusion.bias.copy();before=fusion.pose.copy()
        fusion.state[3:]=bias
        # Preserve pose uncertainty; discard obsolete pose/bias cross covariance.
        fusion.covariance[:3,3:]=0;fusion.covariance[3:,:3]=0
        fusion.covariance[3:,3:]=np.eye(2)*.1**2
        self.events.append({'t':timestamp,'event':'translation_bias_rebased','old_bias':old.tolist(),
            'new_bias':bias.tolist(),'stationary_window_seconds':timestamp-self.window[0][0],
            'pose_unchanged':bool(np.array_equal(before,fusion.pose))})
        self.last_application=timestamp;self.pending=None;self.window=[]
        return True
