#!/usr/bin/env bash
set -euo pipefail

output="${1:-dist/game-forge-graph-worker.zip}"
temporary="$(mktemp -d)"
trap 'rm -rf "$temporary"' EXIT

mkdir -p "$(dirname "$output")"
output_directory="$(cd "$(dirname "$output")" && pwd)"
output_absolute="$output_directory/$(basename "$output")"
rm -f "$output_absolute"
npx esbuild graph-worker/handler.ts \
  --bundle \
  --platform=node \
  --target=node22 \
  --format=esm \
  --outfile="$temporary/index.mjs"

(
  cd "$temporary"
  zip -q "$output_absolute" index.mjs
)

printf '%s\n' "$output_absolute"
