# Run K6 Tests Within A Cluster 

## Goal

This lab demonstrates running k6 wihtin a Kubernetes cluster sending metrics to prometheus and visualizing data in grafana

## Getting Started

Switch to `labs/in-cluster` directory

```bash
cd labs/in-cluster
```

### Load Test Files

Let's identify each load test file utilized for this lab.

- `benchmark-k6-cluster.js`, provides a benchmark load test for cluster deployment.

Now let's take a closer look at the load test file utilized for this example, and review its contents with special attention to VU code stage and different type of Checks.

```bash
# Open the file
code scripts/benchmark-k6-cluster.js
```

## Deploying Local Cluster and ngsa-memory

```bash
# NOTE: make sure you still in `labs/in-cluster/` directory
# create cluster, and build/deploy application
make all

# check if cluster and application is deployed
make check
```

## Verify ngsa-memory is up and running

```bash

kubectl get pods -n ngsa

# check ngsa logs
kubectl logs <ngsa-memory pod name> -n ngsa --tail 10
```

## Deploy k6 from docker image

We are deploying the [k6 docker image](https://hub.docker.com/r/grafana/k6/), however k6 package can be installed on multiple operating systems such as Linux, Mac, and Windows. [k6 Installation options](https://k6.io/docs/get-started/installation/).

Also, we are storing the load test script into a Configmap so it can accessable when k6 scales up.

## How to run a test

The k6 deployment is configured to run 10 VU for 30 minutes

```bash
# create name space
kubectl create namespace k6

# create configmap from load test file
kubectl create configmap k6-config --namespace k6 --from-file=scripts/benchmark-k6-cluster.js

# deploy k6 image to local cluster
kubectl apply -f deploy/k6.yaml
```

## Verify k6 is up and running

```bash

kubectl get pods -n k6

# check k6 logs
kubectl logs <k6 pod name> -n k6 --tail 20
```

## Verify ngsa-memory is receiving requests from k6

Check logs for ngsa-memory pod and locate the "UserAgent" attribute, and verify that looks like this. `UserAgent":"k6/0.44.0 (https://k6.io/)`

```bash

kubectl get pods -n ngsa
# check ngsa logs
kubectl logs <ngsa-memory pod name> -n ngsa --tail 20
```

## Setup Monitoring

The following instructions deploy Prometheus and Grafana in an existing cluster.

The k6 has an experimental feature name [Prometheus remote write](https://k6.io/docs/results-output/real-time/prometheus-remote-write/), that can be enabled by setting the variable `K6_PROMETHEUS_RW_SERVER_URL`

![Prometheus remote write configuration](images/k6-prometheus-remote-write.png)

NOTE: The [k6 deployment file](labs/in-cluster/deploy/k6.yaml) has already set this configuration.

### Install Grafana and Prometheus

```bash

#  deploy prometheus and grafana
kubectl apply -f deploy/monitoring

# Very that prometheus and grafana pods are up an running
kubectl get pods -n monitoring

```

### Open grafana dashboard

- Open Codespaces in VS code desktop
- Enable port-forward from CLI or K9s

```bash
kubectl port-forward service/grafana 3000:3000 -n monitoring

kubectl port-forward service/prometheus-service 9090:8080 -n monitoring
```

- Then, for grafana open browser on  http://localhost:3000 
- Then for prometheus open browser on http://localhost:9090

To [visualize time series](https://k6.io/docs/results-output/real-time/prometheus-remote-write/#time-series-visualization), you can use Grafana via explorer by importing the pre-built [official dashboard](https://grafana.com/grafana/dashboards/18030-test-result/)
or [k6 Load Testing Results (Prometheus)](https://grafana.com/grafana/dashboards/16543-k6-load-testing-results-prometheus/) dashboard
