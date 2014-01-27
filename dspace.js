var Nexus = require('./nexus');
var Party = require('./collections/party');
var LocalPlayer = require('dspace-api-core/models/localPlayer');

var DSpace = function(Map, Roster, BayeuxHub, config){

  this.config = config;
  this.map = new Map({config: config.map});

  this.nexus = new Nexus(config, BayeuxHub);

  // FIXME support multiple parties!
  this.party = new Party([], {config: config, nexus: this.nexus });

  this.roster = new Roster(this.party, this.map.frame);

  // various handy functions
  this.utils = {

    // #attribution: http://www.paulirish.com/2009/random-hex-color-code-snippets/
    randomColor: function(){ return '#' + Math.floor(Math.random()*16777215).toString(16); }
  };

  this.player = new LocalPlayer(this.config.player.profile, {
    settings: this.config.settings,
    nexus: this.nexus
  });

  this.player.on('change', function(player){
    localStorage.profile = JSON.stringify(player);
  });

  // FIXME move to Roster?
  this.player.layerGroup = new L.LayerGroup();
  this.player.layerGroup.addTo(this.map.frame);
  this.roster.createPlayerOverlays(this.player, { avatar: this.player.layerGroup, track: this.player.layerGroup });

  // PLAY!
  this.publishPlayer = function(player){
    this.party.portal.channel.pub(player);
  };
  this.publishPlayer(this.player.toJSON());
  this.player.on('change', this.publishPlayer);

};

module.exports = DSpace;
