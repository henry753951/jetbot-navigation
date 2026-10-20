"""Isaac Sim 6.1 baseline: real articulation/PhysX, explicitly oracle localization/map."""
import argparse, sys, json, math, time, os
from pathlib import Path
p=argparse.ArgumentParser(); p.add_argument('--steps',type=int,default=2400); p.add_argument('--control-test',action='store_true'); p.add_argument('--lost-timeout',type=float,default=10.);  p.add_argument('--run-name'); p.add_argument('--scene',default='assets/room.usda'); p.add_argument('--bootstrap-distance',type=float,default=0.); p.add_argument('--fuse-odometry',action='store_true'); p.add_argument('--bias-aware',action='store_true'); p.add_argument('--recover-tracking',action='store_true'); p.add_argument('--policy',default='outputs/wheel_policy.npz'); p.add_argument('--goal',type=float,nargs=2,default=[3.8,2.5]); p.add_argument('--capture-only',action='store_true'); p.add_argument('--rl',action='store_true'); p.add_argument('--record',action='store_true'); p.add_argument('--serve',action='store_true'); p.add_argument('--slam',action='store_true'); p.add_argument('--slam-url',default=os.environ.get('JETBOT_SLAM_URL', 'http://192.168.50.232:8792')); p.add_argument('--depth-map',action='store_true'); p.add_argument('--position-uncertainty',type=float,default=0.); p.add_argument('--map',default='assets/oracle_map.npz'); p.add_argument('--explore',action='store_true'); p.add_argument('--start',type=float,nargs=3,default=[1.,1.,0.]); p.add_argument('--goal-tolerance',type=float,default=.10); p.add_argument('--max-speed',type=float,default=.22); p.add_argument('--max-yaw-rate',type=float,default=1.5); p.add_argument('--test-obstacle',type=float,nargs=5,metavar=('X','Y','WIDTH','DEPTH','HEIGHT')); p.add_argument('--test-obstacle-time',type=float,default=3.); p.add_argument('--recover-clearance',action='store_true'); p.add_argument('--recover-map-correction',action='store_true'); p.add_argument('--no-overview-render',action='store_true'); p.add_argument('--exploration-history'); args=p.parse_args()
if not all(math.isfinite(v) and v>0 for v in (args.goal_tolerance,args.max_speed,args.max_yaw_rate)): p.error('Controller limits must be finite and positive')
if args.position_uncertainty<0 or not math.isfinite(args.position_uncertainty): p.error('Position uncertainty must be finite and nonnegative')
if args.bias_aware and not (args.slam and args.fuse_odometry): p.error('--bias-aware requires --slam and --fuse-odometry')
if args.recover_tracking and not (args.slam and args.fuse_odometry): p.error('--recover-tracking requires --slam and --fuse-odometry')
if args.recover_clearance and not (args.explore and args.slam and args.fuse_odometry and args.depth_map):p.error('--recover-clearance requires visual/fused depth-map exploration')
if args.capture_only and args.no_overview_render:p.error('Capture-only requires the overview camera')
if args.recover_map_correction and not (args.slam and args.fuse_odometry and args.bias_aware): p.error('Map correction recovery requires bias-aware visual fusion')
if args.exploration_history and not args.explore: p.error('--exploration-history requires --explore')
if args.control_test and (args.slam or args.serve or args.explore): p.error('--control-test is a standalone motor dynamics experiment')
if args.test_obstacle and (not args.slam or not args.depth_map or not all(math.isfinite(v) for v in args.test_obstacle) or min(args.test_obstacle[2:])<=0 or not math.isfinite(args.test_obstacle_time) or args.test_obstacle_time<0): p.error('Obstacle experiment requires SLAM, depth mapping, finite geometry and nonnegative insertion time')
ROOT=Path(__file__).resolve().parents[1]; sys.path.insert(0,str(ROOT))
from isaacsim import SimulationApp
app=SimulationApp({'headless':True,'width':1000,'height':800,'limit_cpu_threads':12})
import numpy as np
import omni.usd
import omni.replicator.core as rep
from pxr import UsdGeom,UsdPhysics,Gf
import isaacsim.core.experimental.utils.app as au
from isaacsim.core.experimental.utils import stage as su
from isaacsim.core.simulation_manager import SimulationManager
from isaacsim.robot.experimental.wheeled_robots.robots import WheeledRobot
from isaacsim.robot.experimental.wheeled_robots.controllers import DifferentialController
from isaacsim.storage.native import get_assets_root_path
from jetnav.navigation import GridMap, command, integrate
from jetnav.rl import WheelPolicy
from jetnav.map_identity import check_frame
from jetnav.recovery import RecoveryScan
from jetnav.clearance_recovery import ClearanceRecovery
out=ROOT/'outputs'
if args.run_name:
    import re
    if not re.fullmatch(r'[A-Za-z0-9_-]+',args.run_name): raise ValueError('Invalid run name')
    out=out/'runs'/args.run_name
