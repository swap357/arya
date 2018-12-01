

node {
  try {

    def remote = [:]
    remote.name = "ncalif-one"
    remote.host = "13.56.76.109"
    remote.allowAnyHosts = true
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


    stage ('Build') {
      withCredentials([sshUserPrivateKey(credentialsId: 'ncalif-one', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
        remote.user = userName
        remote.identityFile = identity
        stage("SSH Steps Rocks!") {
            sshScript remote: remote, script: "build.sh"
                }
          }
      }

      stage ('Deploy') {
        withCredentials([sshUserPrivateKey(credentialsId: 'ncalif-one', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
          remote.user = userName
          remote.identityFile = identity
          stage("SSH Steps Rocks!") {
              sshScript remote: remote, script: "deploy.sh"
                }
          }
      }

    }

  catch (err) {
    throw err
  }
}
