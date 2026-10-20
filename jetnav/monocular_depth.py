"""Temporal RGB plane sweep with geometric poses; no simulator depth inputs.

This is an experimental static-scene mapper, not a learned depth model. Metric
scale comes from the caller's calibrated visual poses. Invalid pixels stay NaN.
"""
import cv2
import numpy as np


def one_way(reference, source, K, T_world_reference, T_world_source,
            minimum=.25, maximum=4., planes=96):
    K = np.asarray(K, dtype=np.float64)
    relative = np.linalg.inv(T_world_source) @ T_world_reference
    gray = cv2.cvtColor(reference, cv2.COLOR_RGB2GRAY).astype(np.float32) / 255.
    other = cv2.cvtColor(source, cv2.COLOR_RGB2GRAY).astype(np.float32) / 255.
    h, w = gray.shape
    v, u = np.mgrid[:h, :w]
    rays = np.stack([(u-K[0, 2])/K[0, 0], (v-K[1, 2])/K[1, 1], np.ones_like(u)], axis=-1)
    rotated = rays @ relative[:3, :3].T
    inverse_depths = np.linspace(1/maximum, 1/minimum, planes)
    costs = []
    for inverse in inverse_depths:
        xyz = rotated / inverse + relative[:3, 3]
        z = xyz[:, :, 2]
        mx = (K[0, 0]*xyz[:, :, 0]/np.maximum(z, 1e-6)+K[0, 2]).astype(np.float32)
        my = (K[1, 1]*xyz[:, :, 1]/np.maximum(z, 1e-6)+K[1, 2]).astype(np.float32)
        warped = cv2.remap(other, mx, my, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT)
        valid = (z > .05) & (mx >= 3) & (mx < w-3) & (my >= 3) & (my < h-3)
        valid = cv2.erode(valid.astype(np.uint8), np.ones((5, 5), np.uint8)).astype(bool)
        cost = cv2.boxFilter(np.abs(warped-gray), -1, (5, 5))
        costs.append(np.where(valid, cost, 1.))
    cost = np.stack(costs)
    best_index = cost.argmin(axis=0)
    best = np.take_along_axis(cost, best_index[None], axis=0)[0]
    # A competing distant minimum is evidence of repeated texture/ambiguity.
    alternative = np.where(np.abs(np.arange(planes)[:, None, None]-best_index) > 3, cost, 1.).min(axis=0)
    depth = 1/inverse_depths[best_index]
    variance = cv2.boxFilter(gray*gray, -1, (5, 5))-cv2.boxFilter(gray, -1, (5, 5))**2
    ray_unit = rays / np.linalg.norm(rays, axis=2, keepdims=True)
    baseline = (np.linalg.inv(T_world_reference) @ T_world_source)[:3, 3]
    transverse = np.linalg.norm(np.cross(ray_unit, baseline), axis=2)
    # Approximate one-pixel triangulation sensitivity plus depth quantization.
    sigma = depth**2 / np.maximum(K[0, 0]*transverse, 1e-9)
    quantization = depth**2*(inverse_depths[1]-inverse_depths[0])/2
    valid = ((best < .045) & (alternative-best > .012) & (variance > .0005)
             & (transverse > .02) & (sigma+quantization < .12)
             & (best_index > 0) & (best_index < planes-1))
    return np.where(valid, depth, np.nan).astype(np.float32), sigma.astype(np.float32)


def temporal_depth(reference, source, K, T_world_reference, T_world_source, **kwargs):
    depth, sigma = one_way(reference, source, K, T_world_reference, T_world_source, **kwargs)
    reverse, _ = one_way(source, reference, K, T_world_source, T_world_reference, **kwargs)
    h, w = depth.shape
    v, u = np.mgrid[:h, :w]
    z = np.nan_to_num(depth)
    points = np.stack([(u-K[0, 2])*z/K[0, 0], (v-K[1, 2])*z/K[1, 1], z], axis=-1)
    relative = np.linalg.inv(T_world_source) @ T_world_reference
    points = points @ relative[:3, :3].T + relative[:3, 3]
    predicted = points[:, :, 2]
    mx = (K[0, 0]*points[:, :, 0]/np.maximum(predicted, 1e-6)+K[0, 2]).astype(np.float32)
    my = (K[1, 1]*points[:, :, 1]/np.maximum(predicted, 1e-6)+K[1, 2]).astype(np.float32)
    sampled = cv2.remap(reverse, mx, my, cv2.INTER_NEAREST, borderMode=cv2.BORDER_CONSTANT, borderValue=float('nan'))
    consistent = np.isfinite(sampled) & (np.abs(sampled-predicted) < np.minimum(.12, .025+sigma))
    return np.where(consistent, depth, np.nan).astype(np.float32)
