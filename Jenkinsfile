pipeline {
  agent {
    node {
      label 'linux'
    }
  }
  stages {
    // On opening a PR into /production
    stage('PR: Test build') {
      when {
        expression {
          env.BRANCH_NAME.startsWith("PR-") && env.CHANGE_TARGET == "production"
        }
      }
      steps {
        script {
          sh "rm -rf node_modules"
          sh "npm i"
          sh "npm run docs:pr"
        }
      }
    }
    // On merge into /production
    stage('Merge: Build and deploy') {
      when {
        expression { env.BRANCH_NAME == "production" }
      }
      environment {
        // Set constants
        CREDENTIAL_ID = "onedesert_test"
        BRANCH_NAME = "gh-pages"
        PAGES_REPO = "git@github.com:lodgify/lodgify-ui.git"
      }
      steps {
        sh "rm -rf ${BRANCH_NAME}"
        sh "rm -rf node_modules"

        sshagent(credentials: ["${CREDENTIAL_ID}"]) {
          sh "git clone ${PAGES_REPO} ${BRANCH_NAME}"
          sh "git remote set-url origin ${PAGES_REPO}"
        }

        sh "npm i && npm run docs:build"

        dir("${BRANCH_NAME}") {
          sh "git checkout -f ${BRANCH_NAME}"
          sh "git add -A"
          sh "git commit -m 'Publishing to branch ${BRANCH_NAME}'"

          sshagent(credentials: ["${CREDENTIAL_ID}"]) {
            sh "git push origin ${BRANCH_NAME}"
          }
        }
      }
    }
  }
}
