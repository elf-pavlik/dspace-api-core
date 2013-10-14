var User = require('../models/user');
var LocalUser = require('../models/localUser');

describe('User', function(){
  describe('caching', function(){
    it('should should try to fetch profile from cache');
  });
});

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
