const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const streamSchema = new Mongoose.Schema({
  name: {
    type: String,
    requires: true,
  },

  accountType: {
    type: String,
    required: true,
  },
});
