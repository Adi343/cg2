const express = require("express");
const jwt = require("jsonwebtoken");

const randomAccessToken = "myRandomAccessToken";

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.auhtorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.status(403);
      }
      req.user = user;
      next();
    });
  }
};

module.exports(authenticateJwt);
