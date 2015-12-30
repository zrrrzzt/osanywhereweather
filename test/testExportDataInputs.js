'use strict'

var tap = require('tap')
var exportData = require('../lib/exportdata')

tap.test('requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  exportData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.stationId to exist', function (test) {
  var options = {
    stationId: false
  }
  var expectedErrorMessage = 'Missing required param: options.stationId'
  exportData(options, function (error, data) {
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
  exportData(options, function (error, data) {
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
  exportData(options, function (error, data) {
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
  exportData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.fromdate to exist', function (test) {
  var options = {
    stationId: true,
    sessionKey: true,
    type: true,
    channel: true,
    fromdate: false
  }
  var expectedErrorMessage = 'Missing required param: options.fromdate'
  exportData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.todate to exist', function (test) {
  var options = {
    stationId: true,
    sessionKey: true,
    type: true,
    channel: true,
    fromdate: true,
    todate: false
  }
  var expectedErrorMessage = 'Missing required param: options.todate'
  exportData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
