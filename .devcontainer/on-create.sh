#!/bin/bash

status () { echo "on-create: $*" | tee "$HOME/status"; }

status "start"

status "  installing k6"

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update --fix-missing -y
sudo apt-get install k6 --no-install-recommends

# Install Pythom
sudo apt-get update
sudo apt-get --assume-yes install python3.10

# Install Black formatter
status "  installing black formatter"
python -m pip install -U black

# Install k3d > 5.0.1
k3d --version | grep -Eo '^k3d version v5...[1-9]$' > /dev/null 2>&1
if [ $? -ne 0 ]; then
    # Means we don't have proper k3d version
    # Install v5.0.1
    echo "Installing latest k3d"
    wget -q -O - https://raw.githubusercontent.com/rancher/k3d/main/install.sh | sudo bash
fi

# Install Istio
hash istioctl || (echo "Installing istioctl" ; curl -sL https://istio.io/downloadIstioctl | sh - > /dev/null 2>&1; sudo mv ~/.istioctl/bin/istioctl /usr/local/bin)

# Create Docker Network for k3d
docker network create k3d

# Create local container registry
k3d registry create registry.localhost --port 5000

# Connect to local registry
docker network connect k3d k3d-registry.localhost

echo "on-create completed" > $HOME/status


status "end"
