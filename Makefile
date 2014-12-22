sandbox:
	 @./node_modules/.bin/sjs --module oia/macro -r index.js 

tests:
	@./node_modules/.bin/sjs --module oia/macro -r tests.js -o tests.$.js 
	@./node_modules/.bin/mocha tests.$.js

.PHONY: sandbox tests