#!/bin/bash

status () { echo "on-create: $*" | tee "$HOME/status"; }

status "start"

status "  installing k6"

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update --fix-missing -y
sudo apt-get install k6 --no-install-recommends

# Install Black formatter
status "  installing black formatter"
python -m pip install -U black

status "end"
