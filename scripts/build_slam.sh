#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
# Ubuntu 24.04 prerequisites (system packages, not Jetson install instructions):
# sudo apt-get install build-essential cmake libeigen3-dev libopencv-dev libboost-serialization-dev libssl-dev libglew-dev libepoxy-dev
mkdir -p third_party outputs
if [ ! -d third_party/ORB_SLAM3 ]; then
 git clone https://github.com/UZ-SLAMLab/ORB_SLAM3.git third_party/ORB_SLAM3
 git -C third_party/ORB_SLAM3 checkout 4452a3c4ab75b1cde34e5505a36ec3f9edcdc4c4
 git -C third_party/ORB_SLAM3 apply ../../configs/orb_slam3_compat.patch
fi
if [ ! -d third_party/Pangolin ]; then
 git clone --depth 1 --branch v0.9.2 https://github.com/stevenlovegrove/Pangolin.git third_party/Pangolin
fi
cmake -S third_party/Pangolin -B third_party/Pangolin/build -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX="$PWD/third_party/install" -DBUILD_EXAMPLES=OFF -DBUILD_TOOLS=OFF -DBUILD_PANGOLIN_PYTHON=OFF
cmake --build third_party/Pangolin/build -j3
cmake --install third_party/Pangolin/build
for dependency in DBoW2 g2o; do
 cmake -S "third_party/ORB_SLAM3/Thirdparty/$dependency" -B "third_party/ORB_SLAM3/Thirdparty/$dependency/build" -DCMAKE_BUILD_TYPE=Release
 cmake --build "third_party/ORB_SLAM3/Thirdparty/$dependency/build" -j3
done
tar -xf third_party/ORB_SLAM3/Vocabulary/ORBvoc.txt.tar.gz -C third_party/ORB_SLAM3/Vocabulary
cmake -S third_party/ORB_SLAM3 -B third_party/ORB_SLAM3/build -DCMAKE_BUILD_TYPE=Release -DCMAKE_PREFIX_PATH="$PWD/third_party/install" -DCMAKE_CXX_STANDARD=17
cmake --build third_party/ORB_SLAM3/build --target jetbot_slam -j3
