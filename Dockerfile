
FROM node:14 As developement

WORKDIR /malou14/fronted/src/app


COPY package*.json ./

RUN npm install