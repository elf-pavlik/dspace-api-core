var Player = require('../models/player');

var Group = Backbone.Collection.extend({

  model: Player,

  initialize: function(){},

  cache: function(){},

  load: function(){}

});

module.exports = Group;
