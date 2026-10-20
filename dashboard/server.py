"""Small JetBot dashboard service: camera, RL wheel control, and telemetry."""

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
DATA_DIR = Path(os.environ.get("JETBOT_DATA_DIR", str(ROOT / "data")))
MAP_PATH = Path(os.environ.get("SLAM_MAP_PATH", str(DATA_DIR / "slam_map.json")))
MOTOR_TIMEOUT = max(0.2, float(os.environ.get("MOTOR_TIMEOUT", "1.0")))
MAX_WHEEL_RAD_S = max(1.0, float(os.environ.get("MAX_WHEEL_RAD_S", "14.0")))
WHEEL_RADIUS_M = 0.03
WHEEL_BASE_M = 0.1125
MAX_LINEAR_M_S = 0.15
MAX_ANGULAR_RAD_S = 1.5


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
        self.controller_mode = "manual"
        self.command_source = "none"
        self.desired_twist = [0.0, 0.0]
        self.measured_twist = [0.0, 0.0]
        self.rl_wheel_rad_s = [0.0, 0.0]
        self.rl_policy = None
        self.rl_error = ""
        self.map_data = {"points": [], "boundary": [], "path": [], "bounds": None, "source": "none", "updated_at": None}
        self.robot = None
        self.camera = None
        self.camera_error = ""
        try:
            from jetbot import Camera, Robot
            self.robot = Robot()
            self.camera = Camera.instance(width=640, height=480)
        except Exception as exc:  # Keep the service useful for UI development.
            self.camera_error = str(exc)
        policy_path = os.environ.get("RL_POLICY_PATH", str(ROOT / "wheel_policy.npz"))
        try:
            from rl_policy import WheelPolicy
            self.rl_policy = WheelPolicy(policy_path)
        except Exception as exc:
            self.rl_error = str(exc)
        self._load_map()

    def _load_map(self):
        try:
            if MAP_PATH.is_file():
                data = json.loads(MAP_PATH.read_text())
                self.map_data = self._clean_map(data)
        except (OSError, ValueError, TypeError):
            # A stale map must never stop the robot dashboard from starting.
            pass

    @staticmethod
    def _clean_map(data):
        if not isinstance(data, dict):
            raise ValueError("map must be an object")

        def points(name, limit):
            result = []
            for item in data.get(name, [])[:limit]:
                if not isinstance(item, (list, tuple)) or len(item) not in (2, 3):
                    continue
                values = [float(v) for v in item]
                if all(math.isfinite(v) for v in values):
                    result.append(values)
            return result

        cloud = points("points", 50000)
        boundary = points("boundary", 256)
        path = points("path", 4096)
        if cloud:
            xyz = [p if len(p) == 3 else [p[0], p[1], 0.0] for p in cloud]
            bounds = {
                "min": [min(p[i] for p in xyz) for i in range(3)],
                "max": [max(p[i] for p in xyz) for i in range(3)],
            }
        else:
            bounds = data.get("bounds") if isinstance(data.get("bounds"), dict) else None
        return {
            "points": cloud,
            "boundary": boundary,
            "path": path,
            "bounds": bounds,
            "source": str(data.get("source", "SLAM"))[:120],
            "updated_at": time.time(),
        }

    def set_map(self, data):
        cleaned = self._clean_map(data)
        with self.lock:
            self.map_data = cleaned
        try:
            DATA_DIR.mkdir(parents=True, exist_ok=True)
            MAP_PATH.write_text(json.dumps(cleaned, separators=(",", ":")))
        except OSError:
            # Visualization still works when the container has no data volume.
            pass

    def map_state(self):
        with self.lock:
            return dict(self.map_data)

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
            self.desired_twist = [0.0, 0.0]
            self.rl_wheel_rad_s = [0.0, 0.0]
            self.command_source = "stop"
            self.last_command = time.monotonic()
            self._hardware_motors(0.0, 0.0)

    def set_motors(self, left, right):
        left = max(-1.0, min(1.0, float(left)))
        right = max(-1.0, min(1.0, float(right)))
        with self.lock:
            self.motors = [left, right]
            self.command_source = "manual"
            self.desired_twist = list(self._twist_from_motors(left, right))
            self.last_command = time.monotonic()
            self._hardware_motors(left, right)

    @staticmethod
    def _twist_from_motors(left, right):
        return [WHEEL_RADIUS_M * (left + right) / 2.0 * MAX_WHEEL_RAD_S,
                WHEEL_RADIUS_M * (right - left) / WHEEL_BASE_M * MAX_WHEEL_RAD_S]

    def set_controller(self, mode):
        mode = str(mode).lower()
        if mode not in ("manual", "rl"):
            raise ValueError("controller mode must be manual or rl")
        if mode == "rl" and self.rl_policy is None:
            raise ValueError("RL policy is not available: " + (self.rl_error or "policy file missing"))
        with self.lock:
            self.controller_mode = mode
            self.command_source = "controller switch"
            self.desired_twist = [0.0, 0.0]
            self.rl_wheel_rad_s = [0.0, 0.0]
            if self.rl_policy is not None:
                self.rl_policy.reset()
        self.stop()

    def set_cmd_vel(self, linear, angular):
        if self.controller_mode != "rl":
            raise ValueError("switch controller to rl before sending cmd_vel")
        linear = max(-MAX_LINEAR_M_S, min(MAX_LINEAR_M_S, float(linear)))
        angular = max(-MAX_ANGULAR_RAD_S, min(MAX_ANGULAR_RAD_S, float(angular)))
        with self.lock:
            measured = self._twist_from_motors(self.motors[0], self.motors[1])
            wheel = self.rl_policy([linear, angular], measured)
            left = max(-1.0, min(1.0, float(wheel[0]) / MAX_WHEEL_RAD_S))
            right = max(-1.0, min(1.0, float(wheel[1]) / MAX_WHEEL_RAD_S))
            self.desired_twist = [linear, angular]
            self.measured_twist = list(measured)
            self.rl_wheel_rad_s = [float(wheel[0]), float(wheel[1])]
            self.motors = [left, right]
            self.command_source = "RL wheel policy (estimated feedback)"
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
                self.desired_twist = [0.0, 0.0]
                self.rl_wheel_rad_s = [0.0, 0.0]
                self.command_source = "safety timeout"
                self._hardware_motors(0.0, 0.0)
            left, right = self.motors
            self.measured_twist = list(self._twist_from_motors(left, right))
            linear, angular = self.measured_twist
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
                "map": {
                    "points": len(self.map_data["points"]),
                    "boundary": len(self.map_data["boundary"]),
                    "path": len(self.map_data["path"]),
                    "bounds": self.map_data["bounds"],
                    "source": self.map_data["source"],
                    "updated_at": self.map_data["updated_at"],
                },
                "motors": list(self.motors),
                "controller_mode": self.controller_mode,
                "controller_available": self.rl_policy is not None,
                "controller_error": self.rl_error,
                "command_source": self.command_source,
                "desired_twist": list(self.desired_twist),
                "measured_twist": list(self.measured_twist),
                "rl_wheel_rad_s": list(self.rl_wheel_rad_s),
                "feedback_source": "motor command estimate (JetBot has no wheel encoders)",
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
        if self.path == "/api/map":
            self.json(runtime.map_state())
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
        # Map snapshots can contain several thousand compact point-cloud rows.
        # Keep a hard cap while allowing the map API to receive a real scan.
        length = min(8 * 1024 * 1024, int(self.headers.get("Content-Length", "0")))
        return json.loads(self.rfile.read(length) or b"{}")

    def do_POST(self):
        try:
            body = self.read_json()
            if self.path == "/api/motor":
                runtime.set_motors(body["left"], body["right"])
                self.json({"ok": True})
            elif self.path == "/api/stop":
                runtime.stop(); self.json({"ok": True})
            elif self.path == "/api/controller":
                runtime.set_controller(body["mode"]); self.json({"ok": True, "mode": runtime.controller_mode})
            elif self.path == "/api/cmd_vel":
                runtime.set_cmd_vel(body["v"], body["w"]); self.json({"ok": True, "motors": runtime.motors})
            elif self.path == "/api/telemetry":
                runtime.set_pose(body["pose"]); self.json({"ok": True})
            elif self.path == "/api/map":
                runtime.set_map(body); self.json({"ok": True, "points": len(runtime.map_data["points"])})
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
