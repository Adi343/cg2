const express = require("express");
const mongoose = require("mongoose");
const post = require("../models/post");
let router = express.Router();

router.get("/", (req, res) => {

  post.find({}).exec().then(doc=>{
    res.status(200).json(doc);
    console.log(doc);
  }).catch(err =>{
    console.log(err)
  });
  // res.json({ message: "touche" });
});

module.exports = router;
