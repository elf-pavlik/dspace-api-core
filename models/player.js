var Story = require('../collections/story');

var Player = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function(attrs, options){

    // throw error if no uuid
    if(!this.get('uuid')){
      throw 'UUID required!';
    }

    // profile
    this.set('@type', 'person', { silent: true });

    // track events
    this.track.on('add', function(position){
      this.trigger('change:position', position);
    });

    this.story = new Story([], { player: this });

  },

  // returns current position by taking last element from track
  currentPosition: function(){
    return this.track.at(this.track.length - 1);
  }

});

module.exports = Player;
