'use strict'

const request = require('request')
const config = require('../config')
const apiUrl = `${config.API_URL}/${config.API_VERSION}/weather/history/`
const queryStringOptions = {
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
 * @returns {promise} or {object}
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

    if (!options.duration) {
      const error = new Error('Missing required param: options.duration')
      return callback ? callback(error, null) : reject(error)
    }

    const url = `${apiUrl}/${options.stationId}/${options.type}/${options.channel}/${options.duration}`
    const headers = { Authorization: 'OSA ' + options.sessionKey }
    const reqOptions = {
      url: url,
      qs: queryStringOptions,
      headers: headers
    }

    request(reqOptions, (error, response, body) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      } else if (!error && response.statusCode === 200) {
        const resp = JSON.parse(body.toString())
        return callback ? callback(null, resp) : resolve(resp)
      }
    })
  })
}
