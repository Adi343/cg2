const express = require("express");
const mongoose = require("mongoose");
const stream = require("../models/stream");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("Inside Stream Route");
});
router.post("/:name", (req, res) => {
  var name = req.params.name;
  var admin = "admin";
  var newStream = new stream({ name, admin });

  const query = stream.find().where("name").equals(name);

  console.log(query[0]);

  if (query != NaN) {
    console.log("stream exists");
  } else {
    newStream.save().then(() => {
      //   console.log("stream created!");
      res.send("user saved successfully!");
    });
    //res.send(query);
    // newStream.save().then(() => {
    //   console.log("stream created!");
    //   res.send("user saved successfully!");
    // });
  }
});

module.exports = router;
