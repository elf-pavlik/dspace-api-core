var Track = require('../collections/track');
var Story = require('../collections/story');

var Player = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function(attrs, options){
    _.bindAll(this, '_newPosition');

    // throw error if no uuid
    if(!this.get('uuid')){
      throw 'UUID required!';
    }

    // profile
    this.set('@type', 'person', { silent: true });

    // track and story
    this.track = new Track([], { player: this });
    this.story = new Story([], { player: this });

    // geolocation
    // for now only LocalPlayer!
    if(this.geolocation){
      // handle geolocation updates
      this.geolocation.on('position', this._newPosition);
    }

  },

  // returns current position by taking last element from track
  currentPosition: function(){
    return this.track.at(this.track.length - 1);
  },

  // callback for geolocation which adds positions to track and triggers event if position changed
  _newPosition: function(position){
    this.trigger('change:position', position);
    this.track.add(position);
  }

});

module.exports = Player;
