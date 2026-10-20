"""Local HTTP adapter for ORB-SLAM3 localization. Metric alignment provenance is checked and reported."""
import json,os,queue,subprocess,threading,time,signal,argparse,hashlib,re
from http.server import BaseHTTPRequestHandler,ThreadingHTTPServer
import numpy as np
from scipy.spatial.transform import Rotation
from .room import ROOT
from .engine_shutdown import finish_engine
from .map_identity import metric_frame_id
from .pose_anchors import PoseAnchors,camera_base_pose,planar_alignment

def main():
    parser=argparse.ArgumentParser();parser.add_argument('--mapping',action='store_true');parser.add_argument('--settings');parser.add_argument('--alignment',default='outputs/slam_alignment.json');parser.add_argument('--output-prefix',default='outputs/live_localization');parser.add_argument('--host',default=os.environ.get('JETBOT_HOST','192.168.50.232'));parser.add_argument('--port',type=int,default=8792);parser.add_argument('--pose-anchors');parser.add_argument('--bootstrap-anchors');parser.add_argument('--nearest-metric-anchor',action='store_true');parser.add_argument('--shutdown-timeout',type=float,default=600.);parser.add_argument('--test-pose-translation',type=float,nargs=3,metavar=('AT_SECONDS','DX','DY'));args=parser.parse_args()
    if not np.isfinite(args.shutdown_timeout) or args.shutdown_timeout<=0:parser.error('shutdown-timeout must be positive and finite')
    if args.pose_anchors and args.bootstrap_anchors:parser.error('Choose frozen anchors or initial alignment, not both')
    if args.nearest_metric_anchor and not args.pose_anchors:parser.error('--nearest-metric-anchor requires frozen --pose-anchors')
    if args.test_pose_translation and (not np.isfinite(args.test_pose_translation).all() or args.test_pose_translation[0]<0):parser.error('Invalid test pose translation')
    test_translation_applied=False
    def stop(signum,frame): raise KeyboardInterrupt
    signal.signal(signal.SIGTERM,stop)
    alignment=json.loads((ROOT/args.alignment).read_text())
    frame_identity=metric_frame_id(alignment)
    settings=ROOT/(args.settings or ('configs/continue.yaml' if args.mapping else 'configs/localize.yaml'))
    if 'atlas_sha256' in alignment:
        match=re.search(r'System.LoadAtlasFromFile:\s*"([^"]+)"',settings.read_text())
        if not match: raise ValueError('Settings do not identify the calibrated Atlas')
        atlas=ROOT/(match.group(1)+'.osa')
        if hashlib.sha256(atlas.read_bytes()).hexdigest()!=alignment['atlas_sha256']:
            raise ValueError('Atlas checksum does not match metric calibration')
    anchors=None;bootstrap_anchors=None;bootstrap_alignment=[None]
    if args.pose_anchors or args.bootstrap_anchors:
        if args.mapping and args.pose_anchors:raise ValueError('Metric anchors require a frozen Atlas')
        bundle=json.loads((ROOT/(args.pose_anchors or args.bootstrap_anchors)).read_text())
        if bundle['atlas_sha256']!=alignment.get('atlas_sha256') or bundle['metric_frame_id']!=frame_identity:
            raise ValueError('Metric anchors do not match Atlas and metric frame')
        if args.pose_anchors:anchors=PoseAnchors(bundle,allow_nearest=args.nearest_metric_anchor)
        else:bootstrap_anchors=PoseAnchors(bundle)
    output=ROOT/args.output_prefix;output.parent.mkdir(parents=True,exist_ok=True)
    R=np.array(alignment['rotation']);scale=alignment['scale'];offset=np.array(alignment['translation'])
    env=os.environ.copy();env['LD_LIBRARY_PATH']=str(ROOT/'third_party/install/lib')+':'+env.get('LD_LIBRARY_PATH','')
    proc=None;engine_started=time.time()
    responses=queue.Queue();lock=threading.Lock();initial_map=[None]
    def reader():
        with open(str(output)+'_engine.log','w') as log:
            for line in proc.stdout:
                log.write(line);log.flush()
                if line.startswith('POSE_JSON '):responses.put(json.loads(line[len('POSE_JSON '):]))
    class Handler(BaseHTTPRequestHandler):
        def log_message(self,*args):pass
        def do_GET(self):
            body=json.dumps({"alive":proc.poll() is None}).encode();self.send_response(200);self.send_header("Content-Length",str(len(body)));self.end_headers();self.wfile.write(body)
        def do_POST(self):
            nonlocal test_translation_applied
            result={'valid':False};code=200
            try:
                size=int(self.headers.get('Content-Length',0)); t=float(self.headers['X-Timestamp'])
                if not 0<size<3000000 or not np.isfinite(t):raise ValueError('Invalid frame')
                payload=self.rfile.read(size)
                with lock:
                    if proc.poll() is not None:raise RuntimeError('SLAM process terminated')
                    path=output.with_suffix('.png');path.write_bytes(payload)
                    proc.stdin.write(f'{t:.6f} {path}\n');proc.stdin.flush()
                    deadline=time.monotonic()+15
                    while True:
                        answer=responses.get(timeout=max(.01,deadline-time.monotonic()))
                        if abs(answer['timestamp']-t)<1e-5:break
                        if time.monotonic()>=deadline:raise TimeoutError('Stale SLAM reply')
                    result=answer;result['valid']=answer['state']==2 and answer['inliers']>=20
                    if result['valid']:
                        if initial_map[0] is None: initial_map[0]=answer.get('map_id')
                        if answer.get('map_id')!=initial_map[0]:
                            result['valid']=False;result['error']='Map coordinate frame changed: metric alignment invalid'
                    if result['valid']:
                        pos=scale*R@np.array(answer['position'])+offset
                        orientation=R@Rotation.from_quat(answer['quaternion']).as_matrix()
                        if anchors is not None:
                            corrected=anchors.camera_pose(answer['position'],answer['quaternion'],answer.get('reference'))
                            result['uncorrected_camera_position']=pos.tolist()
                            result['metric_reference_keyframe_id']=anchors.last_reference_id
                            pos=corrected[:3,3];orientation=corrected[:3,:3]
                        forward=orientation[:,2];yaw=float(np.arctan2(forward[1],forward[0]))
                        result['pose']=[float(pos[0]-.06*np.cos(yaw)),float(pos[1]-.06*np.sin(yaw)),yaw]
                        if bootstrap_anchors is not None:
                            if bootstrap_alignment[0] is None:
                                anchored=bootstrap_anchors.camera_pose(answer['position'],answer['quaternion'],answer.get('reference'))
                                bootstrap_alignment[0]=dict(planar_alignment(result['pose'],camera_base_pose(anchored)),timestamp=t,reference_keyframe_id=answer['reference_keyframe_id'],source='saved metric reference; no simulator truth')
                            result['metric_bootstrap']=bootstrap_alignment[0]
                        result['scale_source']=anchors.bundle['source'] if anchors else alignment['source']
                        result['metric_frame_id']=frame_identity
                        if args.test_pose_translation and t>=args.test_pose_translation[0]:
                            result['pose'][0]+=args.test_pose_translation[1]
                            result['pose'][1]+=args.test_pose_translation[2]
                            result['test_pose_translation']={'time':args.test_pose_translation[0],'offset':args.test_pose_translation[1:],'source':'explicit synthetic pose-translation fault; Atlas unchanged'}
                            result['map_changed']=bool(result.get('map_changed')) or not test_translation_applied
                            test_translation_applied=True
            except Exception as e:result={'valid':False,'error':str(e)};code=503
            body=json.dumps(result).encode();self.send_response(code);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body)
    server=ThreadingHTTPServer((args.host,args.port),Handler)
    # Bind before spawning the heavy engine: a duplicate launcher must not
    # leave an orphan SLAM process when the service port is already occupied.
    try:
        proc=subprocess.Popen([str(ROOT/'outputs/bin/jetbot_slam'),str(ROOT/'third_party/ORB_SLAM3/Vocabulary/ORBvoc.txt'),str(settings),'-',str(output),'2' if args.mapping else '1'],cwd=ROOT,env=env,stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,text=True,bufsize=1)
        threading.Thread(target=reader,daemon=True).start()
        print(f'SLAM localization service http://{args.host}:{args.port}',flush=True)
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
        if proc is not None:
            print('Waiting for SLAM background work and Atlas save',flush=True)
            shutdown=finish_engine(proc,timeout=args.shutdown_timeout)
            save_match=re.search(r'System.SaveAtlasToFile:\s*"([^\"]+)"',settings.read_text())
            shutdown['atlas_expected']=bool(save_match)
            if save_match:
                saved=ROOT/(save_match.group(1)+'.osa')
                shutdown['atlas_path']=str(saved)
                shutdown['atlas_written_this_session']=saved.exists() and saved.stat().st_mtime>=engine_started
                shutdown['atlas_sha256']=hashlib.sha256(saved.read_bytes()).hexdigest() if shutdown['atlas_written_this_session'] else None
            shutdown['success']=shutdown['graceful_exit'] and (not save_match or shutdown['atlas_written_this_session'])
            shutdown_path=str(output)+'_shutdown.json'
            with open(shutdown_path,'w') as record:json.dump(shutdown,record,indent=2)
            print('SLAM_SHUTDOWN '+json.dumps(shutdown),flush=True)
            if not shutdown['success']:raise RuntimeError('SLAM shutdown or requested Atlas save failed; see '+shutdown_path)
if __name__=='__main__':main()
