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

        sshagent(credentials : ['ncalif-one']) {
            ssh ubuntu@13.56.76.109 'touch jenkins'
            }
    }

  }

  catch (err) {
    throw err
  }
}
