pipeline{
    agent{
        label "jenkins-agent"
    }
    stages{
        stage("Start"){
            steps{
                echo "========executing Start========"
                sh 'pwd'
                sh 'ls'
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
        stage("Build"){
            steps{
                echo "====++++executing Build++++===="
                script {
                    def nova-demo = docker.build("nova-demo:${env.BUILD_ID")
                }
                //sh 'docker images'
                //sh "docker build -t nova-demo:${env.BUILD_ID} ."
            }
            post{
                always{
                    echo "====++++always++++===="
                }
                success{
                    echo "====++++Build executed successfully++++===="
                }
                failure{
                    echo "====++++Build execution failed++++===="
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