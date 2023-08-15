## docker/up
.PHONY: docker/up
docker/up:
	docker compose up -d

## docker stop
.PHONY: docker/stop
docker/stop:
	docker compose stop
