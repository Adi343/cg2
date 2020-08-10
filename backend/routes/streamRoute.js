const express = require("express");
const mongoose = require("mongoose");
const streamModel = require("../models/stream");
let router = express.Router();

router.get("/:name", (req, res) => {
  var name = req.params.name;

  streamModel
    .find()
    .where("name")
    .equals(name)
    .exec((err, user) => {
      if (err) {
        res.send(err);
      }
      res.send("user exists");
    });
});
