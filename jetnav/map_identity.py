"""Stable identity for the calibrated coordinate frame used by occupancy maps."""
import hashlib
import json


def metric_frame_id(alignment):
    fields = {key: alignment[key] for key in ('scale', 'rotation', 'translation')}
    fields['atlas_sha256'] = alignment.get('reference_atlas_sha256', alignment.get('atlas_sha256', 'legacy-unverified-atlas'))
    encoded = json.dumps(fields, sort_keys=True, separators=(',', ':'), allow_nan=False).encode()
    return hashlib.sha256(encoded).hexdigest()


def check_frame(metadata, actual):
    expected = metadata.get('metric_frame_id')
    if expected and expected != actual:
        raise ValueError('Occupancy map and SLAM metric coordinate frames do not match')
    return 'verified' if expected else 'legacy map without frame identity'
