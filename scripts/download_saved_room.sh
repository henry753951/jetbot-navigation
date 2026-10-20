#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
command -v gh >/dev/null || { echo 'Install and sign in to the GitHub CLI first.' >&2; exit 1; }
bundle_dir=$(mktemp -d)
trap 'rm -rf "$bundle_dir"' EXIT
gh release download v0.1.0 --repo henry753951/jetbot-navigation --pattern saved-room-v0.1.0.tar.gz --pattern SHA256SUMS --dir "$bundle_dir"
(cd "$bundle_dir" && sha256sum -c SHA256SUMS)
python3 scripts/install_saved_room.py "$bundle_dir/saved-room-v0.1.0.tar.gz"
