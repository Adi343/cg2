const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const streamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  members:{
    type:Array,
    required:false
  },

  posts:{
    type:Array,
    required:false
  },

  notebooks:{
    type:Array,
    required:false
  }

  // moderators:{
  //   type:Array,
  //   required:false
  // }
  

  /*accountType: {
    type: String,
    required: true,
  },*/
});

module.exports = mongoose.model("stream", streamSchema, "streams");
