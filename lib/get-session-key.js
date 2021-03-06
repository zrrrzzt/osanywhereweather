'use strict'

/**
 *
 * @param {object} options - Options object
 * @param {string} options.email - email for the osanywhereweather account
 * @param {string} options.hash - hash from createHash
 * @param {string} options.challenge - challenge from getChallenge
 *
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {string} - Sessionkey from server
 */

const request = require('request')
const config = require('../config')
const createHash = require('./makehash')
const apiUrl = `${config.API_URL}/${config.API_VERSION}`
const pkg = require('../package.json')
const userAgent = pkg.name + ' v' + pkg.version

module.exports = (options, callback) => {
  options.hash = createHash(options)
  return new Promise((resolve, reject) => {
    const url = apiUrl + '/account/authorization/' + options.email
    const payload = 'password=' + options.hash + '&challenge=' + options.challenge
    const headers = {
      'Referer': 'http://www.osanywhereweather.com/',
      'User-Agent': userAgent
    }
    const reqOpts = {
      headers: headers,
      body: payload
    }

    request.post(url, reqOpts, (error, response, body) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      }

      if (!error && response.statusCode === 201) {
        const resp = JSON.parse(body.toString())
        const result = Object.assign(options, { sessionKey: resp.skey })
        return callback ? callback(null, result) : resolve(result)
      } else {
        const error = new Error(body.toString())
        return callback ? callback(error, null) : reject(error)
      }
    })
  })
}
