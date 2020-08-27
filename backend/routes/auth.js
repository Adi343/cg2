const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
let router = express.Router();
const jwt = require("jsonwebtoken");
const { json } = require("express");

router.get("/", (req, res) => {
  res.send("Singup route inside router");
});

router.post("/", (req, res) => {
  console.log("inside auth /signup");
  const { name, email, password, accountType } = req.body;
  console.log(req.body);

  var user = new userModel({
    name,
    email,
    password,
    accountType,
  });

  var token = jwt.sign({ user }, "mySecretCode");
  console.log(token);

  user.save((user) => {
    //console.log(user.name, user.email, user.password);
    console.log("user saved successfully!");
    res.json({ message: "user saved successfully", token });
    return;
  });
});

module.exports = router;
