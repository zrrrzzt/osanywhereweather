'use strict'

const tap = require('tap')
const getCredentials = require('../lib/get-credentials')

tap.test('requires an options object', (test) => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  getCredentials(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.email to exist', (test) => {
  const options = {
    email: false
  }
  const expectedErrorMessage = 'Missing required param: options.email'
  getCredentials(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.password to exist', (test) => {
  const options = {
    email: true,
    password: false
  }
  const expectedErrorMessage = 'Missing required param: options.password'
  getCredentials(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
