"""Check the post-arrival zero command and measured settling, using truth only for scoring."""
import argparse
import json
from pathlib import Path
import numpy as np

p=argparse.ArgumentParser(description=__doc__);p.add_argument('run',type=Path);a=p.parse_args()
r=json.loads((a.run/'isaac_report.json').read_text())
stop=r.get('arrival_stop',{});start=stop.get('started_at_s')
commands=[s for s in r['command_samples'] if start is not None and s['t']>=start]
samples=[s for s in r['visual_samples'] if start is not None and s['t']>=start]
speeds=[];rates=[];tail=samples[-3:]
for first,second in zip(tail,tail[1:]):
    dt=second['t']-first['t'];delta=np.array(second['truth'])-first['truth']
    if dt<=0:raise ValueError('Nonchronological samples')
    speeds.append(float(np.linalg.norm(delta[:2])/dt))
    rates.append(float(abs((delta[2]+np.pi)%(2*np.pi)-np.pi)/dt))
checks={
    'reported_arrival':r['termination_reason']=='goal_reached' and r['reached'],
    'half_second_hold':stop.get('held_seconds',0)>=.5,
    'sampled_zero_twist_and_wheels':bool(commands) and all(np.allclose(s['target_twist'],0,atol=1e-12) and np.allclose(s['wheel_targets'],0,atol=1e-12) for s in commands),
    'adequate_settling_samples':len(samples)>=5 and len(speeds)==2,
    'final_linear_speed_below_2cmps':bool(speeds) and max(speeds)<.02,
    'final_yaw_rate_below_005radps':bool(rates) and max(rates)<.05,
    'final_goal_within_15cm':bool(np.linalg.norm(np.array(r['final_truth_pose'][:2])-r['goal'])<=.15),
}
result={'truth_usage':'post-run evaluation only','checks':checks,'passed':all(checks.values()),
        'arrival_stop':stop,'sampled_command_count':len(commands),'sampled_pose_count':len(samples),
        'last_two_linear_speeds_mps':speeds,'last_two_yaw_rates_radps':rates,
        'limitations':'Sampled final settling in one static simulation; not a hardware braking-distance guarantee.'}
(a.run/'arrival_validation.json').write_text(json.dumps(result,indent=2));print(json.dumps(result,indent=2))
