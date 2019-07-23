FROM node:10.15.1
COPY . /app
WORKDIR  /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 7001

CMD npm start
