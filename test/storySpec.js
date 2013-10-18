var Story = require('../collections/story');

describe('Story', function(){

  describe('initialize', function(){

    var story = new Story([], { player: {store: {} } });

    it('should set model to *Action*');

    it('should throw error if no player');

    it('should create accessor for player', function(){
      expect(story.player).to.be.an('object');
    });
  });
});
