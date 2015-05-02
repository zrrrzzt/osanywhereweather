'use strict';

var assert = require('assert');
var getHistoryData = require('../lib/gethistorydata');

describe('getHistoryData - inputs', function() {

  it('requires an options object', function(done) {

    var options = false;

    getHistoryData(options, function(err, data) {
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

  it('requires options.stationId to exist', function(done) {

    var options = {
      stationId: false
    };

    getHistoryData(options, function(err, data) {
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

  it('requires options.sessionKey to exist', function(done) {

    var options = {
      stationId: true,
      sessionKey: false
    };

    getHistoryData(options, function(err, data) {
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

  it('requires options.type to exist', function(done) {

    var options = {
      stationId: true,
      sessionKey: true,
      type: false
    };

    getHistoryData(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.type/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.channel to exist', function(done) {

    var options = {
      stationId: true,
      sessionKey: true,
      type: true,
      channel: false
    };

    getHistoryData(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.channel/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.duration to exist', function(done) {

    var options = {
      stationId: true,
      sessionKey: true,
      type: true,
      channel: true,
      duration: false
    };

    getHistoryData(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.duration/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });
});
