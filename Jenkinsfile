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

    stage('Build image'){
      if(env.BRANCH_NAME == 'master'){

        println('Build image stage');
        app = docker.build("swap357/arya")
	}
    }

  }

  catch (err) {
    throw err
  }
}
