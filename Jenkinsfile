

node {
  def remote = [:]
  remote.name = "ncalif-one"
  remote.host = "13.56.76.109"
  remote.allowAnyHosts = true

  try {

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
        slackSend "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        sshScript remote: remote, script: "b"
        slackSend "Build script execution complete!"
        }
    }

      stage ('Deploy') {
        withCredentials([sshUserPrivateKey(credentialsId: 'ncalif-one', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
          remote.user = userName
          remote.identityFile = identity
          slackSend "Deploying to cluster - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
          sshScript remote: remote, script: "deploy.sh"
          slackSend "Deployment script execution complete!"
          }
      }

    }

  catch (err) {
    throw err
  }
}
