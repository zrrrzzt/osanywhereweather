'use strict'

var tap = require('tap')
var testUrl = 'iamok'
process.env.API_URL = testUrl
var config = require('../config')

tap.equal(config.API_URL, testUrl, 'It supports API_URL thorugh env')