out.mkdir(parents=True,exist_ok=True)
su.open_stage(str(ROOT/args.scene))
asset=get_assets_root_path()+'/Isaac/Robots_Multiphysics/NVIDIA/Jetbot/jetbot.usda'
print('JETBOT_ASSET',asset,flush=True)
robot=WheeledRobot(paths='/World/Jetbot',wheel_dof_names=['left_wheel_joint','right_wheel_joint'],usd_path=asset,positions=[args.start[0],args.start[1],.05],orientations=[math.cos(args.start[2]/2),0.,0.,math.sin(args.start[2]/2)])
# Camera rigidly attached to chassis after asset inspection, not an independent truth feed.
stage=omni.usd.get_context().get_stage()
from jetnav.footprint import measure, wheel_geometry
footprint=measure(stage)
geometry=wheel_geometry(stage)
controller=DifferentialController(wheel_radius=geometry['radius_m'],wheel_base=geometry['separation_m'])
print('MODEL_KINEMATICS',geometry,flush=True)
print('FOOTPRINT',footprint,flush=True)
print('ROBOT_PRIMS',[(str(q.GetPath()),q.GetTypeName()) for q in stage.Traverse() if str(q.GetPath()).startswith('/World/Jetbot')][:60],flush=True)
cam=UsdGeom.Camera.Define(stage,'/World/Jetbot/chassis/NavCamera')
cam.AddTransformOp().Set(Gf.Matrix4d().SetLookAt(Gf.Vec3d(.06,0,.16),Gf.Vec3d(1.06,0,.06),Gf.Vec3d(0,0,1)).GetInverse())
cam.CreateFocalLengthAttr(24); cam.CreateHorizontalApertureAttr(32); cam.CreateVerticalApertureAttr(24)
cam.CreateClippingRangeAttr(Gf.Vec2f(.02,50))
front_rp=rep.create.render_product(str(cam.GetPath()),(640,480))
front=rep.AnnotatorRegistry.get_annotator('rgb'); front.attach(front_rp)
if args.depth_map:
    from jetnav.mapping import OccupancyMapper
    depth_sensor=rep.AnnotatorRegistry.get_annotator('distance_to_image_plane');depth_sensor.attach(front_rp)
    mapper=OccupancyMapper(position_uncertainty=args.position_uncertainty)

if args.record:
    (out/'sequence/rgb').mkdir(parents=True,exist_ok=True)
    timestamps=open(out/'sequence/rgb.txt','w'); timestamps.write('# timestamp rgb file\n')
policy=WheelPolicy(ROOT/args.policy) if args.rl else None
previous_pose=None; measured=np.zeros(2); action=np.zeros(2)
visual_pose=None; visual_valid=False; visual_samples=[]; visual_age=999; metric_source="unavailable"; metric_identity=None; map_frame_check="not checked"
rgb=None
if not args.no_overview_render:
    rp=rep.create.render_product('/World/Overview',(1000,800)); rgb=rep.AnnotatorRegistry.get_annotator('rgb'); rgb.attach(rp)
