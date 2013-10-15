var Position = require('../models/position');

var BrowserGeoLocation = function(){

  // mix in events
  _.extend(this, Backbone.Events);

  this.enable = function(){
    this.watcherID = navigator.geolocation.watchPosition(
      function(position){
        this.trigger('position', position);
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
      {
        //enableHighAccuracy: true,
        //maximumAge: 1000, // in ms
        //timeout: 300000 //in ms
      }
    );
  }.bind(this);

  this.disable = function(){
    navigator.geolocation.clearWatch(this.watcherID);
    delete this.watcherID;
  }.bind(this);

  this.isEnabled = function(){
    return this.watcherID ? true : false;
  };
};

module.exports = BrowserGeoLocation;
