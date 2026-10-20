"""Install only checksum-verified members of the saved-room release."""
import hashlib
import json
from pathlib import Path
import sys
import tarfile

root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / "configs/saved-room-manifest.json").read_text())
with tarfile.open(sys.argv[1], "r:gz") as archive:
    members = archive.getmembers()
    if len(members) != len(manifest) or {m.name for m in members} != set(manifest):
        raise ValueError("Bundle does not match the expected file list")
    # Verify every member before replacing any local bundle file.
    for member in members:
        if not member.isfile():
            raise ValueError("Only regular files are allowed")
        with archive.extractfile(member) as source:
            digest = hashlib.file_digest(source, "sha256").hexdigest()
        if digest != manifest[member.name]:
            raise ValueError(f"Checksum mismatch: {member.name}")
    for member in members:
        target = root / member.name
        target.parent.mkdir(parents=True, exist_ok=True)
        with archive.extractfile(member) as source, target.open("wb") as destination:
            import shutil
            shutil.copyfileobj(source, destination)
print("Saved room installed. Next: bash scripts/run_saved_room_demo.sh")
