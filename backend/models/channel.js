const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const channelSchema = new Mongoose.Schema({
  name: {
    type: String,
    requires: true,
  },

  accountType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("channel", channelSchema, "channels");
