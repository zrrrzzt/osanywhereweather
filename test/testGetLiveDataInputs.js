'use strict';

var assert = require('assert');
var getLiveData = require('../lib/getlivedata');

describe('getLiveData - inputs', function() {

  it('requires an opts object', function(done) {

    var opts = false;

    getLiveData(opts, function(err, data) {
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

  it('requires opts.stationId to exist', function(done) {

    var opts = {
      stationId: false
    };

    getLiveData(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.stationId/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires opts.sessionKey to exist', function(done) {

    var opts = {
      stationId: true,
      sessionKey: false
    };

    getLiveData(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.sessionKey/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});
