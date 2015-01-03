'use strict';

var request = require('request')
  , createHash = require('./makehash')
  ;

function getChallenge(email, callback){
  var ts = new Date().getTime()
    , url = 'http://www.osanywhereweather.com/4/account/challenge/' + email + '?_=' + ts
    ;

  request(url, function(error, response, body){
    if(error) {
      return callback(error, null);
    }
    if (!error && response.statusCode == 200) {
      var resp = JSON.parse(body.toString());
      return callback(null, resp.challenge);
    }
  });
}

function getSessionKey(opts, callback){
  var url = 'http://api.osanywhereweather.com/4/account/authorization/' + opts.email
    , payload = 'password=' + opts.hash + '&challenge=' + opts.challenge
    , headers = {
      'Referer': 'http://www.osanywhereweather.com/',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36'
    }
    , opts = {
      headers: headers,
      body: payload
    }
    ;

  request.post(url, opts, function(error, response, body){

    if(error) {
      return callback(error, null);
    }

    if (!error && response.statusCode == 201) {
      var resp = JSON.parse(body.toString());

      return callback(null, resp.skey);
    }

  })
}


/**
 * Get credentials from server
 *
 * @param {object} opts Options
 * @param {function} callback Callback
 *
 * @returns {object}
 */
function getCredentials(opts, callback){

  if(!opts){
    return callback(new Error('Missing required input: options'), null);
  }

  if(!opts.email){
    return callback(new Error('Missing required param: options.email'), null);
  }

  if(!opts.password){
    return callback(new Error('Missing required param: options.password'), null);
  }

  getChallenge(opts.email, function(err, challenge){
    if(err){
      return callback(err, null);
    } else {
      createHash({email:opts.email, password:opts.password, challenge:challenge}, function(error, hash){
        if(error){
          return callback(error, null);
        } else {
          getSessionKey({email:opts.email, hash:hash, challenge:challenge}, function(e, sessionKey){
            if(e){
              return callback(e, null);
            } else {
              return callback(null, {challenge:challenge, hash:hash, sessionKey:sessionKey});
            }
          });
        }
      })
    }
  });

}

module.exports = getCredentials;