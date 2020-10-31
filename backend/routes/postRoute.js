const express = rewuire("express");
const mongoose = require("mongoose");
const post = require("../models/post");
let router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "touche" });
});

module.exports = router;
