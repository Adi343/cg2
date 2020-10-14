const mongoose = rewquire("mongoose");

const notebookSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("notebook",notebookSchema,"notebooks");

