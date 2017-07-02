'use strict'

const request = require('request')
const config = require('../config')
const apiUrl = `${config.API_URL}/${config.API_VERSION}/weather/export/request/`
const downloadUrl = `${config.API_URL}/${config.API_VERSION}/weather/export/`
const queryStringOptions = {
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
module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      const error = new Error('Missing required input: options')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.stationId) {
      const error = new Error('Missing required param: options.stationId')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.sessionKey) {
      const error = new Error('Missing required param: options.sessionKey')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.type) {
      const error = new Error('Missing required param: options.type')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.channel) {
      const error = new Error('Missing required param: options.channel')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.fromdate) {
      const error = new Error('Missing required param: options.fromdate')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.todate) {
      const error = new Error('Missing required param: options.todate')
      return callback ? callback(error, null) : reject(error)
    }

    const url = apiUrl + options.stationId + '/' + options.type + '/' + options.channel + '/' + options.fromdate + '/' + options.todate + '/c'
    const headers = {Authorization: 'OSA ' + options.sessionKey}
    const reqOptions = {
      url: url,
      qs: queryStringOptions,
      headers: headers
    }

    request(reqOptions, (error, response, body) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      } else if (!error && response.statusCode === 200) {
        const json = JSON.parse(body.toString())
        const dlUrl = downloadUrl + json.code
        request(dlUrl, (err, resp, data) => {
          if (err) {
            return callback ? callback(err, null) : reject(err)
          } else if (!err && resp.statusCode === 200) {
            return callback ? callback(null, data.toString()) : resolve(data.toString())
          }
        })
      }
    })
  })
}
