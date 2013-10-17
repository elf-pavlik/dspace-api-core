var Track = require('../collections/track');
var Story = require('../collections/story');

var Player = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function(attrs, options){
    _.bindAll(this, 'cache', '_newPosition');

    // easy access to store
    if(options && options.store){
      this.store = options.store;
    }

    // throw error if no uuid
    if(!this.get('uuid')){
      throw 'UUID required!';
    }

    // profile
    this.set('@type', 'person', { silent: true });
    this.on('change', this.cache);

    // track and story
    this.track = new Track([], { player: this });
    this.story = new Story([], { player: this });

    // geolocation
    // for now only LocalPlayer!
    if(this.geolocation){
      this.geolocation.enable();

      // handle geolocation updates
      // one time callback for 'position:first' event
      this.geolocation.once('position', this._firstPosition);

      this.geolocation.on('position', this._newPosition);
    }
  },

  cache: function(){
    console.log('Player.cache()');
    this.store.put(this.id, this.toJSON(), function(err){
      if(err){
        console.log(err);
      }
      this.trigger('cached');
    }.bind(this));
  },

  load: function(){
    console.log('Player.load()');
    this.store.get(this.id, { asBuffer: false }, function(err, data){
      if(err){
        console.log(err);
        return;
      }
      this.set(data, { silent: true });
      this.trigger('loaded');
    }.bind(this));
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
