//FIXME: don't expect global Backbone!
Backbone.VirtualCollection = require('backbone-virtual-collection');

var Portal = require('../portal');
var RemotePlayer = require('../models/remotePlayer');

var Party = Backbone.Collection.extend({

  model: RemotePlayer,

  initialize: function(attrs, options){

    this.config = options.config;
    this.nexus = options.nexus;

    this.portal = new Portal(this.config.party.portal, this.nexus);

    this.teams = {};

    _.forEach(this.config.teams, function(team){
      this.teams[team.name] = new Backbone.VirtualCollection(this, { filter: { team: team.name } });
      this.teams[team.name].name = team.name;
    }, this);
    this.teams.unteam = new Backbone.VirtualCollection(this, { filter: { team: undefined } });
    this.teams.unteam.name = 'unteam';

    this.portal.on('roster', function(roster){
      this.set(roster, { nexus: this.nexus });
    }.bind(this));

    this.portal.on('player', function(player){
      if(this.get(player.uuid)){
        this.get(player.uuid).set(player);
      } else {
        this.add(player, { nexus: this.nexus });
      }
    }.bind(this));
  }
});

module.exports = Party;
