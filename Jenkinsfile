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
                sh 'docker ps'
            }
        }
    }
}

