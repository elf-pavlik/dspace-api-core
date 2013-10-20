var Player = require('./player');

// represents people connecting through other devices
var RemotePlayer = Player.extend({

  // FIXME what if no uuid?
  initialize: function(attrs, options) {

    //FIXME don't expect global dspace
    this.geolocation = dspace.getGeolocationChannel(this.get('channels').track);

    // super
    Player.prototype.initialize.call(this, attrs, options);
  }

});

module.exports = RemotePlayer;
