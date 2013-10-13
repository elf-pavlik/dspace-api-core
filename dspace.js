var leveljs = require('level-js');

var DSpace = function(name){
  /*
   * enable events
   */
  _.extend(this, Backbone.Events);

  /*
   * ready states
   *
   * we need to check for few things before starting!
   */
  this.ready = {
    cache: false
  };

  this.checkReady = function(){
    if(this.ready.cache){ //#FIXME
      this.trigger('ready');
    }
  };

  //#FIXME don't duplicate list of states!
  this.on('cache:ready', this.checkReady.bind(this)); //FIXME need bind?

  /*
   * create cache
   */
  this.cache = leveljs(name);
  this.cache.open(function(err){
    if(err){
      console.log(err);
      return;
    }
    this.ready.cache = true;
    this.trigger('cache:ready');
  }.bind(this));

};

module.exports = DSpace;
