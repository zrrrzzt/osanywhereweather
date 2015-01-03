'use strict';

var login = require('./lib/login')
  , getLiveData = require('./lib/getlivedata')
  ;

module.exports.login = login;

module.exports.getLiveData = getLiveData;