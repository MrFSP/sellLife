install:
	npm install
	rm -rf dist
	npm run build
	npm publish --dry-run
	sudo npm link

install-deps:
	npm install

start:
	npx babel-node src/bin/selllife.js
	
start1:
	npx babel-node src/bin/selllife.js example/data.txt

start2:
	npx babel-node src/bin/selllife.js undefined

publish:
	--dry-run

lint:
	npx eslint .

build:
	rm -rf dist
	npm run build

republish:
	sudo npm uninstall -g selllife
	rm -rf dist
	npm run build
	npm publish --dry-run
	sudo npm link
