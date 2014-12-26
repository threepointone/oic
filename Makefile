sandbox:
	oia sandbox.js | node

tests:
	oia tests.js > tests.compiled.js
	-./node_modules/.bin/mocha tests.compiled.js
	rm tests.compiled.js

.PHONY: sandbox tests