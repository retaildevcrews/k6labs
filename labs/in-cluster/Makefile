SHELL=/bin/bash
.PHONY: create delete

all: create deploy-ngsa-memory

delete:
	@k3d cluster delete ngsa-app

create: delete
	@k3d cluster create ngsa-app --registry-use k3d-registry.localhost:5000 --config deploy/k3d.yaml --k3s-arg "--disable=traefik@server:0"

	@kubectl wait node --for condition=ready --all --timeout=60s
	@sleep 5
	@kubectl wait pod -A --all --for condition=ready --timeout=60s

	@istioctl install -y --set profile=demo -f deploy/istio-operator.yaml

	@kubectl create namespace ngsa

	@kubectl label namespace ngsa istio-injection=enabled --overwrite

delete-ngsa-deploys:
	-@kubectl delete --ignore-not-found -f deploy/ngsa-memory.yaml

deploy-ngsa-memory: delete-ngsa-deploys
	@kubectl apply -f deploy/ngsa-memory.yaml

check:
	@http http://localhost:30000/version
	@http http://localhost:30080/version
