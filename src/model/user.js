// This is the schema.  Note the types, validation and trim
// statements.  They enforce useful constraints on the data.
var mongoose = require("mongoose"); // The reason for this demo.

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: {
    first: String,
    last: { type: String, trim: true }
  },
  age: { type: Number, min: 0 }
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'PowerUsers' collection in the MongoDB database
module.exports = mongoose.model("Users", userSchema);
