'use strict';

var crypto = require('crypto')
  , pbkdf2 = require('pbkdf2-sha256')
  ;

function OSAHash(email, password){
  var shasum = crypto.createHash('sha1').update(email)
    , e = "$p5k2$2710$" + shasum.digest('hex').toString().substring(0,8)
    , res = pbkdf2(password, e, 1e4, 32)
    , r = res.toString('base64').replace(/\+/g,".")
    , hash = e + "$" + r
    ;

  return hash;
}

function createHash(opts, callback){

  if(!opts){
    return callback(new Error('Missing required input: options'), null);
  }

  if(!opts.email){
    return callback(new Error('Missing required param: options.email'), null);
  }

  if(!opts.password){
    return callback(new Error('Missing required param: options.password'), null);
  }

  if(!opts.challenge){
    return callback(new Error('Missing required param: options.challenge'), null);
  }

  var hash = OSAHash(opts.email, opts.password)
    , hmac = crypto.createHmac('sha1', hash).update(opts.challenge)
    , saltedHash = hmac.digest('hex')
    ;

  return callback(null, saltedHash);
}

module.exports = createHash;