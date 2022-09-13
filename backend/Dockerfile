FROM node:18-slim

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

COPY . /app

EXPOSE 5000

CMD [ "npm", "run", "start" ]