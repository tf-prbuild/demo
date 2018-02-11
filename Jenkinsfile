pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'npm install'
                sh 'sc'
            }
        }
        stage('Static Code Analysis') {
            steps {
                sh 	'./node_modules/.bin/jshint controllers services views test specs *.js'
            }
        }
        stage('Unit Test') {
            steps {
                sh './node_modules/.bin/karma start karma.conf.js'
            }
        }
        stage('Functional Test') {
            steps {
                sh './deploy_and_test.sh'
            }
        }
    }
}

