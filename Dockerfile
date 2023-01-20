From node:12
WORKDIR /IACSDtest
COPY package.json /IACSDtest
RUN npm install
COPY .  /IACSDtest
CMD node server.js
EXPOSE 8000