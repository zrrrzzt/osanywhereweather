'use strict'

const crypto = require('crypto')

function osaHash (email, password) {
  const shasum = crypto.createHash('sha1').update(email)
  const e = '$p5k2$2710$' + shasum.digest('hex').toString().substring(0, 8)
  const res = crypto.pbkdf2Sync(password, e, 1e4, 32, 'sha256')
  const r = res.toString('base64').replace(/\+/g, '.')

  return e + '$' + r
}

module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options')
  }

  if (!options.email) {
    throw new Error('Missing required param: options.email')
  }

  if (!options.password) {
    throw new Error('Missing required param: options.password')
  }

  if (!options.challenge) {
    throw new Error('Missing required param: options.challenge')
  }

  const hash = osaHash(options.email, options.password)
  const hmac = crypto.createHmac('sha1', hash).update(options.challenge)

  return hmac.digest('hex')
}
