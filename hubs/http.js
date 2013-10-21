var HTTPFeed = require('../feeds/http');

var HTTPHub = function(url){

  // expects hub
  if(!url){
    throw 'i need URL!';
  }

  // save url for easy access
  this.url = url;

  // create feed
  this.getFeed = function(path){
    return new HTTPFeed(path, this);
  };


};

module.exports = HTTPHub;
