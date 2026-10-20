#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
test -f outputs/initial_heading_bundle/anchors.json
test -f outputs/initial_heading_bundle/occupancy.npz
.venv/bin/python -m jetnav.slam_service \
  --settings configs/full_room_target_recovery_localize.yaml \
  --alignment outputs/initial_heading_bundle/alignment.json \
  --pose-anchors outputs/initial_heading_bundle/anchors.json \
  --output-prefix outputs/saved_room_console > outputs/saved_room_console_service.log 2>&1 &
slam_pid=$!
trap 'kill "$slam_pid" 2>/dev/null || true; wait "$slam_pid" 2>/dev/null || true' EXIT
sleep 1
kill -0 "$slam_pid"
echo "Saved room console: http://${JETBOT_HOST:-192.168.50.232}:8791"
bash scripts/run_isaac.sh --run-name saved_room_console \
  --slam-url "http://${JETBOT_HOST:-192.168.50.232}:8792" \
  --scene assets/room_saved_map.usda --steps 120000 \
  --start 7.8 4.7 2.774 --goal 6 5.5 --rl --slam --serve \
  --fuse-odometry --recover-tracking --depth-map \
  --map outputs/initial_heading_bundle/occupancy.npz \
  --position-uncertainty .3 --goal-tolerance .03 --max-speed .08 --max-yaw-rate .35
