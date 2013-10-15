var RemoteOperator = require('../models/remoteOperator');

var OperatorsCollection = Backbone.Collection.extend({
  model: RemoteOperator,

  initialize: function() {
    this.on('add', function(operator){
      var ids = JSON.parse(localStorage.ids);
      var uuid = operator.get('uuid');
      if(ids.indexOf(uuid) < 0){
        ids.push(uuid);
        localStorage.ids = JSON.stringify(ids);
      }
    });
  }
});

module.exports = OperatorsCollection;
