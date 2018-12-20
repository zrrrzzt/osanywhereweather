# Setting the base to nodejs 8.11.1
FROM node:8.14.1-alpine@sha256:20a62c59d7fba25d5de6373ef39734c1caaa788c3d0be0c2c4a92ca619a4d09e

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