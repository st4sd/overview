#! /bin/bash

# Copyright IBM Inc. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

# Exit on errors
set -e

# Start http server in the background
gatsby serve --prefix-paths &

# Download and unpack linkcheck
wget https://github.com/filiph/linkcheck/releases/download/2.0.23/linkcheck-2.0.23-linux-x64.tar.gz
tar -xzf linkcheck-2.0.23-linux-x64.tar.gz

# We need to wait a bit for the http server to be up on Travis
sleep 10s

# Check for broken links and anchors
./linkcheck/linkcheck localhost:9000/st4sd/overview/