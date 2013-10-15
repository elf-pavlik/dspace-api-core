var Operator = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function(attributes, options){
    _.bindAll(this, 'cache');

    // easy access to store
    if(options && options.store){
      this.store = options.store;
    }

    // error if no uuid
    if(!this.get('uuid')){
      throw 'UUID required!';
    }

    this.set('@type', 'person', { silent: true });
    this.on('change', this.cache);
  },

  cache: function(){
    this.store.put(this.id + '/profile', this.toJSON(), function(err){
      if(err){
        console.log(err);
      }
      this.trigger('cached');
    });
  },

  load: function(){
    this.store.get(this.id + '/profile', function(err, data){
      if(err){
        console.log(err);
        return;
      }
      this.set(data);
      this.trigger('loaded');
    }.bind(this));
  }

});

module.exports = Operator;
