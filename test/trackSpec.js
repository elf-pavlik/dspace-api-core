var Track = require('../collections/track');

describe('Track', function(){

  describe('initialize', function(){

    var track = new Track([], { player: {store: {} } });

    it('should set comparator to *timestamp*', function(){
      expect(track.comparator).to.equal('timestamp');
    });

    it('should throw error if no player');

    it('should create accessor for player', function(){
      expect(track.player).to.be.an('object');
    });
  });
});
