var Player = require('../models/player');

var Team = Backbone.Collection.extend({

  model: Player,

  initialize: function(){},

  cache: function(){},

  load: function(){}

});

module.exports = Team;
