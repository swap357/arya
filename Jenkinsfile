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
            sh 'touch jenkins'
            sh 'docker container ls > container_list'
            }
    }

  }

  catch (err) {
    throw err
  }
}
