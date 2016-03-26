'use strict'

var osa = require('./index')

var options = {
  'stationId': process.env.STATION_ID,
  'email': process.env.EMAIL,
  'password': process.env.PASSWORD
}

osa.login(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    osa.getLiveData({stationId: options.stationId, sessionKey: data.sessionKey}, function (err, json) {
      if (err) {
        console.error(err)
      } else {
        console.log(JSON.stringify(json, null, 2))
      }
    })
  }
})
