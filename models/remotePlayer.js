var Player = require('./player');

// represents people connecting through other devices
var RemotePlayer = Player.extend({

  initialize: function(attrs, options) {

    // FIXME what if no uuid?

    this.geolocation = options.nexus.getGeolocationChannel(this.get('channels').track);

    // super
    Player.prototype.initialize.call(this, attrs, options);
  }

});

module.exports = RemotePlayer;
