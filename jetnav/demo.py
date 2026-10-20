"""Local bird's-eye navigation console; explicit 2D oracle sensor baseline."""
import json, math, threading, time, os
from http.server import BaseHTTPRequestHandler,ThreadingHTTPServer
import numpy as np
from .room import ROOT, oracle_grid, BOXES
from .navigation import GridMap, command, integrate, wheels
from .mapping import OccupancyMapper
from .rl import WheelPolicy

class Demo:
    def __init__(self):
        self.truth=oracle_grid(); self.nav=GridMap(self.truth); self.pose=np.array([1.,1.,0.])
        self.path=np.empty((0,2)); self.status='Ready — 2D oracle baseline'; self.explore=False
        self.mapper=OccupancyMapper(); self.lock=threading.Lock(); self.measured=np.zeros(2); self.motor=np.zeros(2)
        self.policy=WheelPolicy(ROOT/'outputs/wheel_policy.npz') if (ROOT/'outputs/wheel_policy.npz').exists() else None
        self.ticks=0; self.sense()
    def sense(self):
        # Simulated planar range observations, NOT a monocular depth estimator.
        angles=np.linspace(-np.pi,np.pi,360,endpoint=False)
        radii=np.arange(.05,3.05,.05)
        ends=self.pose[:2]+np.stack([np.cos(angles),np.sin(angles)],axis=1)[:,None,:]*radii[None,:,None]
        cells=np.floor(ends/.05).astype(int)
        outside=(cells[:,:,0]<0)|(cells[:,:,0]>=240)|(cells[:,:,1]<0)|(cells[:,:,1]>=200)
        hits=outside|(self.truth[np.clip(cells[:,:,1],0,199),np.clip(cells[:,:,0],0,239)]>0)
        for j in range(len(angles)):
            indexes=np.flatnonzero(hits[j]); index=int(indexes[0]) if len(indexes) else len(radii)-1
            self.mapper.ray(self.pose,ends[j,index],bool(len(indexes)))
    def tick(self):
        with self.lock:
            self.ticks+=1
            if len(self.path):
                twist,done=command(self.pose,self.path)
                if done: self.path=np.empty((0,2)); self.status='Goal reached'
                else:
                    wheel=self.policy(twist,self.measured) if self.policy else wheels(twist)
                    self.motor+=(1-np.exp(-.05/.15))*(wheel-self.motor)
                    trial=integrate(self.pose,self.motor)
                    b=self.nav.blocked()
                    if self.nav.valid(self.nav.cell(trial[:2]),b):
                        delta=trial-self.pose; self.measured=np.array([np.dot(delta[:2],[math.cos(self.pose[2]),math.sin(self.pose[2])])/.05,((delta[2]+np.pi)%(2*np.pi)-np.pi)/.05]); self.pose=trial
                    else: self.path=np.empty((0,2)); self.status='Stopped: clearance guard'; self.measured[:]=0
                    if self.ticks%5==0: self.sense()
            if self.explore and not len(self.path):
                try: self.path=self.mapper.grid().frontier(self.pose[:2]); self.status='Exploring simulated range map'
                except ValueError as e: self.status=str(e); self.explore=False
    def state(self):
        return dict(pose=self.pose.tolist(),path=self.path[::3].tolist(),status=self.status,grid=self.mapper.grid().grid.tolist(),controller='RL (CEM)' if self.policy else 'kinematic',mode='2D ORACLE / synthetic range; NOT vSLAM')

