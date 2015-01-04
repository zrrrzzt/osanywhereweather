'use strict';

var request = require('request')
  , config = require('../config')
  , apiUrl = config.API_URL + '/' + config.API_VERSION
  ;


/**
 * Get live data from your weatherstation
 *
 * @param {object} options
 * @param {string} options.stationId
 * @param {string} options.sessionKey
 * @param {function} callback
 *
 * @returns {object}
 */
function getLiveData(options, callback){

  if(!options){
    return callback(new Error('Missing required input: options'), null);
  }

  if(!options.stationId){
    return callback(new Error('Missing required param: options.stationId'), null);
  }

  if(!options.sessionKey){
    return callback(new Error('Missing required param: options.sessionKey'), null);
  }

  var ts = new Date().getTime()
    , url = apiUrl + '/weather/live/'+ options.stationId + '?temperature_channel=1&humidity_channel=1&uv_channel=1&_=' + ts
    , headers = {Authorization: 'OSA ' + options.sessionKey}
    , reqOptions = {
      url : url,
      headers: headers
    }
    ;

  request(reqOptions, function(error, response, body){
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