node {
  try {

    stage('Checkout') {
      checkout scm
    }

    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'printenv'
    }

    stage ('Deploy') {
    steps{
        sshagent(credentials : ['ncalif-one']) {
            sh 'touch jenkins'
            }
        }
    }



  }

  catch (err) {
    throw err
  }
}
