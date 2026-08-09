#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

ATSIGN_DIR="$HOME/Developer/websites/atsignhandle.xyz"
ENV_FILE="$HOME/Developer/websites/.env"

# Source CF API token
if [ -f "$ENV_FILE" ]; then
  set -a
  source "$ENV_FILE"
  set +a
fi

# Compute SHA path from index.html
SHA=$(shasum -a 256 index.html | cut -c1-12)

# Copy into atsignhandle.xyz public dir
mkdir -p "${ATSIGN_DIR}/public/${SHA}"
/bin/cp -f index.html "${ATSIGN_DIR}/public/${SHA}/index.html"

# Deploy from atsignhandle.xyz project
cd "$ATSIGN_DIR"
echo "Deploying to atsignhandle.xyz..."
echo "SHA path: ${SHA}"
bunx wrangler deploy

echo ""
echo "Live at: https://atsignhandle.xyz/${SHA}/"
