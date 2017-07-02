'use strict'

const getChallenge = require('./get-challenge')
const getSessionKey = require('./get-session-key')

/**
 * Get credentials from server
 *
 * @param {object} options Options
 * @param {string} options.email - email for your osanywhereweather account
 * @param {string} options.password - password for your osanywhereweather account
 * @param {callback} callback - Callback for handling the response - Optional
 *
 * @returns {Promise} or {object}
 */

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      const error = new Error('Missing required input: options')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.email) {
      const error = new Error('Missing required param: options.email')
      return callback ? callback(error, null) : reject(error)
    }

    if (!options.password) {
      const error = new Error('Missing required param: options.password')
      return callback ? callback(error, null) : reject(error)
    }

    getChallenge(options)
      .then(getSessionKey)
      .then(token => {
        return callback ? callback(null, token) : resolve(token)
      }).catch(error => {
        return callback ? callback(error, null) : reject(error)
      })
  })
}
