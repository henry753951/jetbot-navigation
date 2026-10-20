#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
container=${ISAAC_CONTAINER:-isaac-sim-headless}
mkdir -p outputs
# Keep the existing streaming app plus at most one project Kit process in RAM.
slot_acquired=false
for slot in 1; do
 exec 9>"outputs/.isaac-slot-$slot.lock"
 if flock -n 9; then slot_acquired=true; break; fi
 exec 9>&-
done
if [ "$slot_acquired" != true ]; then
 echo 'A project Isaac process is already active; wait for it to finish.' >&2
 exit 75
fi
available_kb=$(awk '/MemAvailable:/ {print $2}' /proc/meminfo)
if ((available_kb < 14680064)); then
 echo 'Less than 14 GiB host memory available; refusing another Isaac process.' >&2
 exit 75
fi
run_log=outputs/isaac.log
run_args=("$@")
for ((i=0; i<${#run_args[@]}; i++)); do
 if [ "${run_args[$i]}" = --run-name ]; then
  run_name=${run_args[$((i+1))]}
  [[ "$run_name" =~ ^[A-Za-z0-9_-]+$ ]] || exit 2
  mkdir -p "outputs/runs/$run_name"
  run_log="outputs/runs/$run_name/isaac.log"
 fi
done
# Each Kit process reads an immutable project snapshot. Never overwrite live assets.
remote_root=$(docker exec "$container" mktemp -d "/tmp/jetbot-run-${run_name:-default}-XXXXXX")
printf '%s\n' "$remote_root" > "${run_log%.log}.remote-root"
docker cp jetnav "$container:$remote_root/"
docker cp scripts "$container:$remote_root/"
docker cp assets "$container:$remote_root/"
docker exec "$container" mkdir -p "$remote_root/outputs"
docker cp outputs/wheel_policy.npz "$container:$remote_root/outputs/"
if [ -f outputs/depth_map_vslam.npz ]; then docker cp outputs/depth_map_vslam.npz "$container:$remote_root/outputs/"; fi
# Copy explicitly selected project-local maps and policies, including named runs.
for ((i=0; i<${#run_args[@]}; i++)); do
 if [[ "${run_args[$i]}" = --map || "${run_args[$i]}" = --policy || "${run_args[$i]}" = --exploration-history ]]; then
  resource=${run_args[$((i+1))]}
  [[ "$resource" != /* && "$resource" != *..* && -f "$resource" ]] || { echo "Invalid project resource: $resource" >&2; exit 2; }
  docker exec "$container" mkdir -p "$remote_root/$(dirname "$resource")"
  docker cp "$resource" "$container:$remote_root/$resource"
 fi
done
set +e
docker exec "$container" /isaac-sim/python.sh "$remote_root/scripts/isaac_run.py" "$@" > "$run_log" 2>&1
result=$?
set -e
if [ -n "${run_name:-}" ]; then
 docker cp "$container:$remote_root/outputs/runs/$run_name/." "outputs/runs/$run_name/" || true
else
 docker cp "$container:$remote_root/outputs/." outputs/ || true
fi
# Kit can return zero after an uncaught Python exception. Require this fresh
# snapshot's report, not a possibly stale report in the host output directory.
if [ "$result" -eq 0 ]; then
 report_path="$remote_root/outputs/${run_name:+runs/$run_name/}isaac_report.json"
 if ! docker exec "$container" test -f "$report_path"; then
  echo 'Isaac exited without its run report; treating the run as failed.' >&2
  result=1
 fi
fi
exit "$result"
