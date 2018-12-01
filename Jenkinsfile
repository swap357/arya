node {
  try {

    environment {
        SERVER_IP = '13.56.76.109'
        USERNAME = 'ubuntu'
        SSH = 'ssh ${env.USERNAME}@${env.SERVER_IP}'
    }

    stage('Checkout') {
      checkout scm
    }

    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
    }


    stage ('Deploy') {
      sh '${env.SSH} touch jenkins'
    }

  }

  catch (err) {
    throw err
  }
}
