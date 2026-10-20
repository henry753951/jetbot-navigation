# Getting started

Start with the 2D demo if you're new to the project. It runs the planner and wheel controller without installing Isaac Sim.

## Install

Use Linux with Python 3.12 and run the commands in the [README](../README.md#try-the-2d-demo) from the repository root. `requirements-lock.txt` records the versions used for this snapshot. The editable install makes `jetnav` available when you run scripts.

`prepare_demo.py` creates `outputs/` and copies the small example wheel policy there. It keeps an existing policy if you've already trained one.

## Try it

Set `JETBOT_HOST` to your computer's `192.168.x.x` LAN address, then run `bash scripts/start_console.sh`. Open that address on port 8790. Choose a free cell on the map, watch the route, and try the exploration and stop controls.

## Run tests

```bash
.venv/bin/python -m pytest -q
```

Tests use the committed example policy, so they also work before preparing the demo.

## Train a wheel policy

```bash
.venv/bin/python scripts/prepare_demo.py
.venv/bin/python -m jetnav.rl
```

This writes `outputs/wheel_policy.npz` and a JSON report. The policy uses cross-entropy search with randomized motor dynamics. It can run with NumPy on the CPU.

## Generate the base room again

```bash
.venv/bin/python -m jetnav.room
```

This regenerates `assets/room.usda` and `assets/oracle_map.npz`. The saved-room demo uses its own matching scene from the release bundle.

For larger runs, choose a new run name and keep results under `outputs/runs/<name>/`. Save a short summary in your issue so someone else can understand what you tried.
