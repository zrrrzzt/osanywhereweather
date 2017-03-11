'use strict'

const tap = require('tap')
const getLiveData = require('../lib/get-livedata')

tap.test('requires an options object', (test) => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  getLiveData(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires opts.stationId to exist', (test) => {
  const options = {
    stationId: false
  }
  const expectedErrorMessage = 'Missing required param: options.stationId'
  getLiveData(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires opts.sessionKey to exist', (test) => {
  const options = {
    stationId: true,
    sessionKey: false
  }
  const expectedErrorMessage = 'Missing required param: options.sessionKey'
  getLiveData(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
