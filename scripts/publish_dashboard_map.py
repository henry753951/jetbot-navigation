"""Publish an occupancy-grid snapshot to the JetBot dashboard map layer.

This is a demo bridge for Isaac Sim's known fake room. A real SLAM publisher can
send the same JSON shape to ``POST /api/map`` after it has its own point cloud.
"""

import argparse
import json
import urllib.request
from pathlib import Path

import numpy as np


ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--map", default="assets/oracle_map.npz")
    parser.add_argument("--url", default="http://192.168.50.232:8080/api/map")
    args = parser.parse_args()

    with np.load(ROOT / args.map, allow_pickle=False) as data:
        grid = data["grid"]
        resolution = float(data["resolution"])
        origin = data["origin"].astype(float).tolist()

    height, width = grid.shape
    points = []
    for row, col in np.argwhere(grid >= 50):
        points.append([
            origin[0] + (float(col) + 0.5) * resolution,
            origin[1] + (float(row) + 0.5) * resolution,
            0.05,
        ])
    payload = {
        "source": "Isaac Sim oracle occupancy (demo)",
        "points": points,
        "boundary": [
            [origin[0], origin[1]],
            [origin[0] + width * resolution, origin[1]],
            [origin[0] + width * resolution, origin[1] + height * resolution],
            [origin[0], origin[1] + height * resolution],
        ],
        "path": [],
    }
    request = urllib.request.Request(
        args.url,
        data=json.dumps(payload, separators=(",", ":")).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=20) as response:
        print(response.read().decode())
    print("published points:", len(points))


if __name__ == "__main__":
    main()
