'use strict';

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

}

module.exports = getCredentials;