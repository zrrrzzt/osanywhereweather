'use strict'

const request = require('request')
const config = require('../config')
const apiUrl = `${config.API_URL}/${config.API_VERSION}`
const queryStringOptions = {
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
 * @param {callback} callback - Callback for handling the response - Optional
 *
 * @returns {Promise} or {object}
 */

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      const error = new Error('Missing required input: options')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    if (!options.stationId) {
      const error = new Error('Missing required param: options.stationId')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    if (!options.sessionKey) {
      const error = new Error('Missing required param: options.sessionKey')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    const url = `${apiUrl}/weather/live/${options.stationId}`
    const headers = {Authorization: 'OSA ' + options.sessionKey}
    const reqOptions = {
      url: url,
      qs: queryStringOptions,
      headers: headers
    }

    request(reqOptions, (error, response, body) => {
      if (error) {
        if (callback) {
          return callback(error, null)
        }
        reject(error)
      } else if (!error && response.statusCode === 200) {
        const resp = JSON.parse(body.toString())
        if (callback) {
          return callback(null, resp)
        }
        resolve(resp)
      }
    })
  })
}