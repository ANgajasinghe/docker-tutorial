FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV MONGODB_USERNAME=sa
ENV MONGODB_PASSWORD=secret

CMD ["npm", "start"]