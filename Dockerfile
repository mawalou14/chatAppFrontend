
FROM node:14 As developement

WORKDIR /malou14/fronted/src/app


COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@12.0.0

COPY . .

RUN npm run build

EXPOSE 4200