FROM node:18.18.2-alpine3.18

WORKDIR /

COPY . .

RUN npm install

CMD npm start