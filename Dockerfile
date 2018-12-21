# Setting the base to nodejs 8.11.1
FROM node:8.14.1-alpine@sha256:cdeb53db7bab150fae433e853c629766eb469257ebac15051a924eaa8d45e85f

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