FROM node:18-slim

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]