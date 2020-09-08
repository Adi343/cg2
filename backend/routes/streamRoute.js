const express = require("express");
const mongoose = require("mongoose");
const stream = require("../models/stream");
let router = express.Router();
const authJwt = require("./authenticateJwt");

router.get("/", (req, res) => {
  res.send("Inside stream get route");
});
router.post("/", (req, res) => {
  var Name = req.body.name;
  console.log(Name);
  var admin = "admin";

  if (Name !== undefined) {
    var newStream = new stream();
    newStream.name = Name;

    stream.find({ name: Name }, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log("query data length is ", data.length);
        if (data.length > 0) {
          console.log("stream with same name exists!");
          res.send("stream with same name exists!");
        } else {
          newStream.save((err, newStream) => {
            if (err) {
              console.log(err);
            } else {
              //res.json(newStream);

              console.log("new stream created!");
              res.json({ message: "new stream created", newStream });
            }
          });
        }
      }
    });
  } else {
    res.send("enter full details!");
  }
});
router.post("/:name", (req, res) => {
  var Name = req.params.name;

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

router.post("/updateStream", (req, res) => {
  var newName = req.body.name;

  if (newName !== undefined && newName !== "") {
    var newStream = new stream(newName);

    stream.find({ name: newName }, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        if (data.length > 0) {
          console.log("stream with this name already exists!");
          res.send("stream with this name already exists");
        } else {
          var id = data.id;
          stream.findByIdAndUpdate(id, { name: newName }, (error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log("update stream is ", result);
              res.send("stream is updated ", result);
            }
          });
        }
      }
    });
  } else {
    res.send("Enter full details!");
  }
});

router.delete("/deleteStream", (req, res) => {
  console.log(req.body.name);
  if (req.body.name === undefined) {
    console.log("enter full details");
    res.send("enter full details");
  } else {
    stream.find({ name: req.body.name }, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        if (data.length == 0) {
          console.log("stream does'nt exist");
        } else if (data.length == 1) {
          console.log("data.length is 1");
          stream.deleteOne({ name: req.body.name }, (error) => {
            console.log(error);
            res.send("deleted one stream by name ", req.body.name);
          });
        } else {
          console.log("data.length is many");
          stream.deleteMany({ name: req.body.name }, (error) => {
            console.log("error is ", error);
            res.send("deleted many users by name ", req.body.name);
          });
        }
      }
    });
  }
});

module.exports = router;
