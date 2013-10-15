var uuid = require('node-uuid');

var Action = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function() {
  },

});

module.exports = Action;
