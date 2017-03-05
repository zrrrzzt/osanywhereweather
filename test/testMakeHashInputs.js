'use strict'

const tap = require('tap')
const createHash = require('../lib/makehash')

tap.throws(
  function () {
    createHash()
  },
  {message: 'Missing required input: options'},
  'requires an options object'
)

tap.throws(
  function () {
    createHash({
      email: false
    })
  },
  {message: 'Missing required param: options.email'},
  'requires options.email to exist'
)

tap.throws(
  function () {
    createHash({
      email: true,
      password: false
    })
  },
  {message: 'Missing required param: options.password'},
  'requires options.password to exist'
)

tap.throws(
  function () {
    createHash({
      email: true,
      password: true,
      challenge: false
    })
  },
  {message: 'Missing required param: options.challenge'},
  'requires options.challenge to exist'
)
