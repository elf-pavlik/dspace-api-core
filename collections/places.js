var Place = require('../models/place');

var Places = Backbone.Collection.extend({

  model: Place,

  initialize: function(attrs, options){
    _.bindAll(this, 'parse');

    this.config = options.config;
    this.nexus = options.nexus;

    // FIXME reconsider!
    this.feed = this.nexus.getFeed(this.config.url);
    this.feed.pull(this.parse);

  },

  // assumes geoJSON
  parse: function(response){
    this.reset(response.features);
  }

});

module.exports = Places;
