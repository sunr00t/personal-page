FROM node:20.11.0-alpine3.19

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]