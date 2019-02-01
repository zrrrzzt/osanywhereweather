# Setting the base to nodejs 8.11.1
FROM node:8.15.0-alpine@sha256:812e5a88e7dc8e8d9011f18a864d2fd7da4d85b6d77c545b71a73b13c1f4993e

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