'use strict'

var tap = require('tap')
var testVersion = '4'
process.env.API_VERSION = testVersion
var config = require('../config')

tap.equal(config.API_VERSION, testVersion, 'It supports API_VERSION through env')
