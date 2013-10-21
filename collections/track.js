var Track = Backbone.Collection.extend({

  comparator: 'timestamp',

  initialize: function(models, options){

    // expects feed and channels
    if(!options || !options.feed){
      throw 'Track requires feed!';
    }
    this.feed = options.feed;

    // only in channel, out(s) handled on player level
    if(!options || !options.channel){
      throw 'Track requires channel!';
    }
    this.channel = options.channel;
    this.channel.sub(function(position){
      this.add(position);
    }.bind(this));

    // fetch initial data TODO make it easier to controll + cache, synce etc.
    this.feed.pull(function(data){
      this.set(data, { silent: true });
      this.trigger('loaded');
    }.bind(this));


  }
});

module.exports = Track;
