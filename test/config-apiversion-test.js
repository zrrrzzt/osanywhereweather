'use strict'

var tap = require('tap')
var config = require('../config')
var testVersion = '4'

tap.equal(config.API_VERSION, testVersion, 'Default API_VERSION is correct')
