pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('Functional Test') {
            steps {
                sauce('titus') {
                    sauceconnect(verboseLogging: true) {
                        sh 'make functional_tests'
                    }
                }
            }
        }
    }
}

