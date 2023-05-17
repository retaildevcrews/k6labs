# k6 Labs Overview

The goal of this repository is to provide examples for using k6 as a load testing tool in order to validate performance of Kubernetes Hosted applications.

This repository takes advantage of GitHub Codespaces to simplify getting started with the tooling.  Instructions will also be provided on how to set up an environment outside of the dev container if the user chooses to do so.

deploy a local Cluster using k3d, then shows the user how to run k6 to perform load testing again ngsa-memory and then enable and leverage observability tools.

The final goal of this repository is to provide an environment that helps the user to get familiar with k6 and have a basic undestanding of scripting load test file. The repository contains guided hands-on learning scenarios to familiarize users with k6.

## What is k6?

Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.

Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier, k6 will help you to build resilient and performant applications that scale, one of the most k6 powerful feature is that it's a load testing tool scriptable in JavaScript. More documentation can be found [here](https://k6.io/docs/).

## Use cases

The most common case is to use k6 for testing the performance and reliability of APIs, microservices, and websites. More information can be found [here](https://k6.io/docs/#use-cases)

## The Labs

The easiest way to get started with the labs by opening this repository in CodeSpaces

- Click the Code button
- Click the Codespaces tab
- Click the "Create codespace on main" button
- Choose the `8 core` option, however if you are planning to scale up k6 you should choose `16 core` machine type.

| Lab    | Description |
| -------- | ------- |
| [Lab 1: Run k6 as docker container](labs/in-dev-container/)| This lab shows how to run k6 inside the codespace environment by running 2 terminals, one running a docker image for the system under test and the other running docker image for k6 test |
| [Lab 2: Run k6 within a cluster](labs/in-cluster/)  | This lab shows how to run k6 inside a cluster, we will deploy system under test, k6, and observability tooling    |
