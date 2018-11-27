# Setting the base to nodejs 8.11.1
FROM node:8.13.0-alpine@sha256:7d242932c3ff95abf200505f884ba94e8a2543e42d073a26663d28bdfc6eb376

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