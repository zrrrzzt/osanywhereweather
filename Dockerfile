# Setting the base to nodejs 8.11.1
FROM node:8.11.2-alpine@sha256:fa780aed930805d83a238381edf858855ddb0e9e0c06a9b7b5c382d2f3de9c24

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