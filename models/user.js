var DSpace = require('../dspace'); //FIXME use global?

var User = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function(){
    _.bindAll(this, 'cache');

    // error if no uuid
    if(!this.get('uuid')){
      throw 'UUID required!';
    }

    this.set('@type', 'person', { silent: true });
    this.on('change', this.cache);
  },

  cache: function(){
    DSpace.cache.put(this.id + '/profile', this.toJSON(), function(err){
      if(err){
        console.log(err);
      }
      this.trigger('cached');
    });
  },

  load: function(){
    DSpace.cache.get(this.id + '/profile', function(err, data){
      if(err){
        console.log(err);
        return;
      }
      this.set(data);
      this.trigger('loaded');
    }.bind(this));
  }

});

module.exports = User;
