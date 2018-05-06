# Setting the base to nodejs 6.11.0
FROM node:6.11.0-alpine@sha256:3e809c8dd79e3e5a5fbdf9099a7a482a019f8739da7fb0a8400de6a6439deb4b

# Maintainer
MAINTAINER Geir Gåsodden

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