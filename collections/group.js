var Operator = require('../models/operator');

var Group = Backbone.Collection.extend({

  model: Operator,

  initialize: function(){},

  cache: function(){},

  load: function(){}

});

module.exports = Group;
