"""Visited observation positions, tied to the metric frame of their map."""
import json
from pathlib import Path

import numpy as np


def validated_state(state, frame_id):
    if not frame_id or state.get('metric_frame_id') != frame_id:
        raise ValueError('Exploration history metric frame mismatch')
    if state.get('version') != 1:
        raise ValueError('Unsupported exploration history version')
    positions = np.asarray(state.get('visited'), dtype=float)
    if positions.size == 0 and state.get('visited') == []:
        positions = np.empty((0, 2))
    if positions.ndim != 2 or positions.shape[1] != 2 or not np.isfinite(positions).all():
        raise ValueError('Exploration history requires finite XY positions')
    return positions.tolist()


def load_history(path, frame_id):
    return validated_state(json.loads(Path(path).read_text()), frame_id)


def save_history(path, visited, frame_id, source):
    state = dict(version=1, metric_frame_id=frame_id, visited=visited, source=source)
    validated_state(state, frame_id)
    path = Path(path)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(state, indent=2) + '\n')
    temporary.replace(path)


def transform_history(state, correction):
    positions = validated_state(state, correction['old_metric_frame_id'])
    matrix = float(correction['scale']) * np.asarray(correction['rotation'], float)
    translation = np.asarray(correction['translation'], float)
    if matrix.shape != (3, 3) or translation.shape != (3,) or not np.isfinite(matrix).all() or not np.isfinite(translation).all():
        raise ValueError('Invalid exploration frame correction')
    points = np.asarray(positions).reshape(-1, 2)
    result = dict(state, metric_frame_id=correction['new_metric_frame_id'],
                  visited=(points @ matrix[:2, :2].T + translation[:2]).tolist(),
                  previous_metric_frame_id=state['metric_frame_id'])
    validated_state(result, correction['new_metric_frame_id'])
    return result
