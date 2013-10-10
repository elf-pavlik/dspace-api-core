var Track = Backbone.Collection.extend({

  initialize: function() {
    _.bindAll(this, 'save');
    this.on('add', this.save);

    // for now faking url to pass user's uuid
    if(this.url) {
      this.storageKey = 'track-' + this.url;
    }
  },

  fetch: function() {
    if(localStorage[this.storageKey]){
      this.reset(JSON.parse(localStorage[this.storageKey]));
    }
  },

  save: function() {
    localStorage[this.storageKey] = JSON.stringify(this.toJSON());
  }
});

module.exports = Track;
