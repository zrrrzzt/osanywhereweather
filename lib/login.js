'use strict'

var request = require('request')
var config = require('../config')
var createHash = require('./makehash')
var apiUrl = config.API_URL + '/' + config.API_VERSION

/**
 * Get challenge from server
 *
 * @param {object} options - Options object
 * @param {string} options.email - email for the osanywhereweather account
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {string} - The challenge from server
 */
function getChallenge (options, callback) {
  var ts = new Date().getTime()
  var url = apiUrl + '/account/challenge/' + options.email + '?_=' + ts

  request(url, function (error, response, body) {
    if (error) {
      return callback(error, null)
    }
    if (!error && response.statusCode === 200) {
      var resp = JSON.parse(body.toString())
      return callback(null, resp.challenge)
    }
  })
}

/**
 *
 * @param {object} opts - Options object
 * @param {string} opts.email - email for the osanywhereweather account
 * @param {string} opts.hash - hash from createHash
 * @param {string} opts.challenge - challenge from getChallenge
 *
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {string} - Sessionkey from server
 */
function getSessionKey (opts, callback) {
  var url = apiUrl + '/account/authorization/' + opts.email
  var payload = 'password=' + opts.hash + '&challenge=' + opts.challenge
  var headers = {
    'Referer': 'http://www.osanywhereweather.com/',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) ' +
      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36'
  }
  var reqOpts = {
    headers: headers,
    body: payload
  }

  request.post(url, reqOpts, function (error, response, body) {
    if (error) {
      return callback(error, null)
    }

    if (!error && response.statusCode === 201) {
      var resp = JSON.parse(body.toString())

      return callback(null, resp.skey)
    }
  })
}

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
function getCredentials (options, callback) {
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

module.exports = getCredentials
