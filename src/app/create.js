var User = require("../model/user");

module.exports = {
  user: function(userData) {
    // Creating one user.
    var newUser = new User(userData);

    // Saving it to the database.
    newUser.save(function(err) {
      if (err) console.log("Error on save!");
    });
  }
};
