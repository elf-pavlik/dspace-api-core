var DSpace = require('../dspace');
var User = require('../models/user');


describe('User', function(){

    var uuid = 'd05f6115-676e-445c-8242-fa319df4a897';

  describe('initialize', function(){

    it('should use uuid attribute as id', function(){
      var user = new User({ uuid: uuid });
      expect(user.id).to.equal(uuid);
    });

    it('should set @type to *person*', function(){
      var user = new User({ uuid: uuid });
      expect(user.get('@type')).to.equal('person');
    });

    it('should set store if passed in options',function(){
      var user = new User({ uuid: uuid }, { store: {} });
      expect(user.store).to.be.an('object');
    });

    it('should throw error if no uuid');
  });

  describe('cache', function(){
    //FIXME
    //it('should cache data when it changes', function(done){
      //var dspace = new DSpace('test');
      //dspace.on('ready', function() {
        //var user = new User({ uuid: uuid }, { store: dspace.store });
        //sinon.spy(user, 'cache');
        //user.set('name', 'Jane');
        //expect(user.cache).calledOnce;
        //done();
      //});
    //});
    it('should trigger event *cached*');
  });

  describe('load', function(){
    it('should trigger event *loaded*');
  });
});


var LocalUser = require('../models/localUser');

describe('LocalUser', function(){

  describe('uuid', function(){

    beforeEach(function(){
      localStorage.clear();
    });

    it('if finds uuid saved in localStorage should use it', function(){
      var uuid = '4a4674b2-3b30-44f0-bbdc-fd2efc64237b';
      localStorage.uuid = uuid;
      var user = new LocalUser();
      expect(user.get('uuid')).to.equal(uuid);
    });

    it('if no uuid saved in localStorage should generate on and save it to localStorage', function(){
      var user = new LocalUser();
      expect(user.get('uuid')).to.exist;
      expect(localStorage.uuid).to.equal(user.get('uuid'));
    });
  });
});

var RemoteUser = require('../models/remoteUser');

describe('RemoteUser', function(){
});
