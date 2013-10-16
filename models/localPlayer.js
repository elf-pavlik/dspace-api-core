var Player = require('./player');
var BrowserGeoLocation = require('../channels/browserGeoLocation');
var uuid = require('node-uuid');

var LocalPlayer = Player.extend({

  initialize: function() {
    /*
     * set uuid
     * * use one saved in localStorage
     * * or generate new one and save to localStorage
     *
     */
    if(localStorage.uuid) {
      this.set("uuid", localStorage.uuid, {silent: true});
    } else {
      this.set("uuid", uuid(), {silent: true});
      localStorage.uuid = this.get('uuid');
    }

    // use browser geolocation
    this.geolocation = new BrowserGeoLocation();

    // super
    Player.prototype.initialize.call(this);
  }
});

module.exports = LocalPlayer;
