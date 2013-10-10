var Story = require('../collections/story');
var Track  = require('../collections/track');

var User = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function() {
    _.bindAll(this, 'save', 'updateLocation');
    this.set('@type', 'profile', { silent: true });
    this.on('change', this.save);

    this.profileKey = 'profile-' + this.get('uuid');

    if(localStorage[this.profileKey]) {
      this.set(JSON.parse(localStorage[this.profileKey]));
    }

    // initiate track and story
    this.story = new Story([], { url: this.get('uuid') });
    this.story.fetch();

    this.track = new Track([], { url: this.get('uuid') });
    this.track.fetch();

  },

  save: function() {
    localStorage[this.profileKey] = JSON.stringify(this.toJSON());
  },

  currentLocation: function() {
    return this.track.at(this.track.length - 1);
  },

  updateLocation: function(location) {
    var current = this.currentLocation();
    if(current &&
       current.get('lat') == location.get('lat') &&
       current.get('lng') == location.get('lng')) {
      return; // location didn't actually change.
    }
    this.track.add(location);
    this.trigger('location', this.currentLocation());
  }
});

module.exports = User;
