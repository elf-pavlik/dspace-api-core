var Player = require('./player');
var Track = require('../collections/track');

// represents people connecting through other devices
var RemotePlayer = Player.extend({

  initialize: function(attrs, options) {

    this.nexus = options.nexus;

    this.track = new Track([], {
      feed: this.nexus.getFeed(this.get('track').feed),
      channel: this.nexus.getChannel(this.get('track').channel)
    });
    this.track.on('loaded', function(){
      this.trigger('change:position', this.currentPosition());
    }.bind(this));

    // super
    Player.prototype.initialize.call(this, attrs, options);
  }

});

module.exports = RemotePlayer;
