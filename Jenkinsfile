node {
  try {

    environment {
        SERVER_IP = '13.56.76.109'
        USERNAME = 'ubuntu'
    }

    stage('Checkout') {
      checkout scm
    }

    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
    }


    stage ('Deploy') {
      sh 'ssh ${env.USERNAME}@${env.SERVER_IP} touch jenkins'
    }

  }

  catch (err) {
    throw err
  }
}
