'use strict'

const getChallenge = require('./get-challenge')
const getSessionKey = require('./get-session-key')

/**
 * Get credentials from server
 *
 * @param {object} options Options
 * @param {string} options.email - email for your osanywhereweather account
 * @param {string} options.password - password for your osanywhereweather account
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {object}
 */

module.exports = (options, callback) => {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.email) {
    return callback(new Error('Missing required param: options.email'), null)
  }

  if (!options.password) {
    return callback(new Error('Missing required param: options.password'), null)
  }

  getChallenge(options, (error, result) => {
    if (error) {
      return callback(error, null)
    } else {
      getSessionKey(result, (err, token) => {
        if (err) {
          return callback(err, null)
        } else {
          return callback(null, token)
        }
      })
    }
  })
}
