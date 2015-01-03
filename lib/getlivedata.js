'use strict';

var request = require('request')
  , config = require('../config')
  , apiUrl = config.API_URL + '/' + config.API_VERSION
  ;

function getLiveData(opts, callback){

  if(!opts){
    return callback(new Error('Missing required input: options'), null);
  }

  if(!opts.stationId){
    return callback(new Error('Missing required param: options.stationId'), null);
  }

  if(!opts.sessionKey){
    return callback(new Error('Missing required param: options.sessionKey'), null);
  }

  var ts = new Date().getTime()
    , url = apiUrl + '/weather/live/'+ opts.stationId + '?temperature_channel=1&humidity_channel=1&uv_channel=1&_=' + ts
    , headers = {Authorization: 'OSA ' + opts.sessionKey}
    , options = {
      url : url,
      headers: headers
    }
    ;

  request(options, function(error, response, body){
    if(error){
      return callback(error, null);
    }

    if (!error && response.statusCode == 200) {
      var resp = JSON.parse(body.toString());

      return callback(null, resp);
    }

  })
}

module.exports = getLiveData;