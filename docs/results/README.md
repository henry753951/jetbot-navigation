# Recorded navigation results

The saved-room bundle was tested in three independent Isaac sessions with new camera images. These are the results from those runs:

| Route | Final goal error | Position RMSE |
| --- | --- | --- |
| Original area | 6.1 cm | 7.7 cm |
| East area | 8.6 cm | 9.7 cm |
| Northwest area | 13.6 cm | 10.7 cm |

All three passed the arrival and stopping checks. The machine-readable summary is in [navigation.json](navigation.json). The setup uses a fixed visual Atlas, matching metric anchors, wheel odometry, and a depth-based obstacle map.

The [demo clips](../introduction.md) also include an exploration run that reached eight new observation positions before losing usable pose updates near the end. That gives us a useful recovery case to work on next.
