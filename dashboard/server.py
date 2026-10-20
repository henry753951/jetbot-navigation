"""Small JetBot dashboard service: camera stream, safe motor commands, and telemetry."""

import argparse
import json
import math
import mimetypes
import os
import socket
import threading
import time
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
from pathlib import Path

try:
    import cv2
    import numpy as np
except Exception:  # The UI and state endpoint still work without camera packages.
    cv2 = None
    np = None

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
MOTOR_TIMEOUT = max(0.2, float(os.environ.get("MOTOR_TIMEOUT", "1.0")))


class ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True


def read_system_state():
    temperature = None
    try:
        temperature = int(Path("/sys/class/thermal/thermal_zone0/temp").read_text()) / 1000
    except (OSError, ValueError):
        pass
    memory = None
    try:
        values = {}
        for line in Path("/proc/meminfo").read_text().splitlines():
            key, value = line.split(":", 1)
            values[key] = int(value.strip().split()[0])
        memory = 100 * (1 - values["MemAvailable"] / values["MemTotal"])
    except (OSError, KeyError, ValueError):
        pass
    return temperature, memory


class RobotRuntime:
    def __init__(self):
        self.lock = threading.RLock()
        self.started = time.monotonic()
        self.last_update = self.started
        self.pose = [0.0, 0.0, 0.0]
        self.motors = [0.0, 0.0]
        self.last_command = 0.0
        self.pose_source = "wheel dead-reckoning"
        self.robot = None
        self.camera = None
        self.camera_error = ""
        try:
            from jetbot import Camera, Robot
            self.robot = Robot()
            self.camera = Camera.instance(width=640, height=480)
        except Exception as exc:  # Keep the service useful for UI development.
            self.camera_error = str(exc)

    @property
    def hardware(self):
        return self.robot is not None

    def _hardware_motors(self, left, right):
        if self.robot is None:
            return
        try:
            self.robot.set_motors(left, right)
        except Exception:
            # A disconnected motor must never take down the dashboard.
            self.robot = None

    def stop(self):
        with self.lock:
            self.motors = [0.0, 0.0]
            self.last_command = time.monotonic()
            self._hardware_motors(0.0, 0.0)

    def set_motors(self, left, right):
        left = max(-1.0, min(1.0, float(left)))
        right = max(-1.0, min(1.0, float(right)))
        with self.lock:
            self.motors = [left, right]
            self.last_command = time.monotonic()
            self._hardware_motors(left, right)

    def set_pose(self, pose):
        if len(pose) != 3 or not all(math.isfinite(float(v)) for v in pose):
            raise ValueError("pose must contain three finite values")
        with self.lock:
            self.pose = [float(v) for v in pose]
            self.pose_source = "SLAM telemetry"

    def tick(self):
        now = time.monotonic()
        with self.lock:
            dt = min(0.2, now - self.last_update)
            self.last_update = now
            if now - self.last_command > MOTOR_TIMEOUT and any(abs(v) > 1e-4 for v in self.motors):
                self.motors = [0.0, 0.0]
                self._hardware_motors(0.0, 0.0)
            left, right = self.motors
            linear = 0.24 * (left + right) / 2
            angular = 1.35 * (right - left)
            self.pose[0] += linear * math.cos(self.pose[2]) * dt
            self.pose[1] += linear * math.sin(self.pose[2]) * dt
            self.pose[2] = (self.pose[2] + angular * dt + math.pi) % (2 * math.pi) - math.pi

    def state(self):
        self.tick()
        temperature, memory = read_system_state()
        with self.lock:
            return {
                "mode": "hardware" if self.hardware else "simulation",
                "status": "Ready" if self.hardware else "Waiting for JetBot hardware",
                "pose": list(self.pose),
                "path": [],
                "motors": list(self.motors),
                "pose_source": self.pose_source,
                "camera": {"available": self.camera is not None and self.camera.value is not None, "width": 640, "height": 480},
                "host": socket.gethostname(),
                "uptime_s": time.monotonic() - self.started,
                "cpu_temp_c": temperature,
                "memory_percent": memory,
                "camera_error": self.camera_error,
            }

    def camera_jpeg(self):
        if self.camera is not None and cv2 is not None and np is not None:
            try:
                frame = self.camera.value
                if frame is not None:
                    ok, encoded = cv2.imencode(".jpg", frame)
                    if ok:
                        return encoded.tobytes()
            except Exception:
                pass
        if cv2 is None or np is None:
            return None
        image = np.zeros((240, 360, 3), dtype=np.uint8)
        image[:] = (28, 47, 58)
        cv2.putText(image, "JetBot camera waiting", (45, 112), cv2.FONT_HERSHEY_SIMPLEX, .65, (205, 235, 238), 1, cv2.LINE_AA)
        return cv2.imencode(".jpg", image)[1].tobytes()


runtime = RobotRuntime()


class Handler(BaseHTTPRequestHandler):
    server_version = "JetBotDashboard/0.1"

    def log_message(self, *_args):
        return

    def send_bytes(self, body, content_type, status=HTTPStatus.OK):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def json(self, value, status=HTTPStatus.OK):
        self.send_bytes(json.dumps(value).encode(), "application/json", status)

    def do_GET(self):
        if self.path == "/api/state":
            self.json(runtime.state())
            return
        if self.path == "/api/health":
            self.json({"ok": True, "mode": "hardware" if runtime.hardware else "simulation"})
            return
        if self.path.startswith("/api/camera.mjpg"):
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", "multipart/x-mixed-replace; boundary=frame")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            try:
                while True:
                    frame = runtime.camera_jpeg()
                    if frame is None:
                        self.send_error(HTTPStatus.SERVICE_UNAVAILABLE)
                        return
                    self.wfile.write(b"--frame\r\nContent-Type: image/jpeg\r\nContent-Length: " + str(len(frame)).encode() + b"\r\n\r\n" + frame + b"\r\n")
                    self.wfile.flush()
                    time.sleep(0.12)
            except (BrokenPipeError, ConnectionResetError, TimeoutError):
                return
        path = "/index.html" if self.path in ("", "/") else self.path.split("?", 1)[0]
        requested = (DIST / path.lstrip("/")).resolve()
        if DIST not in requested.parents and requested != DIST:
            self.send_error(HTTPStatus.NOT_FOUND)
            return
        if requested.is_file():
            self.send_bytes(requested.read_bytes(), mimetypes.guess_type(str(requested))[0] or "application/octet-stream")
        else:
            self.send_error(HTTPStatus.NOT_FOUND)

    def read_json(self):
        length = min(8192, int(self.headers.get("Content-Length", "0")))
        return json.loads(self.rfile.read(length) or b"{}")

    def do_POST(self):
        try:
            body = self.read_json()
            if self.path == "/api/motor":
                runtime.set_motors(body["left"], body["right"])
                self.json({"ok": True})
            elif self.path == "/api/stop":
                runtime.stop(); self.json({"ok": True})
            elif self.path == "/api/telemetry":
                runtime.set_pose(body["pose"]); self.json({"ok": True})
            else:
                self.json({"error": "unknown endpoint"}, HTTPStatus.NOT_FOUND)
        except (KeyError, TypeError, ValueError, json.JSONDecodeError) as exc:
            self.json({"error": str(exc)}, HTTPStatus.BAD_REQUEST)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", default=os.environ.get("JETBOT_HOST", "0.0.0.0"))
    parser.add_argument("--port", type=int, default=int(os.environ.get("PORT", "8080")))
    args = parser.parse_args()
    server = ThreadingHTTPServer((args.host, args.port), Handler)
    print(f"JetBot dashboard listening on http://{args.host}:{args.port}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
