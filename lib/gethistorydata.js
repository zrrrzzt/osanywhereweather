'use strict'

var request = require('request')
var config = require('../config')
var apiUrl = config.API_URL + '/' + config.API_VERSION + '/weather/history/'
var queryStringOptions = {
  _: new Date().getTime()
}

/**
 * Get history data from your weatherstation
 *
 * @param {object} options - Options for the request
 * @param {string} options.stationId - Id for the weatherstation (mac address)
 * @param {string} options.sessionKey - Sessionkey from the login
 * @param {string} options.type - Type of data (temperature, humidity, pressure, uv, wind or rain)
 * @param {string} options.channel - Channel for sensors
 * @param {string} options.duration - Period for data (@day, @week, @month)
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {object}
 */
function getHistoryData (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.stationId) {
    return callback(new Error('Missing required param: options.stationId'), null)
  }

  if (!options.sessionKey) {
    return callback(new Error('Missing required param: options.sessionKey'), null)
  }

  if (!options.type) {
    return callback(new Error('Missing required param: options.type'), null)
  }

  if (!options.channel) {
    return callback(new Error('Missing required param: options.channel'), null)
  }

  if (!options.duration) {
    return callback(new Error('Missing required param: options.duration'), null)
  }
  var url = apiUrl + options.stationId + '/' + options.type + '/' + options.channel + '/' + options.duration
  var headers = {Authorization: 'OSA ' + options.sessionKey}
  var reqOptions = {
    url: url,
    qs: queryStringOptions,
    headers: headers
  }

  request(reqOptions, function (error, response, body) {
    if (error) {
      return callback(error, null)
    }

    if (!error && response.statusCode === 200) {
      var resp = JSON.parse(body.toString())

      return callback(null, resp)
    }
  })
}

module.exports = getHistoryData
