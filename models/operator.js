var Track = require('../collections/track');
var Story = require('../collections/story');

var Operator = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function(attributes, options){
    _.bindAll(this, 'cache', '_newPosition');

    // easy access to store
    if(options && options.store){
      this.store = options.store;
    }

    // throw error if no uuid
    if(!this.get('uuid')){
      throw 'UUID required!';
    }

    this.set('@type', 'person', { silent: true });
    this.on('change', this.cache);

    // track and story
    this.track = new Track([], { operator: this });
    this.story = new Story([], { operator: this });

    // geolocation
    // for now only LocalOperator!
    if(this.geolocation){
      this.geolocation.enable();
      this.geolocation.on('position', this._newPosition);
    }
  },

  cache: function(){
    console.log('Operator.cache()');
    this.store.put(this.id + '/profile', this.toJSON(), function(err){
      if(err){
        console.log(err);
      }
      this.trigger('cached');
    });
  },

  load: function(){
    console.log('Operator.load()');
    this.store.get(this.id + '/profile', function(err, data){
      if(err){
        console.log(err);
        return;
      }
      this.set(data);
      this.trigger('loaded');
    }.bind(this));
  },

  // returns current position by taking last element from track
  currentPosition: function(){
    return this.track.at(this.track.length - 1);
  },

  // callback for geolocation which adds positions to track
  _newPosition: function(position){
    this.track.add(position);
  }

});

module.exports = Operator;
