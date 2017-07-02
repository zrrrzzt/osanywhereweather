'use strict'

const tap = require('tap')
const testUrl = 'iamok'
process.env.API_URL = testUrl
const config = require('../config')

tap.equal(config.API_URL, testUrl, 'It supports API_URL through env')
