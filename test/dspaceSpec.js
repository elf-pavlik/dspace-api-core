describe('DSpace', function(){

  describe('events', function(){
    it('should extend Backbone Events', function(){
      var DSpace = require('../dspace');
      expect(DSpace.on).to.be.a('function');
      expect(DSpace.trigger).to.be.a('function');

    });
  });

  describe('cache', function(){
    it('should create cache', function(){
      var DSpace = require('../dspace');
      expect(DSpace.cache).to.be.an('object');
      expect(DSpace.cache.location).to.equal('dspace'); //FIXME no hardcoding!
    });
  });

  describe('ready', function(){
    it('should trigger *ready* event', function(done){
      var DSpace = require('../dspace');
      DSpace.on('ready', done);
    });
  });
});
