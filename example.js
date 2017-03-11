'use strict'

const osa = require('./index')

const options = {
  'stationId': process.env.STATION_ID,
  'email': process.env.EMAIL,
  'password': process.env.PASSWORD
}

osa.getCredentials(options)
  .then(osa.getLiveData)
  .then(json => console.log(JSON.stringify(json, null, 2)))
  .catch(error => console.error(error))
