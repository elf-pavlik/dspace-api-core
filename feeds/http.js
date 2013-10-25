var request = require('superagent');

var HTTPFeed = function(path, hub){

  // expects absolute path
  if(path[0] !== '/'){
    throw 'absolute path please!';
  }

  // expects hub
  if(!hub){
    throw 'i need hub!';
  }

  // easy reference to path
  this.path = path;

  // easy reference to hub
  this.hub = hub;

  // fetching data
  this.pull = function(callback){
    request.get(this.hub.url + this.path, function(res){
      if(res.status === 200){
        callback(JSON.parse(res.text));
      }
    }.bind(this));
  };
};

module.exports = HTTPFeed;
