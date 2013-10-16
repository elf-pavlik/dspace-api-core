var Track = Backbone.Collection.extend({

  initialize: function(models, options){
    _.bindAll(this, 'cache');
    this.on('add', this.cache);

    // expects player
    if(!options || !options.player){
      throw 'player required! who the hell leaves this trace? ;)';
    }
    this.player = options.player;

    // setup store for caching
    if(this.player.store){
      this.store = this.player.store;
    }
  },

  cache: function() {
    console.log('Track.cache()');
  },

  load: function() {
    console.log('Track.load()');
  }
});

module.exports = Track;
