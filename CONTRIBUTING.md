# Working on this together

Thanks for helping out! If you're just getting started, try the [2D demo](docs/setup.md) and have a look through the [code map](docs/architecture.md).

## Pick something small

Open an issue with what you'd like to try. It can be a project idea, a question, a bug, or a small improvement. Add a short example of how you expect the robot to behave. We can use the issue to agree on the task and who wants to help.

## Make a change

Create a branch such as `feat/frontier-view` or `fix/goal-selection`. If you don't have write access, fork the repository and work there. Keep each pull request focused enough that another person can try it.

Before opening the PR, run:

```bash
.venv/bin/python -m pytest -q
```

Mention what changed and how you checked it. A screenshot or short clip is helpful for visible changes. For an experiment, include the command, configuration, and a few results so someone else can repeat it.

## Keep things easy to find

Shared code goes in `jetnav/`, supported commands in `scripts/`, and explanations in `docs/`. Put new trials in `experiments/<topic>/` with a short README once we have a topic to investigate. Store generated data in `outputs/runs/<name>/`.

Large datasets, camera sequences, saved SLAM maps, and model downloads belong outside Git history. Use a release or an agreed download location, and record the version and checksum. Small examples and selected screenshots can live in the repository.

The current saved map depends on its matching scene, calibration, and anchors. If you change one of those, publish a new bundle so others can reproduce the same run.
