'use strict'

/**
 * Get challenge from server
 *
 * @param {object} options - Options object
 * @param {string} options.email - email for the osanywhereweather account
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {Promise} or {object} - Options expanded with the challenge from server
 */

const request = require('request')
const config = require('../config')
const apiUrl = `${config.API_URL}/${config.API_VERSION}`

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    const ts = new Date().getTime()
    const url = `${apiUrl}/account/challenge/${options.email}?_=${ts}`

    request(url, (error, response, body) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      }
      if (!error && response.statusCode === 200) {
        const resp = JSON.parse(body.toString())
        const result = Object.assign(options, {challenge: resp.challenge})
        return callback ? callback(null, result) : resolve(result)
      } else {
        const error = new Error(`Unexpected statusCode: ${response.statusCode}`)
        return callback ? callback(error, null) : reject(error)
      }
    })
  })
}
