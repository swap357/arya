

node {
  try {

    def remote = [:]
    remote.name = "ncalif-one"
    remote.host = "13.56.76.109"
    remote.allowAnyHosts = true

    withCredentials([sshUserPrivateKey(credentialsId: 'ncalif-one', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
      remote.user = userName
      remote.identityFile = identity

      stage('Environment') {
        sh 'git --version'
        echo "Branch: ${env.BRANCH_NAME}"
      }

      stage ('Build') {
        sshScript remote: remote, script: "build.sh"
      }

      stage ('Deploy') {
        sshScript remote: remote, script: "deploy.sh"
      }

    }

  }

  catch (err) {
    throw err
  }
}
