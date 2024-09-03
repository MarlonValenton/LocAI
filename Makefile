include .env

.PHONY: all

build:
	docker build -t LocAI .

run:
	export $(cat .env | xargs)
	docker stop LocAI || true && docker rm LocAI || true
	docker run --name LocAI --rm -e OPENAI_API_KEY=${OPENAI_API_KEY} -p 3000:3000 LocAI

logs:
	docker logs -f LocAI

push:
	docker tag LocAI:latest ${DOCKER_USER}/LocAI:${DOCKER_TAG}
	docker push ${DOCKER_USER}/LocAI:${DOCKER_TAG}