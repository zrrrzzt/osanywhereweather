# Setting the base to nodejs 8.11.1
FROM node:8.11.3-alpine@sha256:c9f2470464363addb0be6a61678f44854e73eee974bbc792a71d4d2b7ffd5edd

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