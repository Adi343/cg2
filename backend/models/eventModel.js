const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const eventModelSchema = new mongoose.Schema({

  title:{
      type:String,
      required:true
  },
  content:{
      type:String,
      required:true
  },
  eventTime:{
      type:String,
      required:true
  },
  streamName:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("eventModel", eventModelSchema, "events");