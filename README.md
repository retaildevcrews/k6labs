# k6 overview

This repository leverages GitHub Codespaces to deploy a local Cluster using k3d, then shows the user how to run k6 to perform load testing again ngsa-memory and then enable and leverage observability tools.

The final goal of this repository is to provide an environment that helps the user to get familiar with k6 and have a basic undestanding of scripting load test file. The repository contains guided hands-on learning scenarios to familiarize users with k6.

## What is k6?

Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.

Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier, k6 will help you to build resilient and performant applications that scale, one of the most k6 powerful feature is that it's a load testing tool scriptable in JavaScript. More documentation can be found [here](https://k6.io/docs/).

## Use cases

The most common case is to use k6 for testing the performance and reliability of APIs, microservices, and websites. More information can be found [here](https://k6.io/docs/#use-cases)

## Get started by opening this repo in CodeSpaces

- Click the Code button
- Click the Codespaces tab
- Click the "Create codespace on main" button
- Choose the `8 core` option, however if you are planning to scale up k6 you should choose `16 core` machine type.

## Run k6 locally from docker image

First of all let's identify the Test Lifecycle stages for a k6 test file.

- Init
- Setup
- VU code
- Teardown

Load test code snippet

![Script Sample File](/labs/loadtesting/images/javascript-sample-file.png)

More information related to the topics listed above can be found here.

- [Test Lifecycle Stages](https://k6.io/docs/using-k6/test-lifecycle/)
- [Options](https://k6.io/docs/using-k6/k6-options/)
- [Examples](https://k6.io/docs/examples/)

Typically, VU code is inside the `default` function, VU code runs over and over through the test duration from start to end in sequence. Once the VU reaches the end of the function, it loops back to the start and executes the code all over.

When creating new load test, usually the first step is to define [HTTP requests](https://k6.io/docs/using-k6/http-requests/) to test and validate endpoints. In this case, VU code makes a series of Get HTTP requests, and performs a check to validate the reponse.

For instance we could check for one or more conditions at the time such as:

- HTTP response code
- Text in the response body
- Response body size

Check definitions can be labeled so when the script includes checks, the summary report shows what type of `check` and how many passed or failed

![Script Sample File](/labs/loadtesting/images/javascript-checks.png)

More information about Checks can be found [here](https://k6.io/docs/using-k6/checks/)

### Load Test Files

Let's identify each load test file utilized for this lab.

- `baseline-k6.js`, provides a baseline load test.
- `benchmark-k6-cluster.js`, provides a benchmark load test for cluster deployment.

Now let's take a closer look at the load test file utilized for this example, and review its contents with special attention to VU code stage and different type of Checks.

```bash
# Open the file
code baseline-k6-local.js
```

## Run the ngsa container

From codespaces open up two `zsh` terminals

Navigate to terminal `1` to run ngsa-memory

```bash
# Run ngsa-memory
docker run --net=host ghcr.io/retaildevcrews/ngsa-app:beta --in-memory
```

## Run the k6 container

Navigate to the second terminal to run k6

For example, we are going to run a 5-second, 2-VU load test. In order to do that we are going to approach it in two different ways

- Run the load test script by setting VU and duration values in the file under Options.
- Run the load test script by supplying VU and duration values as arguments, this will ovewrite the values under Option if any.

More information about running k6 can be found [here](https://k6.io/docs/get-started/running-k6/)

Switch to `/labs/loadtesting` directory

```bash
cd labs/loadtesting
```

```bash
# verify ngsa-memory is accessible from the second terminal, curl should return a 200 http code.
curl -I localhost:8080/version

# Option 1: Run k6 with default options for VUs and duration
docker run --rm -v $(pwd)/scripts:/scripts --net=host grafana/k6 run -e MY_HOSTNAME=localhost:8080 /scripts/baseline-k6.js

# Option 2: Run k6 with arguments. overwrite VUs and duration by setting those arguments in-line
docker run --rm -v $(pwd)/scripts:/scripts --net=host grafana/k6 run --vus 2 --duration 5s -e MY_HOSTNAME=localhost:8080 /scripts/baseline-k6.js
```

## Review Summary Report

As k6 generates load for your test, it also makes metrics that measure the performance of the system. One way to [analyze results](https://k6.io/docs/get-started/results-output/) is by looking at the summary statistics, at the very end of the test summary report.

The report shows an aggregated summary of all [built-in and custom metrics outputs](https://k6.io/docs/using-k6/metrics/) collected and measure when you run a test, including:

- Checks performed
- Data received and sent
- Median and average values
- Minimum and maximum values
- p90, p95, and p99 values

Now let's take a look at an example of an summary report.

![Script Sample File](/labs/loadtesting/images/javascript-summary.png)

## Deploying Local Cluster and ngsa-memory

```bash
# NOTE: make sure you still in `labs/loadtesting/` directory
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

![Prometheus remote write configuration](labs//loadtesting/images/k6-prometheus-remote-write.png)

NOTE: The [k6 deployment file](labs/loadtesting/deploy/k6.yaml) has already set this configuration.

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

