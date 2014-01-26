var Portal = function(config, nexus){

  _.extend(this, Backbone.Events);

  this.feed = nexus.getFeed(config.feed);
  this.feed.pull(function(roster){
    // ignore localPlayer
    _.remove(roster, function(player){ return player.uuid === localStorage.uuid; } );
    this.trigger('roster', roster);
  }.bind(this));

  this.channel = nexus.getChannel(config.channel);
  this.channel.sub(function(message){
    // ignore localPlayer
    if(message.uuid !== localStorage.uuid){
      this.trigger('player', message);
    }
  }.bind(this));
};

module.exports = Portal;
