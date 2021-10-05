FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# add arguments
ARG DEFAULT_PORT=80

#ENV NODE_ENV=production
ENV PORT=$DEFAULT_PORT

# Export the app's port so that it is available inside the container  
EXPOSE $PORT 

VOLUME [ "/app/node_modules" ]

CMD ["node", "server.js"]