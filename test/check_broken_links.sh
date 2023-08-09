#! /bin/bash

# Copyright IBM Inc. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

# Exit on errors
set -e

# Start http server in the background
gatsby serve --prefix-paths &

# Download and unpack linkcheck
wget https://github.com/filiph/linkcheck/releases/download/3.0.0/linkcheck-3.0.0-linux-x64.tar.gz
tar -xzf linkcheck-3.0.0-linux-x64.tar.gz

# We need to wait a bit for the http server to be up on Travis
sleep 30s

# Check for broken links and anchors
# -e checks external links as well
# --skip-file is used to provide a list of "problematic" URLs (e.g., doi returning 403 to crawlers)
./linkcheck/linkcheck localhost:9000/overview/ -e --skip-file test/skipfile