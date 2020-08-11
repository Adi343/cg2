const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const streamSchema = new mongoose.Schema({
  name: {
    type: String,
    requires: true,
  },

  accountType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("stream", streamSchema, "streams");
