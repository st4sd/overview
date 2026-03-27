#! /bin/bash

# Copyright IBM Inc. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

# Exit on errors
set -e

# Start http server in the background
gatsby serve --prefix-paths &

# Check if linkcheck binary exists, if not download it
if [ ! -f "./linkcheck/linkcheck" ]; then
    echo "linkcheck binary not found, downloading..."
    
    # Detect OS and set appropriate download URL
    OS=$(uname -s)
    if [ "$OS" = "Darwin" ]; then
        # macOS
        LINKCHECK_URL="https://github.com/filiph/linkcheck/releases/download/3.0.0/linkcheck-3.0.0-macos-arm64.tar.gz"
        LINKCHECK_TAR="linkcheck-3.0.0-macos-arm64.tar.gz"
    elif [ "$OS" = "Linux" ]; then
        # Linux
        LINKCHECK_URL="https://github.com/filiph/linkcheck/releases/download/3.0.0/linkcheck-3.0.0-linux-x64.tar.gz"
        LINKCHECK_TAR="linkcheck-3.0.0-linux-x64.tar.gz"
    else
        echo "Unsupported operating system: $OS"
        exit 1
    fi
    
    # Download and unpack linkcheck
    wget "$LINKCHECK_URL"
    tar -xzf "$LINKCHECK_TAR"
    rm "$LINKCHECK_TAR"
    echo "linkcheck downloaded and extracted successfully"
else
    echo "linkcheck binary already exists, skipping download"
fi

# We need to wait a bit for the http server to be up on Travis
sleep 30s

# Check for broken links and anchors
# -e checks external links as well
# --skip-file is used to provide a list of "problematic" URLs (e.g., doi returning 403 to crawlers)
./linkcheck/linkcheck localhost:9000/overview/ -e --skip-file test/skipfile