HTML='''<!doctype html><meta charset="utf-8"><title>JetBot Lab</title>
<style>body{background:#101c26;color:#e2edf3;font:16px system-ui;margin:24px}button{padding:10px;margin:5px;background:#215771;color:white;border:0;border-radius:6px}canvas{background:#253541;max-width:96vw}small{color:#e9bd72}</style>
<h1>JetBot · 房間導航</h1><small>2D 模擬基線：真值定位＋模擬測距。不是 Isaac Sim 即時影像，也不是 vSLAM。</small>
<p>點選地圖設定目的地 · 青色：路徑 · 白色：已觀測空地 · 灰色：未知</p>
<button onclick="act('/explore')">探索</button><button onclick="act('/stop')">停止</button><button onclick="act('/save')">保存佔據圖</button>
<p id="status"></p><canvas id="map" width="960" height="800"></canvas>
<script>const c=document.querySelector('canvas'),ctx=c.getContext('2d');async function act(url,data={}){let r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});if(!r.ok)alert((await r.json()).error)}
c.onclick=e=>{let b=c.getBoundingClientRect();act('/goal',{x:(e.clientX-b.left)/b.width*12,y:10-(e.clientY-b.top)/b.height*10})};
async function draw(){try{let s=await(await fetch('/state')).json();ctx.clearRect(0,0,960,800);s.grid.forEach((row,y)=>row.forEach((v,x)=>{ctx.fillStyle=v===0?'#d2dcdf':v===100?'#182731':'#536575';ctx.fillRect(x*4,796-y*4,4,4)}));ctx.strokeStyle='#00c5ce';ctx.lineWidth=3;ctx.beginPath();s.path.forEach((p,i)=>{let x=p[0]*80,y=800-p[1]*80;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();let [x,y,a]=s.pose;ctx.save();ctx.translate(x*80,800-y*80);ctx.rotate(-a);ctx.fillStyle='#fbb13c';ctx.beginPath();ctx.moveTo(12,0);ctx.lineTo(-8,-7);ctx.lineTo(-8,7);ctx.closePath();ctx.fill();ctx.restore();document.querySelector('#status').textContent=s.status+' | '+s.controller}catch(e){document.querySelector('#status').textContent='Disconnected'}setTimeout(draw,200)}draw();</script>'''

def main():
    (ROOT/"outputs").mkdir(exist_ok=True)
    demo=Demo()
    class Handler(BaseHTTPRequestHandler):
        def log_message(self,*a): pass
        def reply(self,data,code=200,html=False):
            body=(data if html else json.dumps(data)).encode(); self.send_response(code)
            self.send_header('Content-Type','text/html; charset=utf-8' if html else 'application/json'); self.send_header('Content-Length',str(len(body))); self.end_headers(); self.wfile.write(body)
        def do_GET(self):
            if self.path=='/': self.reply(HTML,html=True)
            elif self.path=='/state':
                with demo.lock: self.reply(demo.state())
            else: self.reply({'error':'not found'},404)
        def do_POST(self):
            try:
                data=json.loads(self.rfile.read(min(int(self.headers.get('Content-Length',0)),4096)) or b'{}')
                with demo.lock:
                    if self.path=='/goal':
                        goal=np.array([data['x'],data['y']],float)
                        if not np.isfinite(goal).all(): raise ValueError('Invalid coordinates')
                        demo.path=demo.nav.plan(demo.pose[:2],goal); demo.explore=False; demo.status='Navigating (oracle map)'
                    elif self.path=='/explore': demo.explore=True; demo.path=np.empty((0,2))
                    elif self.path=='/stop': demo.explore=False; demo.path=np.empty((0,2)); demo.status='Stopped'
                    elif self.path=='/save': demo.mapper.grid().save(ROOT/'outputs/explored_map.npz',source='synthetic_range')
                    else: raise ValueError('Unknown action')
                self.reply({'ok':True})
            except (ValueError,KeyError,TypeError) as e: self.reply({'error':str(e)},400)
    def run():
        while True:
            demo.tick(); time.sleep(.05)
    threading.Thread(target=run,daemon=True).start()
    print(f"JetBot console: http://{os.environ.get('JETBOT_HOST', '192.168.50.78')}:8790",flush=True)
    ThreadingHTTPServer(('0.0.0.0',8790),Handler).serve_forever()
if __name__=='__main__': main()
