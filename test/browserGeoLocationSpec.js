var BrowserGeoLocation = require('../channels/browserGeoLocation');

describe('BrowserGeoLocation', function(){

  it('should extend Backbone Events', function(){
    var browserGeoLocation = new BrowserGeoLocation();
    expect(browserGeoLocation.on).to.be.a('function');
    expect(browserGeoLocation.trigger).to.be.a('function');
  });

  describe('enable', function(){
    it('watches navigator.geolocation', function(){
      var spy = sinon.spy(navigator.geolocation, 'watchPosition');
      var browserGeoLocation = new BrowserGeoLocation();
      browserGeoLocation.enable();
      expect(spy).calledOnce;
      navigator.geolocation.watchPosition.restore();
    });

    it('creates watcherID', function(){
      var browserGeoLocation = new BrowserGeoLocation();
      browserGeoLocation.enable();
      expect(browserGeoLocation.watcherID).to.exist;
    });

    it('triggers *position* event', function(done){
      var stub = sinon.stub(navigator.geolocation, 'watchPosition');
      stub.callsArgWith(0, { coords:{}, timestamp: 1381850004435 });
      var browserGeoLocation = new BrowserGeoLocation();
      browserGeoLocation.on('position', function(){done();});
      browserGeoLocation.enable();
      navigator.geolocation.watchPosition.restore();
    });

    it('isEnabled() returns true', function(){
      var browserGeoLocation = new BrowserGeoLocation();
      browserGeoLocation.enable();
      expect(browserGeoLocation.isEnabled()).to.be.true;
    });
  });

  describe('disable', function(){

    it('stops watching browser geolocation api and clears watcherID', function(){
      var spy = sinon.spy(navigator.geolocation, 'clearWatch');
      var browserGeoLocation = new BrowserGeoLocation();
      browserGeoLocation.enable();
      expect(browserGeoLocation.watcherID).to.exist;
      var watcherID = browserGeoLocation.watcherID;
      browserGeoLocation.disable();
      expect(spy).calledWith(watcherID);
      expect(browserGeoLocation.watcherID).not.to.exist;
      navigator.geolocation.clearWatch.restore();
    });

    it('isEnabled() returns false', function(){
      var browserGeoLocation = new BrowserGeoLocation();
      browserGeoLocation.enable();
      expect(browserGeoLocation.isEnabled()).to.be.true;
      browserGeoLocation.disable();
      expect(browserGeoLocation.isEnabled()).to.be.false;
    });
  });

});
