const express = require("express");
const streamModel = require("../models/stream");
const notebookModel = require("../models/notebook");
let  router = express.Router();

router.get("/",(req,res)=>{
    res.send("Inside Notebook Route");
});

//Create new NoteBook (checks for duplicates also)(works)

router.post("/:streamName/:notebookName",(req,res)=>{

    const streamName = req.params.streamName;
    const notebookName = req.params.notebookName;
    //check if notebook exists in notebook collection and stream 

     notebookModel.countDocuments({"name":notebookName},(err,docs)=>{

      if(err){
        console.log(err);
      }
      else{
        //console.log('inside else');
        if(docs==0){

          const notebook = new notebookModel();
          notebook.name = notebookName;
          notebook.stream = streamName;
          notebook.save((err,doc)=>{

            if(err){
                console.log(err);
            }
            else{
                console.log(doc);
            }
          })
          res.send(notebook);

        }
        else{
          res.send("Cannnot create");
        }
      }

     });
      

    });


module.exports = router;