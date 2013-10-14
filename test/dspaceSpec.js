var DSpace = require('../dspace');
describe('new DSpace()', function(){

  describe('events', function(){
    var dspace = new DSpace('test');
    it('should extend Backbone Events', function(){
      expect(dspace.on).to.be.a('function');
      expect(dspace.trigger).to.be.a('function');

    });
  });

  describe('cache', function(){
    var dspace = new DSpace('test');
    it('should create cache', function(){
      expect(dspace.cache).to.be.an('object');
      expect(dspace.cache.location).to.equal('test');
    });
  });

  describe('ready', function(){
    it('should trigger *ready* event', function(done){
      var dspace = new DSpace('test');
      dspace.on('ready', done);
    });
  });
});
