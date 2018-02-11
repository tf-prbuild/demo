pipeline {
    agent any

    stages {
        stage('Setup') {
            sh 'npm install'
        }
        stage('Static Code Analysis') {
            sh 	'./node_modules/.bin/jshint controllers services views test specs *.js'
        }
        stage('Unit Test') {
            sh './node_modules/.bin/karma start karma.conf.js'
        }
        stage('Functional Test') {
            sh './deploy_and_test.sh'
        }
    }
}
