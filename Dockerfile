# Setting the base to nodejs 8.11.1
FROM node:8.14.1-alpine@sha256:27f19125ce64a3edd113f9d4223796f5a2aad3ecad31bc55756fd93d91777452

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