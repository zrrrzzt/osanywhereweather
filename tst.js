'use strict'

const osa = require('./index')

const options = {
  'stationId': '0004a368e4bc',
  'email': 'jornsteinm@gmail.com',
  'password': 'Heddal16',
  'type': 'temperature',
  'channel': '1',
  'fromdate': '2015-04-01',
  'todate': '2015-04-30'
}

osa.export(options)
  .then(data => console.log(data))
  .catch(error => console.error(error))

/*
const options = {
  'stationId': '0004a368e4bc',
  'email': 'jornsteinm@gmail.com',
  'password': 'Heddal16',
  'type': 'temperature',
  'channel': '1',
  'duration': '@week'
}

osa.history(options)
  .then(json => console.log(json))
  .catch(error => console.error(error))

const options = {
  'stationId': '0004a368e4bc',
  'email': 'jornsteinm@gmail.com',
  'password': 'Heddal16'
}

osa.live(options)
  .then(json => console.log(json))
  .catch(error => console.error(error))
*/
