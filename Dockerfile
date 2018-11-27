# Setting the base to nodejs 8.11.1
FROM node:8.13.0-alpine@sha256:eeb9c1cd3d4a97d741593ae04f45d33a16b376958bb0b041331eb33f66fc5258

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT node example