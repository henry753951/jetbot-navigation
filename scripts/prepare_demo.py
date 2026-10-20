"""Prepare local outputs without replacing an existing trained policy."""
from pathlib import Path
import shutil

root = Path(__file__).resolve().parents[1]
output = root / "outputs"
output.mkdir(exist_ok=True)
for name in ("wheel_policy.npz", "wheel_policy.json"):
    target = output / name
    if not target.exists():
        shutil.copy2(root / "examples" / "pretrained" / name, target)
print("Demo files ready in outputs/")
