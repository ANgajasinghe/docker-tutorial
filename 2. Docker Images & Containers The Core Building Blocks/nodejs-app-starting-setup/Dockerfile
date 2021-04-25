# start by pulling im node image 
FROM node

ENV NODE_ENV=production

# This is our working derectory  
WORKDIR /app



# Optimization (tip -01 )
COPY package.json /app

RUN npm install --production --silent && mv node_modules ../


# . -> all the files and sub folders should coppy to the docker image
# . -> where should be store inside the image (that can be sub foalder) -> coppy to /app foalder
COPY . /app

# all command under RUN will execute in the root directory of the image
# BUT WE COPPY TO /app BUT adding WORKDIR /app will set default folder as /app
# RUN npm install --production --silent && mv node_modules ../

# expose this to our machine
EXPOSE 80

# this will run when container start based on the image
CMD ["node","server.js"] 
# this is the final layer

# NOTE
# NO need to build always images we can build just container only and run that by id
# Every instruction is a layer 


# Optimization 
# (tip -01) We do not need to install npm if it not change. 
    # But here we do that all the time to address this quection we can copy package.json first and then run npm i and coppy all code after npm done