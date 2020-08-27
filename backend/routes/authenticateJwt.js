const express = require("express");
const jwt = require("jsonwebtoken");

const authenticateJwt = (req, res, next) => {
  console.log("Inside authenticate MiddleWare!");
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  let accessTokenSecret = "mySecretCode";
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.status(403);
      }
      req.user = user;
      console.log("Authentication successfully");
      next();
    });
  } else {
    console.log("No auth header!");
  }
};

module.exports = authenticateJwt;
