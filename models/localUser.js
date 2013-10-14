var User = require('./user');
var uuid = require('node-uuid');

var LocalUser = User.extend({

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

    User.prototype.initialize.call(this);
  }
});

module.exports = LocalUser;
