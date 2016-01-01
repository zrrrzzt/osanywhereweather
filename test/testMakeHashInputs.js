'use strict'

var tap = require('tap')
var createHash = require('../lib/makehash')

tap.test('requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  createHash(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.email to exist', function (test) {
  var options = {
    email: false
  }
  var expectedErrorMessage = 'Missing required param: options.email'
  createHash(options, function (error, data) {
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
  createHash(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires opts.challenge to exist', function (test) {
  var options = {
    email: true,
    password: true,
    challenge: false
  }
  var expectedErrorMessage = 'Missing required param: options.challenge'
  createHash(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
