var Track = Backbone.Collection.extend({

  comparator: 'timestamp',

  initialize: function(models, options){

    // expects player
    if(!options || !options.player){
      throw 'player required! who the hell leaves this trace? ;)';
    }
    this.player = options.player;
  }
});

module.exports = Track;
