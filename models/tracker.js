// FIXME: refoctor + User -> Operator
var Tracker = function(options) {
  _.bindAll(this, 'location', 'capture', 'profile');

  if(! options.url) {
    throw new TypeError("options.url is NOT optional (haha!)");
  }
  if(! options.prefix) {
    throw new TypeError("options.prefix is NOT optional (haha!)");
  }
  this.faye = new Faye.Client(options.url);
  this.user = options.user;

  this.channels = {
    profile: options.prefix+ 'profile/' + this.user.get('uuid'),
    track: options.prefix + 'track/' + this.user.get('uuid'),
    story: options.prefix + 'story/' + this.user.get('uuid')
  };

};

// FIXME: move to appropriate models/collections
Tracker.prototype = {

  location: function(location) {
    var data = location.toJSON();
    data.user = this.user.get('uuid');
    data["@type"] = "location";
    console.log('TRACK location', data);
    this.faye.publish(this.channels.track, data);
  },

  // capture - an instance Backbone model Capture
  capture: function(capture) {
    var data = capture.toJSON();
    data.user = this.user.get('uuid');
    data["@type"] = "capture";
    console.log('TRACK capture', data);
    this.faye.publish(this.channels.story, data);
  },

  // user - an instance Backbone model User
  profile: function(user) {
    var data = user.toJSON();
    data["@type"] = "profile";
    console.log('TRACK profile', data);
    this.faye.publish(this.channels.profile, data);
  }
};

module.exports = Tracker;
