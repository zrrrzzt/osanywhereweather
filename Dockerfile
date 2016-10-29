###########################################################
#
# Dockerfile for osanywhereweather
#
###########################################################

# Setting the base to nodejs 4.6.1
FROM mhart/alpine-node:4.6.1

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV STATION_ID yourStationId
ENV EMAIL youremail@provider.com
ENV PASSWORD yourTopSecretPassword

# Startup
ENTRYPOINT node example