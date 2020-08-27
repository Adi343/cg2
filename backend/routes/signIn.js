const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const { route } = require("./auth");
let router = express.Router();
const authenticateJwt = require("./authenticateJwt");
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

router.post("/", authenticateJwt, (req, res) => {
  var name = req.body.name;
  var password = req.body.password;

  //console.log(req.user);
  if (req.user) {
    //console.log("name is ", name);
    //console.log("password is ", password);
    if (name && password) {
      res.send("User sign in successful");
      res.status(200);
    } else {
      res.send("Enter full details");
      res.send(403);
    }
  } else {
    res.status(403);
  }
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
