const express = require("express");
const mongoose = require("mongoose");
const app = express();
const user = require("./models/userModel");
const auth = require("./routes/auth");
const signIn = require("./routes/signIn");
const streamRoute = require("./routes/streamRoute");
const { MONGOURI } = require("./keys.js");
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

const port = 5000;

mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb server");
});

app.use(express.json());
app.get("/", (req, res) => {
  /*io.on("connection", function (socket) {
    console.log("A user connected");

    //Whenever someone disconnects this piece of code executed
    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });
  });*/
  res.send("Welcome to japan!");
});

io.on("connection", function (socket) {
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function (data) {
    console.log(data);
  });
});
app.use("/signup", auth);
app.use("/signIn", signIn);
app.use("/stream", streamRoute);

app.listen(port, () => console.log("app is listening at port " + port));
