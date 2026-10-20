#!/usr/bin/env bash
set -euo pipefail

# Build on the Nano so the existing ARM64 JetBot base image is reused.
# The password is intentionally not stored here. Configure SSH keys for repeatable updates.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
JETBOT_HOST="${JETBOT_HOST:-192.168.50.232}"
JETBOT_USER="${JETBOT_USER:-jetbot}"
REMOTE_DIR="${REMOTE_DIR:-/home/jetbot/jetbot-navigation-dashboard}"
IMAGE_TAG="${IMAGE_TAG:-$(git -C "$SCRIPT_DIR/.." rev-parse --short HEAD 2>/dev/null || date +%Y%m%d%H%M)}"
SSH_KEY="${SSH_KEY:-${HOME}/.ssh/jetbot_navigation}"

command -v ssh >/dev/null || { echo "ssh is required" >&2; exit 1; }
command -v scp >/dev/null || { echo "scp is required" >&2; exit 1; }
test -r "$SSH_KEY" || { echo "SSH key not found: $SSH_KEY" >&2; exit 1; }
ssh_cmd=(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=accept-new)
scp_cmd=(scp -i "$SSH_KEY")

"${ssh_cmd[@]}" "${JETBOT_USER}@${JETBOT_HOST}" "mkdir -p '${REMOTE_DIR}' '${REMOTE_DIR}/data'"
"${scp_cmd[@]}" server.py rl_policy.py wheel_policy.npz Dockerfile docker-compose.yml "${JETBOT_USER}@${JETBOT_HOST}:${REMOTE_DIR}/"
"${scp_cmd[@]}" -r dist "${JETBOT_USER}@${JETBOT_HOST}:${REMOTE_DIR}/"
"${ssh_cmd[@]}" "${JETBOT_USER}@${JETBOT_HOST}" "set -e; cd '${REMOTE_DIR}'; docker build -t 'jetbot-navigation-dashboard:${IMAGE_TAG}' -t 'jetbot-navigation-dashboard:latest' .; docker rm -f jetbot_navigation_dashboard 2>/dev/null || true; docker run -d --name jetbot_navigation_dashboard --restart unless-stopped --network host --privileged --device /dev/video0:/dev/video0 -v /tmp/argus_socket:/tmp/argus_socket -v '${REMOTE_DIR}/data:/opt/jetbot-dashboard/data' -e JETBOT_HOST='${JETBOT_HOST}' -e MOTOR_TIMEOUT=1.0 -e SLAM_MAP_PATH=/opt/jetbot-dashboard/data/slam_map.json 'jetbot-navigation-dashboard:${IMAGE_TAG}'"
echo "Dashboard deployed at http://${JETBOT_HOST}:8080"
