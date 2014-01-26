var Nexus = require('./nexus');
var Party = require('./collections/party');

var DSpace = function(map, Roster, BayeuxHub, config){

  this.config = config;
  this.map = map;

  this.nexus = new Nexus(config, BayeuxHub);

  // FIXME support multiple parties!
  this.party = new Party([], {config: config, nexus: this.nexus });

  this.roster = new Roster(this.party, this.map.frame);

  // various handy functions
  this.utils = {

    // #attribution: http://www.paulirish.com/2009/random-hex-color-code-snippets/
    randomColor: function(){ return '#' + Math.floor(Math.random()*16777215).toString(16); }
  };
};

module.exports = DSpace;
