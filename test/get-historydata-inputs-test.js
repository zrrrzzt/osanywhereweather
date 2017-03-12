'use strict'

const tap = require('tap')
const getHistoryData = require('../lib/get-historydata')

tap.test('requires an options object', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.stationId to exist', function (test) {
  const options = {
    stationId: false
  }
  const expectedErrorMessage = 'Missing required param: options.stationId'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.sessionKey to exist', function (test) {
  const options = {
    stationId: true,
    sessionKey: false
  }
  const expectedErrorMessage = 'Missing required param: options.sessionKey'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.type to exist', function (test) {
  const options = {
    stationId: true,
    sessionKey: true,
    type: false
  }
  const expectedErrorMessage = 'Missing required param: options.type'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.channel to exist', function (test) {
  const options = {
    stationId: true,
    sessionKey: true,
    type: true,
    channel: false
  }
  const expectedErrorMessage = 'Missing required param: options.channel'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.duration to exist', function (test) {
  const options = {
    stationId: true,
    sessionKey: true,
    type: true,
    channel: true,
    duration: false
  }
  const expectedErrorMessage = 'Missing required param: options.duration'
  getHistoryData(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
