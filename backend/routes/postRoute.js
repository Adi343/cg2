const express = require("express");
const mongoose = require("mongoose");
const post = require("../models/post");
let router = express.Router();

router.get("/", (req, res) => {
  mongoose.Document
  res.json({ message: "touche" });
});

module.exports = router;
