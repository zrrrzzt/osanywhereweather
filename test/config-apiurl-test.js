'use strict'

var tap = require('tap')
var config = require('../config')
var testUrl = 'http://api.osanywhereweather.com'

tap.equal(config.API_URL, testUrl, 'Default API_URL is correct')
