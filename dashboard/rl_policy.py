"""Tiny NumPy runtime for the trained JetBot wheel policy.

The policy was trained in :mod:`jetnav.rl` and is deliberately kept here as a
small, Python 3.6 compatible runtime so the Nano does not need the repository's
full SciPy stack just to drive the wheels.
"""

import numpy as np


SCALE = np.array([0.3, 2.0])


class WheelPolicy:
    def __init__(self, path):
        with np.load(path, allow_pickle=False) as data:
            self.weights = data["weights"]
            self.slew_delta = float(data["slew_delta"]) if "slew_delta" in data else np.inf
        self.previous = np.zeros(2)

    def reset(self):
        self.previous[:] = 0.0

    def __call__(self, desired, measured):
        observation = np.r_[np.asarray(desired) / SCALE,
                            np.asarray(measured) / SCALE,
                            self.previous,
                            np.ones(1)]
        raw = np.clip(observation @ self.weights, -1, 1)
        self.previous = np.clip(raw,
                                self.previous - self.slew_delta,
                                self.previous + self.slew_delta)
        return self.previous * 14.0
