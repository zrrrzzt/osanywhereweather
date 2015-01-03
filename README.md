#osanywhereweather

Node module for getting your weatherdata from [osanywhereweather](http://www.osanywhereweather.com/)

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

##Disclaimer

This is not an official API from Oregon Scientific.