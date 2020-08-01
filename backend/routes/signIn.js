const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const { route } = require("./auth");
let router = express.Router();

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
