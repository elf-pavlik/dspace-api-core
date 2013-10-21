var Player = require('./player');
var Track = require('../collections/track');

// represents people connecting through other devices
var RemotePlayer = Player.extend({

  initialize: function(attrs, options) {

    this.nexus = options.nexus;

    this.track = new Track([], {
      feed: this.nexus.getFeed(this.get('feeds').track),
      channel: this.nexus.getGeolocationChannel(this.get('channels').track)
    });

    // super
    Player.prototype.initialize.call(this, attrs, options);
  }

});

module.exports = RemotePlayer;
