var Story = require('../collections/story');

describe('Story', function(){

  describe('initialize', function(){

    var track = new Story([], { operator: {store: {} } });

    it('should set model to *Capture*');

    it('should throw error if no operator');

    it('should create accessor for operator', function(){
      expect(track.operator).to.be.an('object');
    });

    it('should create acessor for store', function(){
      expect(track.store).to.be.an('object');

    });
    it('should cache when new points added');
  });

  describe('load', function(){
  });

  describe('cache', function(){
  });
});
