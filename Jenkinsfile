node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'printenv'
      sh 'balemvklesn vjskdncskjnjcs'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){

        sh 'docker build -t arya --no-cache .'
        sh 'docker tag arya swap357/arya'
        sh 'docker push -- swap357/arya'
        sh 'docker rmi -f arya swap357/arya'

      }
    }
  }
  catch (err) {
    throw err
  }
}
