const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("post",postSchema,"posts");