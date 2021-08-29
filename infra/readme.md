1. To build docker image with tag: docker build -t arshad/posts:0.0.1 .
2. Command for creating a pod: kubectl apply -f posts.yaml
3. Pod wrap up the container.
4. To get the image from host to your minicube use command `minikube cache add arshad/posts:0.0.1`
5. minikube cache delete <image name>
6. eval $(minikube docker-env)
7. minikube cache list/reload

Steps to run the pods

1.             minikube start
2.             kubectl get pods

Follow these steps to get ImagePullBackOff:

    1. Set the environment variables with `eval $(minikube docker-env)`

    2. Build the image with the Docker daemon of Minikube

    (eg docker build -t stephengrider/posts:0.0.1 .)

    3. Set the image in the pod spec like the build tag (eg stephengrider/posts:0.0.1)

    4. Set the imagePullPolicy to Never, otherwise Kubernetes will try to download the image.

    And then:

    kubectl delete pods posts

    kubectl apply -f posts.yaml

    kubectl get pods

        NAME    READY   STATUS    RESTARTS   AGE
        posts   1/1     Running   0          5m40s

1. https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
   this link will help to access the service locally

2. minikube service service_name --url

3. echo "$(minikube ip) ticketing.dev" | sudo tee -a /etc/hosts

4. gcloud container clusters get-credentials ticketing.dev --zone=us-central1-f

5. kubectl delete all --all --all-namespaces

6. login to google cloud sdk default = `gcloud auth application-default login`

7. kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

8. kubectl get secrets
