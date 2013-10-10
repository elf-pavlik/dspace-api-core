var User = require('./user');
var Tracker = require('./tracker');
var uuid = require('node-uuid');

var LocalUser = User.extend({

  initialize: function() {
    if(localStorage.uuid) {
      this.set("uuid", localStorage.uuid, {silent: true});
    } else {
      this.set("uuid", uuid(), {silent: true});
      localStorage.uuid = this.get('uuid');
    }

    User.prototype.initialize.call(this);

    this.tracker = new Tracker(_.extend({ user: this }, this.get('tracker')));
    this.unset('tracker');
    this.on('change', this.tracker.profile);
    this.track.on('add', this.tracker.location);
    this.story.on('add', this.tracker.capture);
  }
});

module.exports = LocalUser;
