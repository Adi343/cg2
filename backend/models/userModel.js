const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: "String",
    required: true,
  },
  streams:{
    type:Array,
    required:false
  }
});

module.exports = mongoose.model("userModel", userSchema, "users");
