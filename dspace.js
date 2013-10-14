var leveljs = require('level-js');

var DSpace = function(namespace){

  /*
   * enable events
   */
  _.extend(this, Backbone.Events);

  /*
   * ready event
   *
   * we need to setup cache first
   */

  this.store = leveljs(namespace);

  this.store.open(function(err){
    if(err){
      console.log(err);
      return;
    }
    this.trigger('ready');
  }.bind(this));
};

module.exports = DSpace;
