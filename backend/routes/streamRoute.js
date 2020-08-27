const express = require("express");
const mongoose = require("mongoose");
const stream = require("../models/stream");
let router = express.Router();
const authJwt = require("./authenticateJwt");

router.get("/", authJwt, (req, res) => {
  res.send("Inside stream get route");
});
router.post("/", (req, res) => {
  var Name = req.body.name;
  console.log(Name);
  var admin = "admin";
  var newStream = new stream();
  newStream.name = Name;

  newStream.save((err, newStream) => {
    if (err) {
      console.log(err);
    } else {
      res.json(newStream);
    }
  });
});
router.post("/:name", (req, res) => {
  var Name = req.body.name;

  var newStream = new stream({ name: Name });

  // const query = stream.find().where("name").equals(name);

  // console.log(query[0]);

  // if (query != NaN) {
  //   console.log("stream exists");
  // } else {
  newStream.save((err, newStream) => {
    if (err) {
      console.log("error creating stream");
    } else {
      res.json(newStream);
    }
  });
  //res.send(query);
  // newStream.save().then(() => {
  //   console.log("stream created!");
  //   res.send("user saved successfully!");
  // });
  //}
});

module.exports = router;
