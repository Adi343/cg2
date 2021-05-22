const mongoose = require("mongoose");

const notebookSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    stream:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("notebook",notebookSchema,"notebooks");

