"""Reward-trained low-level wheel policy, using cross-entropy policy search.
No demonstrations or analytic inverse-kinematics labels are used in training.
The lightweight randomized motor simulator is NOT an Isaac Lab environment.
"""
from pathlib import Path
import json
import numpy as np

SCALE=np.array([.3,2.])

class WheelPolicy:
    def __init__(self,path):
        with np.load(path,allow_pickle=False) as d:
            self.weights=d['weights']
            self.slew_delta=float(d['slew_delta']) if 'slew_delta' in d else np.inf
        self.previous=np.zeros(2)
    def __call__(self,desired,measured):
        obs=np.r_[np.asarray(desired)/SCALE,np.asarray(measured)/SCALE,self.previous,np.ones(1)]
        raw=np.clip(obs@self.weights,-1,1)
        self.previous=np.clip(raw,self.previous-self.slew_delta,self.previous+self.slew_delta)
        return self.previous*14.

def rollout(weights,seed=0,episodes=32,steps=100,domain=None):
    domain=domain or {}
    rng=np.random.default_rng(seed); pop=len(weights)
    gain=rng.uniform(.8,1.2,(1,episodes,2)); radius=rng.uniform(*domain.get('radius',(.028,.032)),(1,episodes))
    base=rng.uniform(*domain.get('base',(.105,.120)),(1,episodes)); lag=rng.uniform(.015,.28,(1,episodes,1))
    target=rng.uniform([-.25,-1.5],[.25,1.5],(1,episodes,2))
    motor=np.zeros((pop,episodes,2)); action=motor.copy(); total=np.zeros(pop)
    for t in range(steps):
        if t==steps//2: target=rng.uniform([-.25,-1.5],[.25,1.5],(1,episodes,2))
        measured=np.stack([radius*(motor[:,:,0]+motor[:,:,1])/2,radius*(motor[:,:,1]-motor[:,:,0])/base],axis=-1)
        obs=np.concatenate([np.broadcast_to(target/SCALE,measured.shape),measured/SCALE,action,np.ones((pop,episodes,1))],axis=-1)
        new=np.clip(np.einsum('pei,pij->pej',obs,weights),-1,1)
        delta=domain.get('slew_delta',np.inf)
        new=np.clip(new,action-delta,action+delta)
        error=(measured-target)/SCALE
        total-=np.mean(np.sum(error**2,axis=-1)+.015*np.sum((new-action)**2,axis=-1),axis=1)
        action=new; motor+=(1-np.exp(-.05/lag))*(action*14*gain-motor)
    return total/steps

def train(output,iterations=120,domain=None):
    domain=domain or {}
    rng=np.random.default_rng(13); mean=np.zeros((7,2)); std=np.full((7,2),.4); history=[]
    for i in range(iterations):
        candidates=mean+rng.normal(size=(96,7,2))*std
        candidates[0]=mean
        scores=rollout(candidates,seed=i%12,episodes=24,steps=80,domain=domain)
        elite=candidates[np.argsort(scores)[-12:]]
        mean=.2*mean+.8*elite.mean(0); std=np.maximum(.02,.2*std+.8*elite.std(0))
        if i%10==0: history.append({'iteration':i,'reward':float(scores.max())}); print(history[-1],flush=True)
    output=Path(output); np.savez_compressed(output,weights=mean,slew_delta=domain.get('slew_delta',np.inf))
    heldout=rollout(mean[None],seed=714,episodes=256,steps=120,domain=domain)[0]
    zero=rollout(np.zeros((1,7,2)),seed=714,episodes=256,steps=120,domain=domain)[0]
    report={'algorithm':'cross-entropy episodic policy search','environment':'randomized differential motor dynamics (not PhysX)','domain':domain,'iterations':iterations,'seed':13,'heldout_episodes':256,'heldout_reward':float(heldout),'zero_policy_reward':float(zero),'history':history,'parameter_count':14,'deployment':'NumPy float64; CPU'}
    output.with_suffix('.json').write_text(json.dumps(report,indent=2))
    return report
if __name__=='__main__':
    from .room import ROOT
    print(train(ROOT/'outputs/wheel_policy.npz'))
