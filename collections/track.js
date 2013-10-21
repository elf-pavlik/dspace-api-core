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
    this.channel.on('position', function(position){
      this.add(position);
    }.bind(this));

  }
});

module.exports = Track;
