var Action = require('../models/action');

var Story = Backbone.Collection.extend({
  model: Action,

  initialize: function(models, options){
    _.bindAll(this, 'cache');
    this.on('add', this.cache);

    // expects operator
    if(!options || !options.operator){
      throw 'operator required! who the hell leaves this trace? ;)';
    }
    this.operator = options.operator;

    // setup store for caching
    if(this.operator.store){
      this.store = this.operator.store;
    }
  },

  cache: function() {
    console.log('Story.cache()');
  },

  load: function() {
    console.log('Story.load()');
  }
});

module.exports = Story;
