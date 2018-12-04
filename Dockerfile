# Setting the base to nodejs 8.11.1
FROM node:8.14.0-alpine@sha256:4a9c7876372e427ca7dcdca6cd6704dc70c81a13600c70ef860982f5a1dc653b

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