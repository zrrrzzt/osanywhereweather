'use strict'

const getChallenge = require('./get-challenge')
const getSessionKey = require('./get-session-key')
const createHash = require('./makehash')

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

  getChallenge({email: options.email}, (error, challenge) => {
    if (error) {
      return callback(error, null)
    } else {
      options.challenge = challenge

      options.hash = createHash(options)

      getSessionKey(options, (err, sessionKey) => {
        if (err) {
          return callback(err, null)
        } else {
          options.sessionKey = sessionKey
          return callback(null, options)
        }
      })
    }
  })
}
