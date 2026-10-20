"""Bounded visual reacquisition scan, using wheel prediction and known clearance.

Experimental in-place motion only. It never declares localization recovered;
the visual estimator must independently accept a pose again.
"""
import numpy as np
from .navigation import wrap


class RecoveryScan:
    def __init__(self, rate=.12, amplitude=.35, delay=.5, timeout=20., displacement_limit=.05, minimum_rate=.08, max_attempts_without_progress=2, progress_distance=.15):
        if not 0<minimum_rate<=rate:raise ValueError("Minimum scan rate must be positive and no greater than maximum")
        self.minimum_rate=minimum_rate;self.rate=rate;self.amplitude=amplitude;self.delay=delay
        self.timeout=timeout;self.displacement_limit=displacement_limit
        self.elapsed=0.;self.origin=None;self.target_index=0
        self.state='idle';self.attempts=0;self.recovered=0
        self.max_attempts_without_progress=max_attempts_without_progress;self.progress_distance=progress_distance
        self.progress_origin=None;self.local_attempts=0;self.exhausted=False

    def reset_budget(self):
        self.progress_origin=None;self.local_attempts=0;self.exhausted=False
        self.elapsed=0.;self.origin=None;self.target_index=0;self.state='idle'

    def step(self, pose, visual_valid, can_rotate, dt):
        pose=np.asarray(pose,float)
        if self.exhausted:
            self.state='stopped';return np.zeros(2)
        if visual_valid:
            if self.origin is not None and self.state=='scanning':self.recovered+=1
            self.elapsed=0.;self.origin=None;self.target_index=0;self.state='idle'
            return np.zeros(2)
        self.elapsed+=dt
        if self.state=='stopped':return np.zeros(2)
        if not can_rotate or not np.isfinite(pose).all():
            self.state='stopped';return np.zeros(2)
        if self.elapsed<self.delay:
            self.state='waiting';return np.zeros(2)
        if self.origin is None:
            if self.progress_origin is None or np.linalg.norm(pose[:2]-self.progress_origin[:2])>=self.progress_distance:
                self.progress_origin=pose.copy();self.local_attempts=0
            if self.local_attempts>=self.max_attempts_without_progress:
                self.exhausted=True;self.state='stopped';return np.zeros(2)
            self.local_attempts+=1
            self.origin=pose.copy();self.attempts+=1;self.state='scanning'
        if (np.linalg.norm(pose[:2]-self.origin[:2])>self.displacement_limit
                or self.elapsed>self.timeout):
            self.state='stopped';return np.zeros(2)
        targets=[self.amplitude,-self.amplitude,0.]
        error=wrap(self.origin[2]+targets[self.target_index]-pose[2])
        if abs(error)<.025:
            self.target_index+=1
            if self.target_index==len(targets):
                self.state='stopped';return np.zeros(2)
            error=wrap(self.origin[2]+targets[self.target_index]-pose[2])
        # Keep a minimum command to overcome the measured low-speed motor deadband.
        magnitude=np.clip(1.5*abs(error),self.minimum_rate,self.rate)
        return np.array([0.,np.sign(error)*magnitude])
