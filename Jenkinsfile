node {
  try {

    stage('Checkout') {
      checkout scm
    }

    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"

    }


    stage ('Deploy') {
        echo "awdwada"
        sshagent(credentials : ['ncalif-one']) {
            sh 'touch jenkins'
            }
    }

  }

  catch (err) {
    throw err
  }
}
