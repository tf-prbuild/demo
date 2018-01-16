all: setup static_code_anlysis unit_tests functional_tests

setup:
	@echo "\n\n\n--------\nRunning setup...\n--------\n\n"
	npm install

static_code_anlysis:
	@echo "\n\n\n--------\nRunning JSHint...\n--------\n\n"
	./node_modules/.bin/jshint controllers services views test specs *.js

functional_tests:
	@echo "\n\n\n--------\nRunning functional_tests...\n--------\n\n"
	./deploy_and_test.sh
	@echo "Running functional tests mandator/checker"
	@ruby check_if_func_test_needed.rb


publish:
	docker build -t ndmanvar/demo_test .
	docker push ndmanvar/demo_test
	docker rmi ndmanvar/demo_test
