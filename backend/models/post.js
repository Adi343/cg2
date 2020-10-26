const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    streamName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    thumbnail:{
        type:String,
        require:false
    }
});

module.exports = mongoose.model("post",postSchema,"posts");