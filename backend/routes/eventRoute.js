const express = require("express");
const eventModel = require("../models/eventModel");
let  router = express.Router();

router.get("/",(req,res)=>{
    res.send("Inside Event Route");
});

router.post("/createEvent",(req,res)=>{

    const title = req.body.title;
    const content = req.body.content;
    const eventTime = req.body.eventTime;
    const streamName = req.body.streamName;

    const event = new eventModel({title,content,eventTime,streamName});

    try{
        event.save().then(()=>{
            res.send('event created!');
        });
    }
    catch(err){
        console.log('event create error is '+err);
    }
    

});


module.exports = router;