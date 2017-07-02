'use strict'

const getCredentials = require('./lib/get-credentials')
const getLiveData = require('./lib/get-livedata')
const getHistoryData = require('./lib/get-historydata')
const exportData = require('./lib/export-data')

module.exports.live = (options, callback) => {
  return new Promise((resolve, reject) => {
    getCredentials(options)
      .then(getLiveData)
      .then(json => callback ? callback(null, json) : resolve(json))
      .catch(error => callback ? callback(error, null) : reject(error))
  })
}

module.exports.history = (options, callback) => {
  return new Promise((resolve, reject) => {
    getCredentials(options)
      .then(getHistoryData)
      .then(json => callback ? callback(null, json) : resolve(json))
      .catch(error => callback ? callback(error, null) : reject(error))
  })
}

module.exports.export = (options, callback) => {
  return new Promise((resolve, reject) => {
    getCredentials(options)
      .then(exportData)
      .then(data => callback ? callback(null, data) : resolve(data))
      .catch(error => callback ? callback(error, null) : reject(error))
  })
}
