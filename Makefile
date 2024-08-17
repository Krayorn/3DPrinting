phony: help

default: help

help: ## Show this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

install: ## Intall dependencies
	docker run -it --rm -v `pwd`:/var/app -w /var/app node:lts npm install

dev: ## Run dev env
	docker run -it --rm -p 4321:4321 -v `pwd`:/var/app -w /var/app node:lts npm run dev -- --host 0.0.0.0 