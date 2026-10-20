# Dependencies and assets

The repository retains the original project's GPL-3.0 license.

- ORB-SLAM3 is downloaded from UZ-SLAMLab at commit `4452a3c4ab75b1cde34e5505a36ec3f9edcdc4c4`. Its GPL-3.0 source is modified by `configs/orb_slam3_compat.patch`. See `docs/research/orb-slam3-patches.md`.
- Pangolin v0.9.2 is downloaded during the SLAM build. Its license remains in its upstream checkout.
- NumPy, SciPy, OpenCV, Pillow, pytest, and USD retain their upstream licenses. Python versions are listed in `requirements-lock.txt`.
- Room geometry, textures, sample policy, and demonstration clips were generated in this project.
- NVIDIA Isaac Sim and the JetBot model are obtained separately from NVIDIA. The repository does not redistribute the simulator or its robot model. Use your own licensed installation and access to its asset service.
