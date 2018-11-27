# Setting the base to nodejs 8.11.1
FROM node:8.13.0-alpine@sha256:26114ee93f5e75a5d9734f80ab4c8aa33d18920f3fc1457a0d16c4e69034890a

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