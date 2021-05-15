const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const { route } = require("./auth");
let router = express.Router();
const authenticateJwt = require("./authenticateJwt");
const jwt = require("jsonwebtoken");
/*
router.get("/", (req, res) => {
  userModel.find({}, (err, users) => {
    var userMap = {};

    users.forEach((user) => {
      userMap[user.id] = user;
    });

    res.send(userMap);
  });
});
*/

router.post("/", (req, res) => {
  var name = req.body.name;
  var password = req.body.password;
  //get email and account type from database.
  //sign jwt token and send to user.
  //console.log(req.user);
  // if (req.user) {
  console.log('req.body is ');
  console.log(req.body);
  console.log("name is ", name);
  console.log("password is ", password);
  if (name && password) {
    //res.send("User sign in successful");
    var email, accountType;
    var check = true;
    var id;
    userModel.find({ name: name, password: password }).then((data)=>{

      try{
        console.log('data is '+data[0]);
      email = data[0].email;
      accountType = data[0].accountType;
      id = data[0]._id;
      }catch(error){
        check = false;
        console.log('user not found!');
      }
      finally{
        console.log('inside finally');
        console.log('check is '+check);
    if(check==true){
      var user = new userModel({ name, email, password, accountType });
    var token = jwt.sign({ user }, "mySecretCode");
    console.log('token is '+token);
    console.log('id is '+id);
    res.json({ message: "Sign In successful", token,id });
    }
    else{
      res.json({message:"user not found!"})
    }

      }
      
    }).catch((error)=>{
      console.log('error is '+error);
      
    })
    // userModel.find({ name: name, password: password }, (error, data) => {
    //   if (error) {
    //     console.log('error in signIn.js '+error);
    //   } else {
    //     console.log('data is '+data[0]);
    //     email = data[0].email;
    //     accountType = data[0].accountType;
    //   }
    // });
    
    
    //res.sendStatus(200);
  } else {
    res.send("Enter full details");
    //res.sendStatus(403);
  }
  // } else {
  //   res.status(403);
  // }
});


//Not Used
router.get("/:name", (req, res) => {
  var name = req.params.name;

  userModel
    .find()
    .where("name")
    .equals(name)
    .exec((err, user) => {
      if (err) {
        res.send("error");
      }
      res.send("userExists");
    });
});

module.exports = router;
