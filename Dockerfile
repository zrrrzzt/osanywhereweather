# Setting the base to nodejs 8.11.1
FROM node:8.11.2-alpine@sha256:421ce172099baa5307b46b4bee9c3174deb162a6880e656ddef769869cbe2898

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