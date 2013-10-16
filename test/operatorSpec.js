var DSpace = require('../dspace');

var Operator = require('../models/operator');
var LocalOperator = require('../models/localOperator');
var RemoteOperator = require('../models/remoteOperator');

var Track = require('../collections/track');
var Story = require('../collections/story');

describe('Operator', function(){

  var uuid = 'd05f6115-676e-445c-8242-fa319df4a897';

  describe('initialize', function(){

    var operator = new Operator({ uuid: uuid });

    it('should use uuid attribute as id', function(){
      expect(operator.id).to.equal(uuid);
    });

    it('should set @type to *person*', function(){
      expect(operator.get('@type')).to.equal('person');
    });

    it('should set store if passed in options',function(){
      operator = new Operator({ uuid: uuid }, { store: {} });
      expect(operator.store).to.be.an('object');
    });

    it('should throw error if no uuid');

    it('should create track', function(){
      expect(operator.track).to.be.an.instanceOf(Track);
    });

    it('should create story', function(){
      expect(operator.story).to.be.an.instanceOf(Story);
    });


  });

  //FIXME for now we test with LocalOperator, soon same API for RemoteOperator
  describe('geolocation', function(){

    operator = new LocalOperator();

    it('should enable geolocation', function(){
      expect(operator.geolocation.isEnabled()).to.be.true;
    });

    it('should subscribe to *position* event'); // ???

  });

  describe('cache', function(){
    //FIXME
    //it('should cache data when it changes', function(done){
      //var dspace = new DSpace('test');
      //dspace.on('ready', function() {
        //var operator = new Operator({ uuid: uuid }, { store: dspace.store });
        //sinon.spy(operator, 'cache');
        //operator.set('name', 'Jane');
        //expect(operator.cache).calledOnce;
        //done();
      //});
    //});
    it('should trigger event *cached*');
  });

  describe('load', function(){
    it('should trigger event *loaded*');
  });

  describe('geo', function(){

    var firstPosition = { coords: { latitude: 47, longitude: 15}, timestamp: 1381855568774 };
    var secondPosition = { coords: { latitude: 55, longitude: 22}, timestamp: 1381855569774 };
    var thirdPosition = { coords: { latitude: 52, longitude: 28}, timestamp: 1381855572774  };

    describe('currentPosition', function(){

      it('should return *undefined* if track empty', function(){
        expect(operator.track.length).to.equal(0);
        expect(operator.currentPosition()).to.be.undefined;
      });

      it('should return last position on track', function(){
        operator.track.add(firstPosition);
        operator.track.add(secondPosition);
        expect(operator.currentPosition().toJSON()).to.deep.equal(secondPosition);
      });
    });

    describe('_newPosition', function(){


      it('should add it to track', function(){
        operator.track.reset();
        operator.track.add(firstPosition);

        operator._newPosition(secondPosition);
        expect(operator.track.length).to.equal(2);
        operator._newPosition(thirdPosition);
        expect(operator.track.length).to.equal(3);
      });

      it('should trigger *change:position* event if really changed and pass position', function(done){
        operator.track.reset();
        operator.track.add(firstPosition);
        operator.on('change:position', function(position){
          expect(position.coords).to.be.an('object');
          done();
        });
        operator._newPosition(secondPosition);
      });

      it('should not trigger *change:position* event if not really changed');

    });
  });
});


describe('LocalOperator', function(){

  describe('uuid', function(){

    beforeEach(function(){
      localStorage.clear();
    });

    it('if finds uuid saved in localStorage should use it', function(){
      var uuid = '4a4674b2-3b30-44f0-bbdc-fd2efc64237b';
      localStorage.uuid = uuid;
      var operator = new LocalOperator();
      expect(operator.get('uuid')).to.equal(uuid);
    });

    it('if no uuid saved in localStorage should generate on and save it to localStorage', function(){
      var operator = new LocalOperator();
      expect(operator.get('uuid')).to.exist;
      expect(localStorage.uuid).to.equal(operator.get('uuid'));
    });

    it('should initialize geolocation', function(){
      var operator = new LocalOperator();
      expect(operator.geolocation).to.be.an('object');
    });
  });
});


describe('RemoteOperator', function(){
});
