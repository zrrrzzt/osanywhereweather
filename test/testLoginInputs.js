'use strict'

var tap = require('tap')
var login = require('../lib/login')

tap.test('requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  login(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.email to exist', function (test) {
  var options = {
    email: false
  }
  var expectedErrorMessage = 'Missing required param: options.email'
  login(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.password to exist', function (test) {
  var options = {
    email: true,
    password: false
  }
  var expectedErrorMessage = 'Missing required param: options.password'
  login(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
