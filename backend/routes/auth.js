const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("Singup route inside router");
});

router.post("/", (req, res) => {
  //res.send("inside auth /signup");
  const { name, email, password, accountType } = req.body;
  console.log(req.body);

  var user = new userModel({
    name,
    email,
    password,
    accountType,
  });
  user.save((user) => {
    //console.log(user.name, user.email, user.password);
    console.log("user saved successfully!");
    res.json({ message: "user saved successfully" });
    return;
  });
});

module.exports = router;
