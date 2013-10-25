var Position = Backbone.Model.extend({

  getLatlng: function(){
    return { lat: this.get('coords').latitude, lng: this.get('coords').longitude };
  }

});

module.exports = Position;
