'use strict'

var request = require('request')
var config = require('../config')
var apiUrl = config.API_URL + '/' + config.API_VERSION + '/weather/export/request/'
var downloadUrl = config.API_URL + '/' + config.API_VERSION + '/weather/export/'
var queryStringOptions = {
  _: new Date().getTime()
}

/**
 * Export data from your weatherstation
 *
 * @param {object} options - Options for the request
 * @param {string} options.stationId - Id for the weatherstation (mac address)
 * @param {string} options.sessionKey - Sessionkey from the login
 * @param {string} options.type - Type of data (temperature, humidity, pressure, uv, wind or rain)
 * @param {string} options.channel - Channel for sensors
 * @param {string} options.fromdate - Startdate for export (YYYY-mm-dd)
 * @param {string} options.todate - Enddate for export (YYYY-mm-dd)
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {object}
 */
function exportData (options, callback) {
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

  if (!options.fromdate) {
    return callback(new Error('Missing required param: options.fromdate'), null)
  }

  if (!options.todate) {
    return callback(new Error('Missing required param: options.todate'), null)
  }
  var url = apiUrl + options.stationId + '/' + options.type + '/' + options.channel + '/' + options.fromdate + '/' + options.todate + '/c'
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
      var json = JSON.parse(body.toString())
      var dlUrl = downloadUrl + json.code
      request(dlUrl, function (err, resp, data) {
        if (err) {
          return callback(err, null)
        }
        if (!err && resp.statusCode === 200) {
          return callback(null, data.toString())
        }
      })
    }
  })
}

module.exports = exportData
