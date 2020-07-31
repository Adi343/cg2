const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
let router = express.Router();

router.get("/", (req, res) => {
  let users = userModel.find();
  res.json(users);
});

/*router.post("/", (req, res) => {
    const {userName,password} = req.body;

    var user = 
});*/

module.exports = router;
