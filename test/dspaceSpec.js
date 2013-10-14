var DSpace = require('../dspace');

describe('new DSpace()', function(){

  var dspace = new DSpace('test');

  describe('events', function(){
    it('should extend Backbone Events', function(){
      expect(dspace.on).to.be.a('function');
      expect(dspace.trigger).to.be.a('function');

    });
  });

  describe('store', function(){
    it('should create store', function(){
      expect(dspace.store).to.be.an('object');
      expect(dspace.store.location).to.equal('test');
    });
  });

  describe('ready', function(){
    it('should trigger *ready* event', function(done){
      var dspace = new DSpace('test');
      dspace.on('ready', done);
    });
  });
});
