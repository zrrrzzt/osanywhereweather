'use strict';

var assert = require('assert');
var exportData = require('../lib/exportdata');

describe('exportData - inputs', function() {

  it('requires an options object', function(done) {

    var options = false;

    exportData(options, function(err, data) {
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

    exportData(options, function(err, data) {
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

    exportData(options, function(err, data) {
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

    exportData(options, function(err, data) {
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

    exportData(options, function(err, data) {
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

  it('requires options.fromdate to exist', function(done) {

    var options = {
      stationId: true,
      sessionKey: true,
      type: true,
      channel: true,
      fromdate: false
    };

    exportData(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.fromdate/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.todate to exist', function(done) {

    var options = {
      stationId: true,
      sessionKey: true,
      type: true,
      channel: true,
      fromdate: true,
      todate: false
    };

    exportData(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: options.todate/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });
});
