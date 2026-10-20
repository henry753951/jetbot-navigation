# JetBot dashboard

This folder contains the React + Three.js development dashboard and the small Python service that runs beside the JetBot camera and motors.

The page is a fullscreen game-like view:

- drag the scene to orbit the third-person camera and use the wheel to zoom;
- an in-scene SLAM point cloud, boundary, recorded path, camera frustum, and robot;
- a small live camera window and HUD readouts;
- hold-to-drive controls with a one-second motor timeout and a stop button;
- a manual/RL controller switch. RL mode loads the trained CEM wheel policy and
  accepts velocity commands through `POST /api/cmd_vel`.

The dashboard is intentionally a separate service. A SLAM process can publish `[x, y, heading]` to `POST /api/telemetry` and a map snapshot to `POST /api/map`:

```json
{
  "source": "ORB-SLAM3 monocular",
  "points": [[0.2, 1.1, 0.4], [0.3, 1.2, 0.5]],
  "boundary": [[-1, -1], [3, -1], [3, 2], [-1, 2]],
  "path": [[0, 0], [1, 0], [1, 1]]
}
```

The map is written to the mounted `data/slam_map.json` volume, so a dashboard restart does not erase the last visualization. The Nano image includes the trained NumPy wheel policy, but its measured velocity is estimated from motor commands because the standard JetBot has no wheel encoders. A real vSLAM process still needs a calibrated camera and must publish poses to these endpoints; until then, the service shows wheel dead-reckoning and an empty map layer.

To load the versioned Isaac Sim fake-room occupancy layer again:

```bash
.venv/bin/python scripts/publish_dashboard_map.py --url http://192.168.50.232:8080/api/map
```

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
