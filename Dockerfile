# Setting the base to nodejs 8.11.1
FROM node:8.15.0-alpine@sha256:f30a55706c7336a648493b926128f56176e4500cfdc968764bfdb711716e0109

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