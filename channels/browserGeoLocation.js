var Position = require('../models/position');

var BrowserGeoLocation = function(settings){

  this.settings = settings;

  this.sub = function(callback){
    this.callback = callback;
    this.watcherID = navigator.geolocation.watchPosition(
      function(position){
        //FIXME switch to http://lodash.com/docs#pick ?
        var copy = { coords: {} };
        copy.timestamp = position.timestamp;
        copy.coords.latitude = position.coords.latitude;
        copy.coords.longitude = position.coords.longitude;
        copy.coords.accuracy = position.coords.accuracy;
        this.callback(copy);
      }.bind(this),
      function(error){
        switch(error.code) {
          // PERMISSION_DENIED
          case 1:
          break;
          // POSITION_UNAVAILABLE
          case 2:
          break;
          // TIMEOUT
          case 3:
          break;
          // Unkown Error
          default:
          break;
        }

        // make sure watcher is disabled
        // FIXME needed?
        // this.disable();

      }.bind(this),
      this.settings
    );
    console.log('BrowserGeoLocation.enable()');
  }.bind(this);

  this.bye = function(){
    navigator.geolocation.clearWatch(this.watcherID);
    delete this.callback;
    delete this.watcherID;
    console.log('BrowserGeoLocation.disable()');
  }.bind(this);


  this.isEnabled = function(){
    return this.watcherID ? true : false;
  };
};

module.exports = BrowserGeoLocation;
