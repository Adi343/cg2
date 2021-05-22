const express = require("express");
const streamModel = require("../models/stream");
const notebookModel = require("../models/notebook");
let  router = express.Router();

router.get("/",(req,res)=>{
    res.send("Inside Notebook Route");
});

//Create new NoteBook

router.post("/:streamName/:notebookName",(req,res)=>{

    const streamName = req.params.streamName;
    const notebookName = req.params.notebookName;
    let check = '';
    //check if notebook exists in notebook collection and stream 

    streamModel.find({"name":streamName},{"notebooks":{$elemMatch:{"name":notebookName}}},(err,doc)=>{

        if(err){
          console.log(err);
        }
    
        else{
          console.log(doc[0].notebookName);
          check = doc[0].notebooks;
        }
      });

      if(check.length===0){
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

      

    });


module.exports = router;