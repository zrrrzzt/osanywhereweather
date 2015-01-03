#osanywhereweather [![Build Status](https://travis-ci.org/zrrrzzt/osanywhereweather.svg?branch=master)](https://travis-ci.org/zrrrzzt/osanywhereweather)

Node module for getting your weatherdata from [osanywhereweather](http://www.osanywhereweather.com/)

##Installation

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

##Usage

```
'use strict';

var osa = require('osanywhereweather')
  , opts = {
      "stationId": "your-station-id",
      "email": "your-email@example.com",
      "password": "YourTopSecretPassword"
    }
  ;

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
    })
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

##Disclaimer

This is not an official API from Oregon Scientific.