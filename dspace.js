var leveljs = require('level-js');

var DSpace = function(name){
  /*
   * enable events
   */
  _.extend(this, Backbone.Events);

  /*
   * ready event
   *
   * we need to setup cache first
   */

  this.cache = leveljs(name);
  this.cache.open(function(err){
    if(err){
      console.log(err);
      return;
    }
    this.trigger('ready');
  }.bind(this));

};

module.exports = DSpace;
