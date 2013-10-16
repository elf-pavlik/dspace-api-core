var Story = require('../collections/story');

describe('Story', function(){

  describe('initialize', function(){

    var story = new Story([], { player: {store: {} } });

    it('should set model to *Capture*');

    it('should throw error if no player');

    it('should create accessor for player', function(){
      expect(story.player).to.be.an('object');
    });

    it('should create acessor for store', function(){
      expect(story.store).to.be.an('object');

    });
    it('should cache when new points added');
  });

  describe('load', function(){
  });

  describe('cache', function(){
  });
});
