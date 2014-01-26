var URL = require('url');
var HTTPHub = require('./hubs/http');

//FIXME: find other way to pass Live Channel Hub!
var Nexus = function(config, BayeuxHub ){
  // keeps track on hubs to prevening creating duplicates when requiesting channels
  this.hubs = {};

  this.getFeed = function(template){
    if(_.isString(template)){
      var parts = URL.parse(template);
      template = {
        url: parts.protocol + '//' + parts.host,
        path: parts.path
      };
    }
    var protocol = template.protocol;
    if(!protocol) protocol = 'http';
    var hub;
    if(this.hubs[protocol]){
      hub = this.hubs[protocol][template.url];
    } else {
      this.hubs[protocol] = {};
    }
    if(!hub){
      hub = new HTTPHub(template.url);
      this.hubs[protocol][template.url] = hub;
    }
    return hub.getFeed(template.path);
  }.bind(this);

  this.getChannel = function(template){
    var protocol = template.protocol;
    if(!protocol) protocol = 'http';
    var hub;
    if(this.hubs[protocol]){
      hub = this.hubs[protocol][template.url];
    } else {
      this.hubs[protocol] = {};
    }
    if(!hub){
      // FIXME manage various protocols
      hub = new BayeuxHub(template.url);
      this.hubs[protocol][template.url] = hub;
    }
    return hub.getChannel(template.path);
  }.bind(this);
};

module.exports = Nexus;
