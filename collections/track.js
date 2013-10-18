var Track = Backbone.Collection.extend({

  comparator: 'timestamp',

  initialize: function(models, options){
    _.bindAll(this, 'cache');

    // expects player
    if(!options || !options.player){
      throw 'player required! who the hell leaves this trace? ;)';
    }
    this.player = options.player;

    // setup store for caching
    if(this.player.store){
      this.store = this.player.store;
    }

    // FIXME deal with load:error situation
    this.on('load:error load:success', function(){
      this.on('add', this.cache);
    }.bind(this));

    // try to load initial track
    this.load();
  },

  cache: function() {
    console.log('Track.cache()');
    this.store.put('tracks/' + this.player.id, this.toJSON(), function(err){
      if(err){
        console.log(err);
      }
      this.trigger('cached');
    }.bind(this));
  },

  load: function() {
    console.log('Track.load()');
    this.store.get('tracks/' + this.player.id, { asBuffer: false }, function(err, data){
      if(err){
        console.log(err);
        this.trigger('load:error');
        return;
      }
      this.set(data, { silent: true });
      this.trigger('load:success');
    }.bind(this));
  }
});

module.exports = Track;
