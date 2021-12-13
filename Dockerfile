FROM node:16-bullseye-slim
WORKDIR /workspace
RUN apt update && \
    apt install -y git
RUN npm install -g expo-cli
COPY package*.json ./
RUN npm install --no-audit
RUN chmod 777 -R node_modules/