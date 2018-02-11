pipeline {
    agent any

    stages {
        stage('Setup') {
            npm install
        }
        stage('Static Code Analysis') {
            ./node_modules/.bin/jshint controllers services views test specs *.js
        }
        stage('Unit Test') {
            ./node_modules/.bin/karma start karma.conf.js
        }
        stage('Functional Test') {
            ./deploy_and_test.sh
        }
    }
}
