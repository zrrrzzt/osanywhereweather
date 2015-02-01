# osanywhereweather [![Build Status](https://travis-ci.org/zrrrzzt/osanywhereweather.svg?branch=master)](https://travis-ci.org/zrrrzzt/osanywhereweather)

Node module for getting your weatherdata from [osanywhereweather](http://www.osanywhereweather.com/)

This version only supports viewing the live data from your weatherstation.

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

The module exposes two methods: login and getLiveData.

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
```

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

## Disclaimer

This is not an official API from Oregon Scientific.