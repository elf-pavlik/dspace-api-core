var Player = require('./player');
var Track = require('../collections/track');
var BrowserGeoLocation = require('../channels/browserGeoLocation');

var LocalPlayer = Player.extend({

  initialize: function(attrs, options) {

    _.bindAll(this, 'publishPosition');

    this.settings = options.settings;
    this.nexus = options.nexus;

    // use browser geolocation as channels.in
    this.track = new Track([], {
      feed: this.nexus.getFeed(this.get('track').feed),
      channel: new BrowserGeoLocation(this.settings.geolocation)
    });

    // super
    Player.prototype.initialize.call(this, attrs, options);

    // channel to publish changes to position
    this.positionChannel = this.nexus.getChannel(this.get('track').channel);
    this.on('change:position', this.publishPosition);
  },

  publishPosition: function(position){
    // 'sign' before publishing
    position.player = { uuid: this.get('uuid') };
    this.positionChannel.pub(position);
  }

});

module.exports = LocalPlayer;
