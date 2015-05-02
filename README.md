# osanywhereweather [![Build Status](https://travis-ci.org/zrrrzzt/osanywhereweather.svg?branch=master)](https://travis-ci.org/zrrrzzt/osanywhereweather)

Node module for getting your weatherdata from [osanywhereweather](http://www.osanywhereweather.com/)

This version supports viewing the live data from your weatherstation as well as getting historic data.

## Installation

From npm:

```
$ npm install osanywhereweather
```

From GitHub:

```
$ git@github.com:zrrrzzt/osanywhereweather.git
```

cd into directory

```
$ cd osanywhereweather
```

install dependencies

```
$npm install
```

## Usage

The module exposes three methods: login, getLiveData and getHistoryData.

### login
Use this to retrieve a sessionKey. Pass in an options object.

**email** the email for your osanywhereweather account

**password** the password for your osanywhereweather account

This method returns a data object.

### getLiveData
Use this to retrieve live data from your weatherstation. Pass in an options object.

**sessionKey** the sessionKey returned from login

**stationId** the Id for the weatherstation you will get data from. It's the mac address for the station.

This method returns your weatherdata as json.

```
'use strict';

var osa = require('osanywhereweather');
var opts = {
  'stationId': 'your-station-id',
  'email': 'your-email@example.com',
  'password': 'YourTopSecretPassword'
};

osa.login(opts, function(error, data){
  if(error){
    console.error(error);
  } else {
    osa.getLiveData({stationId:opts.stationId, sessionKey:data.sessionKey}, function(err, json){
      if(err){
        console.error(err);
      } else {
        console.log(json);
      }
    });
  }
});
````

Example of returned data:

```
{ status: 200,
  process_time: 108.85095596313477,
  live:
   { wind_speed: 3.4,
     rainfall: '--',
     temperature: 0.5,
     low_battery: {},
     wind_direction: 'E',
     uv: '--',
     wind_angle: 90,
     forecast: 1,
     pressure: 952,
     local_time: '2015-01-03 12:24:23.288075',
     sealevel_pressure: 996.352,
     humidity: 61,
     wind_gust: 3.2 }
}
```

## getHistoryData
Use this to retrieve historic data from your weatherstation. Pass in an options object.

**sessionKey** the sessionKey returned from login

**stationId** the Id for the weatherstation you will get data from. It's the mac address for the station.

**type** type of historic data like temperature, humidity, pressure, uv, wind and rain

**channel** channel number

**duration** duration of history like @day, @week and @month

This method returns your weatherdata as json.

```
'use strict';

var osa = require('osanywhereweather');
var opts = {
  'stationId': 'your-station-id',
  'email': 'your-email@example.com',
  'password': 'YourTopSecretPassword',
  'type': 'temperature',
  'channel': '1',
  'duration': '@week'
};

osa.login(opts, function(error, data){
  if(error){
    console.error(error);
  } else {
    opts.sessionKey = data.sessionKey;
    osa.getHistoryData(opts, function(err, json){
      if(err){
        console.error(err);
      } else {
        console.log(json);
      }
    });
  }
});
```

Example of returned data:

```
{ status: 200,
  live: '--',
  points: 
   [ { temperature: 6.84, event_time: '2015-04-25 20:00:00' },
     { temperature: 5.9, event_time: '2015-04-25 21:00:00' },
     { temperature: 4.39, event_time: '2015-04-25 22:00:00' },
     { temperature: 1.8, event_time: '2015-04-25 23:00:00' },
     { temperature: -0.6, event_time: '2015-04-26 00:00:00' },
     { temperature: -0.92, event_time: '2015-04-26 01:00:00' },
     { temperature: -0.88, event_time: '2015-04-26 02:00:00' },
     { temperature: -1.82, event_time: '2015-04-26 03:00:00' },
     { temperature: -1.69, event_time: '2015-04-26 04:00:00' },
     { temperature: -2.26, event_time: '2015-04-26 05:00:00' },
     { temperature: -1.89, event_time: '2015-04-26 06:00:00' },
     { temperature: 0.96, event_time: '2015-04-26 07:00:00' },
     { temperature: 2.56, event_time: '2015-04-26 08:00:00' },
     { temperature: 9.9, event_time: '2015-04-26 09:00:00' },
     { temperature: 12.48, event_time: '2015-04-26 10:00:00' },
     { temperature: 13.2, event_time: '2015-04-26 11:00:00' },
     { temperature: 11.64, event_time: '2015-04-26 12:00:00' },
     { temperature: 10.25, event_time: '2015-04-26 13:00:00' },
     { temperature: 13.17, event_time: '2015-04-26 14:00:00' },
     { temperature: 11.21, event_time: '2015-04-26 15:00:00' },
     { temperature: 11.66, event_time: '2015-04-26 16:00:00' },
     { temperature: 11.2, event_time: '2015-04-26 17:00:00' },
     { temperature: 10.5, event_time: '2015-04-26 18:00:00' },
     { temperature: 8.16, event_time: '2015-04-26 19:00:00' },
     { temperature: 4.38, event_time: '2015-04-26 20:00:00' },
     { temperature: 0.44, event_time: '2015-04-26 21:00:00' },
     { temperature: -1.54, event_time: '2015-04-26 22:00:00' },
     { temperature: -2.57, event_time: '2015-04-26 23:00:00' },
     { temperature: -3.25, event_time: '2015-04-27 00:00:00' } 
    ],
  process_time: 107.086181640625,
  min: -3.2499999999999996,
  cached: false,
  max: 13.200000000000001,
  low_battery: false
}
```

## Disclaimer

This is not an official API from Oregon Scientific.