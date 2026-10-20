"""Observable bounded shutdown of a SLAM subprocess after closing its input."""
import subprocess
import time


def finish_engine(proc,timeout=600.,terminate_timeout=5.):
    started=time.monotonic();forced=False;killed=False
    if proc.stdin is not None and not proc.stdin.closed:
        try:proc.stdin.close()
        except BrokenPipeError:pass
    try:proc.wait(timeout=timeout)
    except subprocess.TimeoutExpired:
        forced=True;proc.terminate()
        try:proc.wait(timeout=terminate_timeout)
        except subprocess.TimeoutExpired:
            killed=True;proc.kill();proc.wait()
    return {'returncode':proc.returncode,'forced_termination':forced,'killed':killed,
            'graceful_exit':not forced and proc.returncode==0,
            'elapsed_seconds':time.monotonic()-started,'grace_period_seconds':timeout}
