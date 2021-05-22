const express = require("express");
const mongoose = require("mongoose");
const app = express();
const user = require("./models/userModel");
const auth = require("./routes/auth");
const signIn = require("./routes/signIn");
const streamRoute = require("./routes/streamRoute");
const postRoute = require("./routes/postRoute");
const notebookRoute = require("./routes/notebookRoute");
const { MONGOURI } = require("./keys.js");
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");
var cookieParser = require("cookie-parser");
const { nextTick } = require("process");

const port = 5000;
//const port = 27017;
const mongoUrl = "mongodb://127.0.0.1/cgram";

//mongoose.connect(MONGOURI);
mongoose.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb local server");
});

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  /*io.on("connection", function (socket) {
    console.log("A user connected");

    //Whenever someone disconnects this piece of code executed
    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });
  });*/
  var cookie = req.cookies.cookieName;
  if (cookie == undefined) {
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie("myCookie", randomNumber, { maxAge: 900000, httpOnly: true });
    console.log("cookie created successfully");
  } else {
    console.log("Cookie exists");
  }
  res.send("Welcome to japan!");
  //nextTick();
});

// io.on("connection", function (socket) {
//   socket.emit("news", { hello: "world" });
//   socket.on("my other event", function (data) {
//     console.log(data);
//   });
// });

app.use("/signup", auth);
app.use("/signIn", signIn);
app.use("/stream", streamRoute);
app.use("/post", postRoute);
app.use("/notebook",notebookRoute);
app.listen(port, () => console.log("app is listening at port " + port));
