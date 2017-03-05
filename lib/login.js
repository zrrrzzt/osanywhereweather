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

  getChallenge({email: options.email}, function (err, challenge) {
    if (err) {
      return callback(err, null)
    } else {
      var createHashOptions = {
        email: options.email,
        password: options.password,
        challenge: challenge
      }

      createHash(createHashOptions, function (error, hash) {
        if (error) {
          return callback(error, null)
        } else {
          var sessionKeyOptions = {
            email: options.email,
            hash: hash,
            challenge: challenge
          }

          getSessionKey(sessionKeyOptions, function (e, sessionKey) {
            if (e) {
              return callback(e, null)
            } else {
              return callback(null, {challenge: challenge, hash: hash, sessionKey: sessionKey})
            }
          })
        }
      })
    }
  })
}
