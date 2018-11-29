# Setting the base to nodejs 8.11.1
FROM node:8.14.0-alpine@sha256:dfc36646eddf67cb2e18d9be1cdecb5ead4907b0593297bdc471f4e90d698d89

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