SimulationManager.setup_simulation(dt=1/60,device='cpu')
SimulationManager.get_physics_scenes()[0].set_enabled_gpu_dynamics(False)
au.play(); au.update_app(steps=30)
wheel_indices=robot.get_dof_indices(['left_wheel_joint','right_wheel_joint']).numpy().tolist()
encoder_previous=robot.get_dof_positions(dof_indices=wheel_indices).numpy()[0].copy()
encoder_pose=np.array(args.start,float); encoder_window=np.zeros(2); encoder_window_ticks=0
from jetnav.fusion import PoseFusion
from jetnav.bias_fusion import BiasAwareFusion
FusionType=BiasAwareFusion if args.bias_aware else PoseFusion
fusion=FusionType(args.start,radius=geometry['radius_m'],separation=geometry['separation_m']); fusion_initialized=False;metric_bootstrap=None
(out/'run_inputs.json').write_text(json.dumps({'arguments':vars(args),'wheel_geometry':geometry,'pose_reference':'known start placement; not observed simulator truth'},indent=2))
encoder_log=open(out/'wheel_odometry.csv','w')
encoder_log.write('timestamp,x,y,yaw,left_angle,right_angle,calibration_phase\n')
calibration_phase=0 if args.bootstrap_distance>0 else 1
# Dimensions come from the robot model; physical robots require measured calibration.
print('WHEEL_GEOMETRY',[(name,str(stage.GetPrimAtPath('/World/Jetbot/chassis/'+name).GetAttribute('physics:localPos0').Get())) for name in ['left_wheel_joint','right_wheel_joint']],flush=True)
nav=GridMap.load(ROOT/args.map); nav.metadata['position_uncertainty_m']=max(args.position_uncertainty,float(nav.metadata.get('position_uncertainty_m',0.))); loaded_map_metadata=dict(nav.metadata)
if args.depth_map: mapper.position_uncertainty=nav.metadata['position_uncertainty_m']
nav.radius=max(nav.radius,footprint['circumscribed_radius'])
# Interactive and exploration modes select their own goals after startup.
# An unused command-line goal must not prevent the console from opening.
path=np.empty((0,2)) if args.serve or args.explore else nav.plan(args.start[:2],args.goal)
if args.bootstrap_distance>0:
    start=np.array(args.start[:2]); end=start+args.bootstrap_distance*np.array([np.cos(args.start[2]),np.sin(args.start[2])])
    path=np.linspace(start,end,100)
    blocked=nav.blocked()
    if not all(nav.valid(nav.cell(p),blocked) for p in path): raise ValueError('Bootstrap straight path not clear')
trajectory=[]; done=False
console=None; exploring=args.explore; exploration_goals=0; frontier_visited=[]; frontier_history=[]; frontier_failures=0; frontier_last_observed=-1; exploration_stop_reason=None; initial_observed=0; tour_index=0; status='Ready'; tour=[[3.8,2.5],[6.,4.7],[10.5,7.5],[6.,8.8],[2.,8.5],[1.,1.]]
from jetnav.exploration_state import load_history, save_history
if args.exploration_history:
    frontier_visited=load_history(ROOT/args.exploration_history,loaded_map_metadata.get('metric_frame_id'))
initial_visited_count=len(frontier_visited)
if args.depth_map and args.map!='assets/oracle_map.npz':
    mapper.observed=nav.grid>=0
    mapper.logodds=np.where(nav.grid==0,-2.,np.where(nav.grid==100,2.,0.)).astype(np.float32)
    initial_observed=int(np.sum(mapper.observed))
if args.explore:
    if not args.depth_map: raise ValueError('--explore requires --depth-map')
    path=np.empty((0,2))
if args.serve:
    from jetnav.live_console import LiveConsole
    console=LiveConsole(description='Isaac Sim：ORB-SLAM3 重定位＋已保存深度障礙圖＋RL 輪控；尺度來源記錄在狀態與報告中。' if args.slam else None,exploration=args.explore); path=np.empty((0,2))
    print(f"LIVE_CONSOLE http://{os.environ.get('JETBOT_HOST', '192.168.50.232')}:8791",flush=True)
control_log=None; control_truth_previous=None
if args.control_test:
    control_log=open(out/'control_response.csv','w');control_log.write('timestamp,target_v,target_w,encoder_v,encoder_w,left_action,right_action,truth_v,truth_w,reported_v,reported_w\n')
