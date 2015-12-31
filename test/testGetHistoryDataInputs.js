'use strict'

var tap = require('tap')
var getHistoryData = require('../lib/gethistorydata')

tap.test('requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.stationId to exist', function (test) {
  var options = {
    stationId: false
  }
  var expectedErrorMessage = 'Missing required param: options.stationId'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.sessionKey to exist', function (test) {
  var options = {
    stationId: true,
    sessionKey: false
  }
  var expectedErrorMessage = 'Missing required param: options.sessionKey'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.type to exist', function (test) {
  var options = {
    stationId: true,
    sessionKey: true,
    type: false
  }
  var expectedErrorMessage = 'Missing required param: options.type'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.channel to exist', function (test) {
  var options = {
    stationId: true,
    sessionKey: true,
    type: true,
    channel: false
  }
  var expectedErrorMessage = 'Missing required param: options.channel'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.duration to exist', function (test) {
  var options = {
    stationId: true,
    sessionKey: true,
    type: true,
    channel: true,
    duration: false
  }
  var expectedErrorMessage = 'Missing required param: options.duration'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
