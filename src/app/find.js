var User = require("../model/user");

module.exports = {
  login: function(userData, res) {
    User.findOne(
      { ["email"]: userData.email, ["password"]: userData.password },
      function(err, user) {
        res.json(user);
      }
    );
  },
  user: {
    one: function(userEmail, res) {
      User.findOne({ email: userEmail }, function(err, user) {
        res.json(user);
      });
    },
    all: function(res) {
      User.find({}, function(err, users) {
        res.json(users);
      });
    }
  }
};
