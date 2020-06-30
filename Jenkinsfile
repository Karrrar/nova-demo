pipeline{
    agent none
    stages{
        stage("Docker Build"){
            agent {dockerfile true}
        }
        stage("Kubectl"){
            agent {
                label "master"
            }
            steps{
                echo "========executing Start========"
                sh 'kubectl cluster-info'
                sh 'kubectl get all --all-namespaces -o wide'
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
        stage("Docker"){
                        agent {
                label "master"
            }
            steps{
                echo "========executing Start========"
                sh 'docker version'
                sh 'docker images'
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
        stage("Testing"){
           parallel {
               stage("Unit Test") {
                   steps {
                       echo "Run Unit Tests"
                   }
               }
               stage("Integration Test")
               {
                   steps{
                       echo "Run Integration Test"
                   }
               }
           }
        }
        stage("Build"){
            agent{
                label "jenkins-agent"
            }
            steps{
                echo "====++++executing Build++++===="
                // script {
                //     def novaimage = docker.build("nova-demo:${env.BUILD_ID}")
                // }
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