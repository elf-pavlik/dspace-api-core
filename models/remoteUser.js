var User = require('./user');

// represents people connecting through other devices
var RemoteUser = User.extend({

  //FIXME support case if no uuid!

});

module.exports = RemoteUser;
