var Player = require('./player');
var BrowserGeoLocation = require('../channels/browserGeoLocation');

var LocalPlayer = Player.extend({

  initialize: function(attrs, options) {

    _.bindAll(this, 'publishPosition');

    this.settings = options.settings;

    // use browser geolocation
    this.geolocation = new BrowserGeoLocation(this.settings);

    // super
    Player.prototype.initialize.call(this, attrs, options);

    // channel to publish changes to position
    this.positionChannel = options.nexus.getChannel(this.get('channels').track);
    this.on('change:position', this.publishPosition);
  },

  publishPosition: function(position){
    // 'sign' before publishing
    position.player = { uuid: this.get('uuid') };
    this.positionChannel.publish(position);
  }

});

module.exports = LocalPlayer;
