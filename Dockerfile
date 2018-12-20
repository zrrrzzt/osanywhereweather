# Setting the base to nodejs 8.11.1
FROM node:8.14.1-alpine@sha256:e30f1caa9926b28eea55a530845106e20040001bed8c64d7976d80b9b7dd970c

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