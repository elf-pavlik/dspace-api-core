var Player = require('./player');

// represents people connecting through other devices
var RemotePlayer = Player.extend({

  initialize: function(attrs, options){
    // super
    Player.prototype.initialize.call(this, attrs, options);

    // cache initially
    this.cache();
  }
});

module.exports = RemotePlayer;
