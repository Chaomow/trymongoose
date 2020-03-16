var User = require("../model/user");

module.exports = {
  user: function(userEmail, userData, res) {
    User.findOne({ email: userEmail }, function(err, user) {
      let { name, age } = userData;
      if (!user) res.status(404).send("User is not found");
      else {
        user.name.first = name.first;
        user.name.last = name.last;
        user.age = age;
      }

      user.save(function(err) {
        if (err) console.log("Error on Update!");
      });
    });
  },
  password: function(userEmail, userData, res) {
    User.findOne({ email: userEmail }, function(err, user) {
      let { password } = userData;
      if (!user) res.status(404).send("User is not found");
      else {
        user.password = password;
      }

      user.save(function(err) {
        if (err) console.log("Error on Update!");
      });
    });
  }
};
