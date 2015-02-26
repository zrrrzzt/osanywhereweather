'use strict';

var crypto = require('crypto');

function osaHash(email, password) {
  var shasum = crypto.createHash('sha1').update(email);
  var e = '$p5k2$2710$' + shasum.digest('hex').toString().substring(0, 8);
  var res = crypto.pbkdf2Sync(password, e, 1e4, 32, 'sha256');
  var r = res.toString('base64').replace(/\+/g, '.');

  return e + '$' + r;
}

function createHash(opts, callback) {

  if (!opts) {
    return callback(new Error('Missing required input: options'), null);
  }

  if (!opts.email) {
    return callback(new Error('Missing required param: options.email'), null);
  }

  if (!opts.password) {
    return callback(new Error('Missing required param: options.password'), null);
  }

  if (!opts.challenge) {
    return callback(new Error('Missing required param: options.challenge'), null);
  }

  var hash = osaHash(opts.email, opts.password);
  var hmac = crypto.createHmac('sha1', hash).update(opts.challenge);
  var saltedHash = hmac.digest('hex');

  return callback(null, saltedHash);
}

module.exports = createHash;
