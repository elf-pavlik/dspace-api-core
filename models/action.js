var uuid = require('node-uuid');

var Action = Backbone.Model.extend({

  idAttribute: 'uuid',

  initialize: function() {
    // for new capture
    if(!this.get('uuid')){
      this.set({
        '@type': 'capture',
        uuid: uuid(),
        timeStart: new Date().getTime()
      });
    }
  },

  /*
   * pictures: 'image/*'
   * videos: 'video/*'
   * audio rec: 'video/3gpp'
   *
   * used to attach media files to capture
   * #attribution http://blog.w3villa.com/websites/uploading-filesimage-with-ajax-jquery-without-submitting-a-form/
   */
  attachFile: function(mediaUrl, file) {
    if(! file) throw new TypeError("attachFile(mediaUrl, file) didn't get enough parameters");
    this.set('mediaType', file.type);
    var formData = new FormData();
    var metadata = { uuid: this.get('uuid') };
    formData.append('file', file);
    formData.append('meta', JSON.stringify(metadata));
    $.ajax({
      url: mediaUrl,
      data: formData,
      type: 'post',
      contentType: false,
      processData: false
    });
  },

  // for now we use for marker location where capture got submited
  markerLocation: function() {
    return this.get('locationSubmit');
  }
});

module.exports = Action;
