# JetBot dashboard

This folder contains the React + Three.js development dashboard and the small Python service that runs beside the JetBot camera and motors.

The page has four useful pieces:

- a live MJPEG camera panel;
- a Three.js third-person scene that follows the current pose;
- state cards for pose, temperature, memory, and uptime;
- hold-to-drive controls with a one-second motor timeout and a stop button.

The dashboard is intentionally a separate service. It exposes `POST /api/telemetry` so a future SLAM process can publish `[x, y, heading]` without changing the React app. Until then, the service shows wheel dead-reckoning while a command is active.

## Local development

From this folder:

```bash
npm install
npm run dev
```

The Vite page expects the Python API on the same origin in production. For local UI work, either run the Python service on port 8080 and use a reverse proxy, or build the static page and serve it with the service:

```bash
npm run build
cd ..
.venv/bin/python dashboard/server.py --host 0.0.0.0 --port 8080
```

## Deploy to JetBot

The Nano already has the ARM64 JetBot base image locally. Build the small image on the Nano so no cross-architecture runtime is needed:

```bash
cd dashboard
JETBOT_HOST=192.168.50.232 ./deploy_remote.sh
```

The script uses the current Git commit as the image tag, replaces only the dashboard container, and leaves the existing Jupyter and display containers untouched. For repeat updates, configure an SSH key for the `jetbot` account so `ssh` and `scp` do not prompt for a password.

Open `http://192.168.50.232:8080` from the same LAN. The service is deliberately LAN-only and does not expose a public login.

The Docker Compose file documents the same runtime settings. The Nano's Docker client is old and does not include Compose, so the update script uses `docker build` and `docker run` directly.
