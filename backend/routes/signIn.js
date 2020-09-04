const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const { route } = require("./auth");
let router = express.Router();
const authenticateJwt = require("./authenticateJwt");
const jwt = require("jsonwebtoken");
/*
router.get("/", (req, res) => {
  userModel.find({}, (err, users) => {
    var userMap = {};

    users.forEach((user) => {
      userMap[user.id] = user;
    });

    res.send(userMap);
  });
});
*/

router.post("/", (req, res) => {
  var name = req.body.name;
  var password = req.body.password;
  //get email and account type from database.
  //sign jwt token and send to user.
  //console.log(req.user);
  // if (req.user) {
  console.log(req.body);
  console.log("name is ", name);
  console.log("password is ", password);
  if (name && password) {
    //res.send("User sign in successful");
    var email, accountType;
    userModel.find({ name: name, password: password }, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data[0]);
        email = data[0].email;
        accountType = data[0].accountType;
      }
    });
    var user = new userModel({ name, email, password, accountType });
    var token = jwt.sign({ user }, "mySecretCode");
    console.log(token);
    res.json({ message: "Sign In successful", token });
    //res.sendStatus(200);
  } else {
    res.send("Enter full details");
    //res.sendStatus(403);
  }
  // } else {
  //   res.status(403);
  // }
});

router.get("/:name", (req, res) => {
  var name = req.params.name;

  userModel
    .find()
    .where("name")
    .equals(name)
    .exec((err, user) => {
      if (err) {
        res.send("error");
      }
      res.send("userExists");
    });
});

module.exports = router;
