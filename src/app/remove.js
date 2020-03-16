var User = require("../model/user");

module.exports = {
  user: {
    all: function() {
      // Clear out old data
      User.remove({}, function(err) {
        if (err) {
          console.log("error deleting old data.");
        }
      });
    },
    one: function(userEmail) {
      User.deleteOne({ email: userEmail }, function(err) {
        if (err) {
          console.log("error deleting old data.");
        }
      });
    }
  }
};
