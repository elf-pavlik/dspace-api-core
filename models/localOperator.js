var Operator = require('./operator');
var BrowserGeoLocation = require('../channels/browserGeoLocation');
var uuid = require('node-uuid');

var LocalOperator = Operator.extend({

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
    Operator.prototype.initialize.call(this);
  }
});

module.exports = LocalOperator;
