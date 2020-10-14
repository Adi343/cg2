const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

module.exports = new mongoose.model("class",classSchema,"classes");