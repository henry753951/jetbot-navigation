import subprocess
import sys
from jetnav.engine_shutdown import finish_engine


def child(code):
    return subprocess.Popen([sys.executable,'-u','-c',code],stdin=subprocess.PIPE,stdout=subprocess.PIPE,text=True)


def test_waits_for_save_after_eof(tmp_path):
    artifact=tmp_path/'saved'
    proc=child('import sys,time;from pathlib import Path;sys.stdin.read();time.sleep(.08);Path('+repr(str(artifact))+').write_text("saved")')
    result=finish_engine(proc,timeout=2)
    assert result['graceful_exit'] and artifact.read_text()=='saved'
    assert not result['forced_termination']


def test_forced_shutdown_is_never_reported_as_saved():
    proc=child('import sys,time;print("ready",flush=True);sys.stdin.read();time.sleep(20)')
    assert proc.stdout.readline().strip()=='ready'
    result=finish_engine(proc,timeout=.02,terminate_timeout=1)
    assert result['forced_termination'] and not result['graceful_exit']


def test_nonzero_exit_is_not_graceful_success():
    proc=child('import sys;sys.stdin.read();sys.exit(7)')
    result=finish_engine(proc,timeout=2)
    assert result['returncode']==7 and not result['graceful_exit']
