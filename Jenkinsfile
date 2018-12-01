def remote = [:]
remote.name = "node-1"
remote.host = "13.56.76.109"
remote.allowAnyHosts = true

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
      withCredentials([sshUserPrivateKey(credentialsId: 'ncalif-one', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
        remote.user = userName
        remote.identityFile = identity
        stage("SSH Steps Rocks!") {
            writeFile file: 'abc.sh', text: 'ls'
            }
    }

  catch (err) {
    throw err
  }
}
