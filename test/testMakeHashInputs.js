'use strict';

var assert = require('assert');
var createHash = require('../lib/makehash');

describe('createHash - inputs', function() {

  it('requires an opts object', function(done) {

    var opts = false;

    createHash(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires opts.email to exist', function(done) {

    var opts = {
      email: false
    };

    createHash(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.email/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires opts.password to exist', function(done) {

    var opts = {
      email: true,
      password: false
    };

    createHash(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.password/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires opts.challenge to exist', function(done) {

    var opts = {
      email: true,
      password: true,
      challenge: false
    };

    createHash(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.challenge/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});
