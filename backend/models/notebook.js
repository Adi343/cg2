const mongoose = rewquire("mongoose");
const objectId = mongoose.Schema.Types.objectId;

const notebookSchema = new mongoose.Schema({
    id:{
        type:objectId,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("notebook",notebookSchema,"notebooks");

