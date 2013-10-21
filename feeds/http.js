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
    $.getJSON(this.hub.url + this.path, callback);
  };
};

module.exports = HTTPFeed;
