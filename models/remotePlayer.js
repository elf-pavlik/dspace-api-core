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

    // super
    Player.prototype.initialize.call(this, attrs, options);

    this.track.on('loaded', function(){
      var position = this.currentPosition();
      if(position){
        this.trigger('change:position', position);
      }
    }.bind(this));

  }

});

module.exports = RemotePlayer;
