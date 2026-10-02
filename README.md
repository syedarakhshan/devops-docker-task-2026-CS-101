# DevOps Docker Task

## Student Information
Name: Your Name
Student ID: 2026-CS-101
Course: DevOps

## Application Description
A simple Node.js web application that displays the student name, student ID, course name and a message that it is running inside a Docker container.

## Technologies Used
- Git
- GitHub
- Docker
- Docker Hub
- Node.js

## Dockerfile Explanation
- `FROM node:20-alpine` : base image (lightweight Node.js 20 on Alpine Linux).
- `WORKDIR /app` : sets /app as working directory inside the container.
- `COPY package*.json ./` : copies package.json first so dependency layer is cached.
- `RUN npm install` : installs dependencies during image build.
- `COPY . .` : copies the remaining application files.
- `EXPOSE 3000` : documents that the app listens on port 3000.
- `CMD ["npm", "start"]` : command that runs when the container starts.

## Docker Commands
```bash
docker build -t <dockerhub-username>/devops-task:v1 .
docker run -d -p 3000:3000 --name devops-task <dockerhub-username>/devops-task:v1
docker tag <local-image> <dockerhub-username>/devops-task:v1
docker push <dockerhub-username>/devops-task:v1
```

## Docker Hub
Docker Hub Repository: https://hub.docker.com/r/<dockerhub-username>/devops-task

## How to Run
```bash
docker pull <dockerhub-username>/devops-task:v1
docker run -d -p 3000:3000 --name devops-task <dockerhub-username>/devops-task:v1
```
Open http://localhost:3000

## Screenshots
1. GitHub repository
2. Dockerfile
3. Docker image
4. Running container
5. Application in browser
6. Docker Hub repository
7. Docker pull
