const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const docFind = require("./app/find");
const docCreate = require("./app/create");
const docUpdate = require("./app/update");
const docRemove = require("./app/remove");

var uristring =
  process.env.MONGODB_URI ||
  "mongodb://wayne415231:28469evjpa@ds229552.mlab.com:29552/heroku_wpcpjq1v";

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(uristring, { useNewUrlParser: true });

//login
app.route("/users/login/:email/:password").get(function(req, res) {
  docFind.login(req.params, res);
});

//find by first
app.route("/users/find/:email").get(function(req, res) {
  docFind.user.one(req.params.email, res);
});

//add
app.route("/users/add").post(function(req, res) {
  docCreate.user(req.body);
});

//update
app.route("/users/update/:email").post(function(req, res) {
  docUpdate.user(req.params.email, req.body, res);
});

//update password
app.route("/users/updatePW/:email").post(function(req, res) {
  docUpdate.password(req.params.email, req.body, res);
});

//delete all
app.route("/users/deleteall").delete(function(req, res) {
  docRemove.user.all();
});

//delete
app.route("/users/delete/:email").delete(function(req, res) {
  docRemove.user.one(req.params.email);
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
