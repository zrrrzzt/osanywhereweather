'use strict'

var tap = require('tap')
var getLiveData = require('../lib/getlivedata')

tap.test('requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  getLiveData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires opts.stationId to exist', function (test) {
  var options = {
    stationId: false
  }
  var expectedErrorMessage = 'Missing required param: options.stationId'
  getLiveData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires opts.sessionKey to exist', function (test) {
  var options = {
    stationId: true,
    sessionKey: false
  }
  var expectedErrorMessage = 'Missing required param: options.sessionKey'
  getLiveData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