recovery=RecoveryScan(); recovery_events=[]; recovery_last_state="idle"
from jetnav.map_correction import MapCorrectionRecovery
map_correction=MapCorrectionRecovery()
clearance_recovery=ClearanceRecovery();clearance_event_count=0
obstacle_events=[];navigation_events=[];command_samples=[];blocked_ticks=0;arrival_start=None
lost_ticks=0; navigation_failed=False; navigation_failure_reason='navigation_blocked'; navigation_refreshes=0; navigation_replans=0; navigation_blocks=0; termination_reason="step_limit"
simulation_wall_start=time.perf_counter()
for i in range(100 if args.capture_only else args.steps):
    if args.test_obstacle and not obstacle_events and i/60>=args.test_obstacle_time:
        ox,oy,ow,od,oh=args.test_obstacle
        obstacle=UsdGeom.Cube.Define(stage,'/World/InjectedTestObstacle')
        obstacle.CreateSizeAttr(1.)
        obstacle.AddTranslateOp().Set(Gf.Vec3d(ox,oy,oh/2))
        obstacle.AddScaleOp().Set(Gf.Vec3f(ow,od,oh))
        obstacle.CreateDisplayColorAttr([Gf.Vec3f(.7,.15,.1)])
        UsdPhysics.CollisionAPI.Apply(obstacle.GetPrim())
        obstacle_events.append({'t':i/60,'box':args.test_obstacle,'purpose':'world setup only; not supplied to mapping or planning'})
        print('OBSTACLE_INSERTED',obstacle_events[-1],flush=True)
    app.update()
    encoder_angles=robot.get_dof_positions(dof_indices=wheel_indices).numpy()[0].copy()
    encoder_delta=(encoder_angles-encoder_previous+np.pi)%(2*np.pi)-np.pi; encoder_previous=encoder_angles
    encoder_window+=encoder_delta; encoder_window_ticks+=1
    encoder_pose=integrate(encoder_pose,encoder_delta*60,dt=1/60,r=geometry['radius_m'],b=geometry['separation_m'])
    fusion.predict(encoder_delta)
    encoder_log.write(','.join(map(str,[i/60,*encoder_pose,*encoder_angles,calibration_phase]))+'\n')
    pos,quat=robot.get_world_poses(); xyz=pos.numpy()[0]; q=quat.numpy()[0]
    yaw=math.atan2(2*(q[0]*q[3]+q[1]*q[2]),1-2*(q[2]**2+q[3]**2))
    pose=np.array([xyz[0],xyz[1],yaw])
    truth_pose=pose.copy()
    if args.slam and i%6==0:
        import io, urllib.request
        from PIL import Image
        frame=front.get_data(); raw_pose=None; frame_error=None;metric_reference_id=None;map_changed=False;test_pose_translation=None; slam_tracked=False; fusion_rejected=False
        if frame.size:
            buffer=io.BytesIO();Image.fromarray(frame[:,:,:3]).save(buffer,format='PNG')
            request=urllib.request.Request(args.slam_url,buffer.getvalue(),headers={'Content-Type':'image/png','X-Timestamp':str(i/60)})
            try:
                answer=json.loads(urllib.request.urlopen(request,timeout=20).read())
                visual_valid=answer.get('valid',False); slam_tracked=visual_valid
                metric_source=answer.get('scale_source',metric_source)
                metric_reference_id=answer.get('metric_reference_keyframe_id')
                map_changed=answer.get('map_changed',False)
                test_pose_translation=answer.get('test_pose_translation')
                if visual_valid:
                    if answer.get('metric_bootstrap') is not None and not args.bias_aware:raise ValueError('Metric bootstrap requires bias-aware fusion')
                    candidate_identity=answer.get('metric_frame_id')
                    map_frame_check=check_frame(loaded_map_metadata,candidate_identity)
                    metric_identity=candidate_identity
                    visual_pose=np.array(answer['pose']); raw_pose=visual_pose.tolist();visual_age=0
                    if args.fuse_odometry:
                        if not fusion_initialized:
                            metric_bootstrap=answer.get('metric_bootstrap')
                            if metric_bootstrap is not None:
                                if not args.bias_aware:raise ValueError('Metric bootstrap requires bias-aware fusion')
                                from jetnav.pose_anchors import apply_planar_alignment
                                initial_metric_pose=apply_planar_alignment(visual_pose,metric_bootstrap)
                                fusion=FusionType(initial_metric_pose,radius=geometry['radius_m'],separation=geometry['separation_m'],initial_visual_pose=visual_pose)
                            else:
                                fusion=FusionType(visual_pose,radius=geometry['radius_m'],separation=geometry['separation_m'])
                            fusion_initialized=True
                        visual_valid=fusion.update(visual_pose)
                        if args.recover_map_correction and map_correction.observe(fusion,visual_pose,i/60,map_changed=map_changed,rejected=not visual_valid):
                            print('MAP_CORRECTION_RECOVERY',map_correction.events[-1],flush=True)
                            visual_valid=fusion.update(visual_pose)
                        fusion_rejected=not visual_valid
            except Exception as e:
                visual_valid=False;frame_error=str(e)
                if isinstance(e,urllib.error.HTTPError):
                    try:
                        detail=json.loads(e.read())
                        if isinstance(detail,dict):frame_error=detail.get('error',frame_error)
                    except Exception:pass
                print('SLAM_UNAVAILABLE',frame_error,flush=True)
        else:
            visual_valid=False;frame_error='Camera frame unavailable'
        visual_samples.append({'t':i/60,'valid':visual_valid,'slam_tracked':slam_tracked,'fusion_rejected':fusion_rejected,'error':frame_error,'metric_reference_keyframe_id':metric_reference_id,'map_changed':map_changed,'test_pose_translation':test_pose_translation,'estimated_raw':raw_pose,'estimated':visual_pose.tolist() if visual_valid else None,'truth':truth_pose.tolist(),'fused':fusion.pose.tolist(),'visual_bias':fusion.bias.tolist() if args.bias_aware else None,'encoder':encoder_pose.tolist()})
    if args.slam:
        visual_age+=1
        if visual_valid and visual_age<=15: pose=fusion.pose.copy() if args.fuse_odometry else visual_pose.copy()
        else:
            visual_valid=False
            if visual_pose is not None: pose=visual_pose.copy()
            status='Visual tracking unavailable — stopped'
    if args.depth_map and i%12==0 and (not args.slam or visual_valid):
        d=depth_sensor.get_data()
        if d.size:
            theta=pose[2];c=math.cos(theta);sn=math.sin(theta);pitch=math.atan(.1)
            Rz=np.array([[c,-sn,0],[sn,c,0],[0,0,1.]])
            optical=np.array([[0,-math.sin(pitch),math.cos(pitch)],[-1,0,0],[0,-math.cos(pitch),-math.sin(pitch)]])
            T=np.eye(4);T[:3,:3]=Rz@optical;T[:3,3]=[pose[0]+.06*c,pose[1]+.06*sn,geometry['root_height_above_ground_m']+.16]
            mapper.fuse_depth(d,[[480,0,320],[0,480,240],[0,0,1]],T,stride=16)
            updated=mapper.grid()
            updated.radius=nav.radius;updated.margin=nav.margin
            nav=updated
            navigation_refreshes+=1
            try:
                previous_path=path;path=nav.refresh_path(pose[:2],path)
                if path is not previous_path:
                    navigation_replans+=1;navigation_events.append({'t':i/60,'event':'replanned','pose':pose.tolist()})
            except ValueError as error:
                navigation_blocks+=1
                navigation_events.append({'t':i/60,'event':'blocked','pose':pose.tolist(),'reason':str(error)})
                path=np.empty((0,2));status='Navigation stopped: '+str(error)
                if not args.serve and not exploring: navigation_failed=True
    if console:
        while not console.commands.empty():
            operation,data=console.commands.get()
            try:
                if operation=='/goal':
                    exploring=False;clearance_recovery.cancel()
                    goal=np.array([data['x'],data['y']],float)
                    if not np.isfinite(goal).all(): raise ValueError('Invalid goal')
                    path=nav.plan(pose[:2],goal); recovery.reset_budget(); exploring=False; status='Navigating in PhysX'
                elif operation=='/stop': path=np.empty((0,2)); exploring=False;clearance_recovery.cancel(); status='Stopped'
                elif operation=='/save':
                    nav.metadata=dict(loaded_map_metadata)
                    if metric_identity: nav.metadata.update(metric_frame_id=metric_identity,metric_source=metric_source)
                    nav.save(out/'known_map.npz',source=str(np.load(ROOT/args.map,allow_pickle=False)['source'])); status='Known map saved'
                elif operation=='/explore':
                    if not args.depth_map or not args.explore: raise ValueError('Use run_exploration_demo.sh for experimental continuation mapping')
                    exploring=True; frontier_failures=0; frontier_last_observed=-1; exploration_stop_reason=None; recovery.reset_budget();clearance_recovery.cancel(reset=True); path=np.empty((0,2)); status='Frontier exploration: auxiliary depth + vSLAM'
            except (ValueError,KeyError,TypeError) as e: status=str(e); path=np.empty((0,2))
    if exploring and not len(path) and not clearance_recovery.active and i%12==0 and (not args.slam or visual_valid):
        try:
            nav=mapper.grid(); path=nav.frontier(pose[:2],visited=frontier_visited,heading=pose[2]); exploration_goals+=1
            frontier_history.append({'t':i/60,'goal':path[-1].tolist(),'observed':int(mapper.observed.sum())})
            print('EXPLORATION_GOAL',frontier_history[-1],flush=True)
            frontier_failures=0;frontier_last_observed=int(mapper.observed.sum())
            status='Exploring observed frontier'
        except ValueError as e:
            status=str(e)
            recovering=(args.recover_clearance and str(e)=='Start lacks frontier planning clearance' and clearance_recovery.start(nav,pose,i/60))
            if recovering:
                frontier_failures=0;status='Recovering grid clearance along a checked short connector'
            else:
                observed_count=int(mapper.observed.sum())
                frontier_failures=frontier_failures+1 if observed_count==frontier_last_observed else 0
                frontier_last_observed=observed_count
                if frontier_failures>=10:
                    exploring=False
                    exploration_stop_reason='no_reachable_frontier' if str(e)=='No reachable frontier remains' else 'frontier_start_blocked'
                    status='Exploration stopped under current map and clearance: '+str(e)
                    if not args.serve:
                        navigation_failed=True;navigation_failure_reason=exploration_stop_reason
    twist,done=command(pose,path,max_speed=args.max_speed,goal_tolerance=args.goal_tolerance,max_yaw_rate=args.max_yaw_rate) if len(path) else (np.zeros(2),False)
    if exploring:
        twist[0]=min(twist[0],.08); twist[1]=float(np.clip(twist[1],-.35,.35))
    if exploring and done:
        frontier_visited.append(path[-1].tolist())
        if metric_identity: save_history(out/'exploration_history.json',frontier_visited,metric_identity,{'run':args.run_name,'last_arrival_s':i/60})
    if (console or exploring) and done: path=np.empty((0,2)); status=f'Arrived within estimated tolerance ({args.goal_tolerance*100:g} cm)'; twist[:]=0
    if args.control_test:
        targets=[(.08,0.),(0.,.35),(.08,-.35),(0.,-.35),(.08,.35),(0.,0.),(.08,0.)]
        twist=np.array(targets[min(i//180,len(targets)-1)]);done=False
    if args.capture_only or (args.slam and not visual_valid): twist[:]=0
    if args.recover_tracking:
        can_rotate=not args.capture_only and not visual_valid and fusion_initialized and (exploring or len(path)>0) and nav.valid(nav.cell(fusion.pose[:2]),nav.blocked())
        scan_twist=recovery.step(fusion.pose,visual_valid,can_rotate,1/60)
        if not visual_valid:
            twist=scan_twist
            status='Reacquiring visual pose: bounded rotation' if recovery.state=='scanning' else 'Visual pose unavailable: stopped'
        if recovery.exhausted:
            twist[:]=0;path=np.empty((0,2));exploring=False
            status='Stopped: repeated tracking loss without navigation progress'
            if not args.serve:
                navigation_failed=True;navigation_failure_reason='recovery_without_progress'
        if recovery.state!=recovery_last_state:
            recovery_events.append({'t':i/60,'state':recovery.state,'encoder_pose':fusion.pose.tolist()})
            recovery_last_state=recovery.state;print('RECOVERY',recovery_events[-1],flush=True)
    if clearance_recovery.active:
        if not exploring or args.capture_only:clearance_recovery.cancel()
        else:
            twist=clearance_recovery.step(nav,pose,1/60,visual_valid,i/60);done=False
            status='Local clearance recovery: '+clearance_recovery.state
    if len(clearance_recovery.events)>clearance_event_count:
        for event in clearance_recovery.events[clearance_event_count:]:print('CLEARANCE_RECOVERY',event,flush=True)
        clearance_event_count=len(clearance_recovery.events)
    if arrival_start is not None: twist[:]=0
    if console and i%6==0:
        console.state={'pose':pose.tolist(),'path':path[::3].tolist(),'grid':nav.grid.tolist(),'status':status,'controller':'RL CEM' if policy else 'analytic','metric_source':metric_source}
    if args.slam and not visual_valid: done=False
    wheel_indices=robot.get_dof_indices(['left_wheel_joint','right_wheel_joint']).numpy().tolist()
    feedback=robot.get_dof_velocities(dof_indices=wheel_indices).numpy()[0]
    reported_measured=np.array([geometry['radius_m']*(feedback[0]+feedback[1])/2,geometry['radius_m']*(feedback[1]-feedback[0])/geometry['separation_m']])
    if i%3==0:
        angular_velocity=encoder_window/(encoder_window_ticks/60)
        measured=np.array([geometry['radius_m']*(angular_velocity[0]+angular_velocity[1])/2,geometry['radius_m']*(angular_velocity[1]-angular_velocity[0])/geometry['separation_m']])
        encoder_window[:]=0; encoder_window_ticks=0
    # Zero targets bypass the learned policy: exact stop on loss/idle/arrival.
    if i%3==0: action=policy(twist,measured) if policy else controller.forward(twist)
    if np.all(twist==0):
        action=np.zeros(2)
        if policy: policy.previous[:]=0
    if control_log and i%3==0:
        if control_truth_previous is not None:
            from jetnav.navigation import wrap
            delta=truth_pose-control_truth_previous
            truth_v=float(delta[:2]@np.array([np.cos(truth_pose[2]),np.sin(truth_pose[2])])/.05)
            truth_w=float(wrap(delta[2])/.05)
            control_log.write(','.join(map(str,[i/60,*twist,*measured,*action,truth_v,truth_w,*reported_measured]))+'\n')
        control_truth_previous=truth_pose.copy()
    if i%6==0:command_samples.append({'t':i/60,'target_twist':twist.tolist(),'wheel_targets':np.asarray(action).tolist()})
    robot.apply_wheel_actions(action)
    if args.record and i%6==0:
        from PIL import Image
        frame=front.get_data()
        if frame.size:
            name=f'rgb/{i:06d}.png'; Image.fromarray(frame[:,:,:3]).save(str(out/'sequence'/name))
            timestamps.write(f'{i/60:.6f} {name}\n')
    if i%300==0: print('STEP',i,pose,flush=True)
    if i%10==0: trajectory.append([i/60,*pose,float(xyz[2])])
    if rgb is not None and (i in (60,99) or done or (args.test_obstacle and i==int(args.test_obstacle_time*60)+6) or (navigation_failed and blocked_ticks==0)):
        from PIL import Image
        data=rgb.get_data()
        if data.size: Image.fromarray(data).save(str(out/'room_overview.png'))
    if done and calibration_phase==0:
        calibration_phase=1; path=nav.plan(pose[:2],args.goal); done=False
        print('CALIBRATION_STRAIGHT_DONE',i/60,flush=True)
    if navigation_failed and not args.capture_only:
        blocked_ticks+=1
        if blocked_ticks>=30:
            termination_reason=navigation_failure_reason;break
    if (done or arrival_start is not None) and not args.capture_only and not args.serve and not exploring:
        if arrival_start is None: arrival_start=i
        if i-arrival_start>=30:
            done=True;termination_reason='goal_reached';break
    lost_ticks=lost_ticks+1 if args.slam and not visual_valid else 0
    if args.slam and not args.serve and args.lost_timeout>0 and lost_ticks>=60*args.lost_timeout and (not args.recover_tracking or recovery.state=='stopped'):
        termination_reason='visual_tracking_timeout'; break
simulation_wall_seconds=time.perf_counter()-simulation_wall_start
robot.apply_wheel_actions(controller.forward([0.,0.]))
stage.GetRootLayer().Export(str(out/'room_with_jetbot.usda'))
encoder_log.close()
if control_log: control_log.close()
if args.record: timestamps.close()
if args.depth_map:
    saved_map=mapper.grid(); saved_map.metadata=dict(loaded_map_metadata)
    saved_map.metadata['position_uncertainty_m']=mapper.position_uncertainty
    if metric_identity: saved_map.metadata.update(metric_frame_id=metric_identity,metric_source=metric_source)
    saved_map.save(out/'depth_occupancy.npz',source='auxiliary simulated metric depth + '+('vSLAM aligned pose' if args.slam else 'oracle pose'))
report={'metric_bootstrap':metric_bootstrap,'obstacle_experiment':obstacle_events,'navigation_events':navigation_events,'command_samples':command_samples,'navigation_updates':{'refreshes':navigation_refreshes,'replans':navigation_replans,'blocked':navigation_blocks},'navigation_limits':{'goal_tolerance_m':args.goal_tolerance,'maximum_speed_mps':args.max_speed,'maximum_yaw_rate_radps':args.max_yaw_rate},'recovery':{'enabled':args.recover_tracking,'minimum_rate_radps':recovery.minimum_rate,'maximum_rate_radps':recovery.rate,'amplitude_rad':recovery.amplitude,'exhausted':recovery.exhausted,'max_attempts_without_progress':recovery.max_attempts_without_progress,'progress_distance_m':recovery.progress_distance,'attempts':recovery.attempts,'recovered':recovery.recovered,'events':recovery_events},'termination_reason':termination_reason,'wheel_geometry':geometry,'fusion':{'enabled':args.fuse_odometry,'bias_aware':args.bias_aware,'final_visual_bias_m':fusion.bias.tolist() if args.bias_aware else None,'accepted':fusion.accepted,'rejected':fusion.rejected},'exploration':{'enabled':exploring,'requested':args.explore,'stop_reason':exploration_stop_reason,'goals_selected':exploration_goals,'goal_history':frontier_history,'visited':frontier_visited,'initial_observed_cells':initial_observed,'final_observed_cells':int(np.sum(mapper.observed)) if args.depth_map else 0},'auxiliary_depth_mapping':args.depth_map,'footprint':footprint,'controller':'RL CEM' if policy else 'differential analytic','backend':'Isaac Sim 6.1 / PhysX','metric_source':metric_source,'metric_frame_id':metric_identity,'map_frame_check':map_frame_check,'pose_source':('wheel/visual fusion' if args.fuse_odometry else 'ORB-SLAM3') if args.slam else 'oracle articulation','wheel_feedback_source':'unwrapped wheel joint angle differences over the 20 Hz policy interval','visual_samples':visual_samples,'map_source':str(np.load(ROOT/args.map,allow_pickle=False)['source']),'goal':args.goal,'reached':bool(done),'final_pose':pose.tolist() if not args.slam or visual_valid else None,'final_truth_pose':truth_pose.tolist(),'steps':i+1,'trajectory':trajectory}
report['exploration']['initial_visited_count']=initial_visited_count
report['exploration']['newly_visited_count']=len(frontier_visited)-initial_visited_count
if args.explore and metric_identity:
    save_history(out/'exploration_history.json',frontier_visited,metric_identity,{'run':args.run_name,'termination_reason':termination_reason})
report['timing']={'loop_wall_seconds':simulation_wall_seconds,'simulated_seconds':(i+1)/60,'physics_hz':60,'visual_hz':10,'depth_hz':5 if args.depth_map else None,'overview_render_enabled':not args.no_overview_render}
report['map_correction_recovery']={'enabled':args.recover_map_correction,'events':map_correction.events}
report['arrival_stop']={'started_at_s':arrival_start/60 if arrival_start is not None else None,'held_seconds':(i-arrival_start)/60 if arrival_start is not None else 0.,'requested_hold_seconds':.5}
report['clearance_recovery']=dict(clearance_recovery.report(),enabled=args.recover_clearance)
(out/'isaac_report.json').write_text(json.dumps(report,indent=2))
print('JETBOT_RESULT',json.dumps({k:v for k,v in report.items() if k not in ('trajectory','visual_samples','command_samples','navigation_events')}),flush=True)
au.stop(); app.close()
