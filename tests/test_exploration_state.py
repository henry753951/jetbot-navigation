import numpy as np
import pytest

from jetnav.exploration_state import load_history, save_history, transform_history


def test_history_round_trip_and_frame_rejection(tmp_path):
    path = tmp_path / 'history.json'
    save_history(path, [[1., 2.], [3., 4.]], 'frame_a', 'test observations')
    assert load_history(path, 'frame_a') == [[1., 2.], [3., 4.]]
    with pytest.raises(ValueError, match='frame mismatch'):
        load_history(path, 'frame_b')
    with pytest.raises(ValueError, match='finite XY'):
        save_history(path, [[float('nan'), 2.]], 'frame_a', 'bad')
    # A rejected save must not destroy the last valid checkpoint.
    assert len(load_history(path, 'frame_a')) == 2


def test_history_rotation_translation_and_empty(tmp_path):
    state = dict(version=1, metric_frame_id='old', visited=[[1., 0.]])
    correction = dict(old_metric_frame_id='old', new_metric_frame_id='new',
                      scale=2., rotation=[[0., -1., 0.], [1., 0., 0.], [0., 0., 1.]],
                      translation=[3., 4., 0.])
    updated = transform_history(state, correction)
    assert np.allclose(updated['visited'], [[3., 6.]])
    assert state['visited'] == [[1., 0.]]
    assert updated['metric_frame_id'] == 'new'
    updated = transform_history(dict(state, visited=[]), correction)
    path = tmp_path / 'empty.json'
    save_history(path, updated['visited'], 'new', 'empty')
    assert load_history(path, 'new') == []
