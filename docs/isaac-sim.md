# Run the saved-room demo

This is the camera-based navigation demo shown in the clips. Start with the [Python setup](setup.md), then follow these steps on a Linux workstation with an NVIDIA GPU.

## Prepare Isaac Sim

The runner targets Isaac Sim 6.1 and uses an existing Docker container named `isaac-sim-headless`. Install Isaac Sim separately using NVIDIA's instructions and start a container with GPU access and **host networking**. The container needs `/isaac-sim/python.sh` and access to NVIDIA's asset service for the JetBot model.

Set `ISAAC_CONTAINER` if your container has another name. The runner copies a fresh snapshot into that container for each run. It requires at least 14 GiB of available host RAM before starting another simulation.

## Build the SLAM adapter

On Ubuntu 24.04:

```bash
sudo apt-get install build-essential cmake libeigen3-dev libopencv-dev libboost-serialization-dev libssl-dev libglew-dev libepoxy-dev
bash scripts/build_slam.sh
```

This downloads pinned ORB-SLAM3 and Pangolin sources, applies our patch, and builds `outputs/bin/jetbot_slam`. See the [patch notes](research/orb-slam3-patches.md) for the changes.

## Download the matching room and map

Install and authenticate the GitHub CLI, then run:

```bash
bash scripts/download_saved_room.sh
```

The release bundle contains the Atlas, metric anchors, obstacle grid, and matching room scene. The download script verifies their checksums. Keep these files together when reproducing the demo.

## Start navigation

```bash
export JETBOT_HOST=192.168.50.78  # Your workstation's LAN address.
export ISAAC_CONTAINER=isaac-sim-headless
.venv/bin/python scripts/prepare_demo.py
bash scripts/run_saved_room_demo.sh
```

Open `http://192.168.50.78:8791`, replacing the address with your own. The robot starts at `(7.8, 4.7)` and the example goal is `(6, 5.5)`. Choose a reachable free cell to try another goal. Port 8792 carries SLAM requests between Isaac and the host service; the launcher passes your LAN address to the simulator.

Run one project simulation at a time. Use the stop control before ending the launcher. The SLAM service may take time to finish its background work when shutting down.

## Try the base scene

For a simpler physics run using the generated room and its known geometry:

```bash
bash scripts/run_isaac.sh --run-name first-physics-run --steps 5500 --goal 10.5 7.5 --rl
```

Results go in `outputs/runs/first-physics-run/`. Use a new run name for each experiment.

## If something goes wrong

- Missing map files: run the bundle download step and keep its versioned files together.
- SLAM connection fails: check `JETBOT_HOST`, Docker host networking, and port 8792.
- Simulation exits early: check the run's `isaac.log` and the container's asset access.
- Build fails: include the compiler error and Ubuntu version in an issue.

The automated tests cover the Python components. The full Isaac run needs the workstation setup above and is checked separately.
