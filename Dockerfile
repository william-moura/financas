FROM node:22-alpine

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build
RUN npm install -g @angular/cli