'use strict';

var login = require('./lib/login');
var getLiveData = require('./lib/getlivedata');
var getHistoryData = require('./lib/gethistorydata');

module.exports.login = login;

module.exports.getLiveData = getLiveData;

module.exports.getHistoryData = getHistoryData;
