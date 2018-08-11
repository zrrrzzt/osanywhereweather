# Setting the base to nodejs 8.11.1
FROM node:8.11.3-alpine@sha256:13f928a8b00ed6f10c1e3964da555e7324d327e2ec0c2202be8b72206625573c

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