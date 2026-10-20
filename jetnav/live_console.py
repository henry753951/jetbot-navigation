"""Thread-safe HTTP command queue for the Isaac Sim main thread."""
import json,queue,threading
from http.server import BaseHTTPRequestHandler,ThreadingHTTPServer
from .demo import HTML

class LiveConsole:
    def __init__(self,port=8791,description=None,exploration=False):
        self.commands=queue.Queue(maxsize=16); self.state={'status':'Starting Isaac Sim','grid':[],'pose':[1,1,0],'path':[],'controller':'RL CEM'}
        owner=self
        page=HTML.replace('2D 模擬基線：真值定位＋模擬測距。不是 Isaac Sim 即時影像，也不是 vSLAM。','Isaac Sim / PhysX 即時控制：真值定位＋已知地圖基線；RL 輪控。非 vSLAM 導航。')
        if description: page=page.replace('Isaac Sim / PhysX 即時控制：真值定位＋已知地圖基線；RL 輪控。非 vSLAM 導航。',description)
        page=page.replace('保存佔據圖','保存已知地圖')
        if not exploration:
            page=page.replace("""<button onclick="act('/explore')">探索</button>""", """<button disabled title="使用 run_exploration_demo.sh">探索（實驗入口）</button>""")
        class Handler(BaseHTTPRequestHandler):
            def log_message(self,*args):pass
            def reply(self,obj,code=200):
                body=(obj if isinstance(obj,str) else json.dumps(obj)).encode()
                self.send_response(code);self.send_header('Content-Type','text/html; charset=utf-8' if isinstance(obj,str) else 'application/json');self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body)
            def do_GET(self):
                if self.path=='/':self.reply(page)
                elif self.path=='/state':self.reply(owner.state)
                else:self.reply({'error':'not found'},404)
            def do_POST(self):
                try:
                    if self.path not in ('/goal','/stop','/explore','/save'):raise ValueError('Unknown command')
                    data=json.loads(self.rfile.read(min(4096,int(self.headers.get('Content-Length',0)))) or '{}')
                    owner.commands.put_nowait((self.path,data));self.reply({'queued':True})
                except (ValueError,queue.Full) as e:self.reply({'error':str(e)},400)
        self.server=ThreadingHTTPServer(('0.0.0.0',port),Handler)
        threading.Thread(target=self.server.serve_forever,daemon=True).start()
