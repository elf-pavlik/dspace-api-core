var Player = require('./player');

// represents people connecting through other devices
var RemotePlayer = Player.extend({

  // FIXME what if no uuid?
  initialize: function(attrs, options) {

    if(options && options.geolocation){
      this.geolocation = options.geolocation;
    }

    // super
    Player.prototype.initialize.call(this, attrs, options);
  }

});

module.exports = RemotePlayer;
