"""Evaluate fixed encoder-calibrated SLAM in the simulator frame (NO GT alignment)."""
import argparse,json
from pathlib import Path
import numpy as np
from scipy.spatial.transform import Rotation
p=argparse.ArgumentParser();p.add_argument('run');a=p.parse_args();root=Path(a.run)
cal=json.loads((root/'encoder_alignment.json').read_text());report=json.loads((root/'isaac_report.json').read_text())
raw=np.genfromtxt(root/'mapping_poses.csv',delimiter=',',names=True);valid=raw['state']==2;v=raw[valid];t=v['timestamp']
R=np.array(cal['rotation']);offset=np.array(cal['translation']);xyz=cal['scale']*np.c_[v['tx'],v['ty'],v['tz']]@R.T+offset
world_camera=R@Rotation.from_quat(np.c_[v['qx'],v['qy'],v['qz'],v['qw']]).as_matrix();yaw=np.arctan2(world_camera[:,1,2],world_camera[:,0,2]);xyz[:,0]-=.06*np.cos(yaw);xyz[:,1]-=.06*np.sin(yaw)
gt=np.array(report['trajectory']);truth=np.c_[np.interp(t,gt[:,0],gt[:,1]),np.interp(t,gt[:,0],gt[:,2])]
e=np.linalg.norm(xyz[:,:2]-truth,axis=1)
yaw_error=(yaw-np.interp(t,gt[:,0],np.unwrap(gt[:,3]))+np.pi)%(2*np.pi)-np.pi
result={'calibration_source':cal['source'],'truth_usage':'evaluation only; no post-hoc alignment','tracked_frames':int(valid.sum()),'total_frames':len(raw),'xy_rmse_m':float(np.sqrt(np.mean(e**2))),'xy_p95_m':float(np.percentile(e,95)),'xy_final_error_m':float(e[-1]),'yaw_rmse_rad':float(np.sqrt(np.mean(yaw_error**2))),'nominal_camera_height_deviation_rmse_m':float(np.sqrt(np.mean((xyz[:,2]-cal.get('camera_height_m',.1935))**2)))}
(root/'metric_evaluation.json').write_text(json.dumps(result,indent=2));print(json.dumps(result,indent=2))
