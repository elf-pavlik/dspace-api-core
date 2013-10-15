var DSpace = require('../dspace');
var Operator = require('../models/operator');
var Track = require('../collections/track');
var Story = require('../collections/story');


describe('Operator', function(){

  var uuid = 'd05f6115-676e-445c-8242-fa319df4a897';
  var operator = new Operator({ uuid: uuid });

  describe('initialize', function(){

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

    it('should initialize geolocation');
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
});


var LocalOperator = require('../models/localOperator');

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
  });
});

var RemoteOperator = require('../models/remoteOperator');

describe('RemoteOperator', function(){
});
