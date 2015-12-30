'use strict'

var request = require('request')
var config = require('../config')
var apiUrl = config.API_URL + '/' + config.API_VERSION
var queryStringOptions = {
  temperature_channel: 1,
  humidity_channel: 1,
  uv_channel: 1,
  _: new Date().getTime()
}

/**
 * Get live data from your weatherstation
 *
 * @param {object} options - Options for the request
 * @param {string} options.stationId - Id for the weatherstation (mac address)
 * @param {string} options.sessionKey - Sessionkey from the login
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {object}
 */
function getLiveData (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.stationId) {
    return callback(new Error('Missing required param: options.stationId'), null)
  }

  if (!options.sessionKey) {
    return callback(new Error('Missing required param: options.sessionKey'), null)
  }

  var url = apiUrl + '/weather/live/' + options.stationId
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

module.exports = getLiveData
