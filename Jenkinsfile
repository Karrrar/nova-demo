pipeline{
    agent{
        label "jenkins-agent"
    }
    stages{
        stage("Start"){
            steps{
                echo "========executing Start========"
                sh "pwd"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========Start executed successfully========"
                }
                failure{
                    echo "========Start execution failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}