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
    it('should create acessor for store', function(){
      expect(track.store).to.be.an('object');
    });

    it('should try to load track');

    it('should cache when new points added');

    it('should NOT cache before trying to load first');
  });

  describe('cache', function(){
    it('should trigger *cached* event');
  });

  describe('load', function(){
    it('should trigger *cached* event');
    it('should set data on track silently');
  });

});
