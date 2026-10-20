#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
export LD_LIBRARY_PATH="$PWD/third_party/install/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
mode=${1:-mapping}
sequence=${2:-outputs/sequence}
if [ "$mode" = localization ]; then
  test -f outputs/room_atlas.osa
  exec outputs/bin/jetbot_slam third_party/ORB_SLAM3/Vocabulary/ORBvoc.txt configs/localize.yaml "$sequence" outputs/localization 1
else
  exec outputs/bin/jetbot_slam third_party/ORB_SLAM3/Vocabulary/ORBvoc.txt configs/mono.yaml "$sequence" outputs/mapping 0
fi
