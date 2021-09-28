FROM node:14
#ENV NODE_ENV=production
WORKDIR /app
#COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY package.json .
#RUN npm install --production --silent && mv node_modules ../
RUN npm install
COPY . .
EXPOSE 80

CMD ["node", "server.js"]