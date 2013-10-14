var leveljs = require('level-js');

var DSpace = {};

/*
 * enable events
 */
_.extend(DSpace, Backbone.Events);

/*
 * ready event
 *
 * we need to setup cache first
 */

DSpace.cache = leveljs('dspace'); //FIXME no hardcoding!

DSpace.cache.open(function(err){
  if(err){
    console.log(err);
    return;
  }
  this.trigger('ready');
}.bind(DSpace));

module.exports = DSpace;
