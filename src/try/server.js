var http = require("http"); // For serving a basic web page.
var mongoose = require("mongoose"); // The reason for this demo.

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring = process.env.MONGODB_URI || "mongodb://localhost/HelloMongoose";

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function(err, res) {
  if (err) {
    console.log("ERROR connecting to: " + uristring + ". " + err);
  } else {
    console.log("Succeeded connected to: " + uristring);
  }
});

// var remove = require("./api/remove");
// remove.user.all();

// var create = require("./api/create");
// create.user({ first: "Wayne", last: "Chao" }, 25);
// create.user({ first: "Kai", last: "Chen" }, 50);
// create.user({ first: "Mary", last: "Doe" }, 68);

// In case the browser connects before the database is connected, the
// user will see this message.
var found = [
  "DB Connection not yet established.  Try again later.  Check the console output for error messages if this persists."
];

// Create a rudimentary http server.  (Note, a real web application
// would use a complete web framework and router like express.js).
// This is effectively the main interaction loop for the application.
// As new http requests arrive, the callback function gets invoked.
var createWebpage = require("../layout/createWebpage");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    createWebpage(req, res);
  })
  .listen(theport);

// Tell the console we're getting ready.
// The listener in http.createServer should still be active after these messages are emitted.
console.log("http server will be listening on port %d", theport);
console.log("CTRL+C to exit");
