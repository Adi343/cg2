const express = require("express");
const mongoose = require("mongoose");
const postModel = require("../models/post");
let router = express.Router();

router.get("/", (req, res) => {

  postModel.find({}).exec().then(doc=>{
    res.status(200).json(doc);
    console.log(doc);
  }).catch(err =>{
    console.log(err)
  });
  // res.json({ message: "touche" });
});

router.get("/:streamName",(req,res)=>{

  var stream = req.params.streamName;
  console.log("stream is "+stream);
  postModel.find({"streamName":stream},(err,doc)=>{


    if(err){
      console.log(err);
    }
    else{
      console.log("inside else");
      res.send(doc);
    }
  });
});

//Add post to a stream(works)
router.post("/:streamName/addPost",(req,res)=>{

  var streamNameTemp = req.params.streamName;
  var titleTemp = req.body.title;
  var contentTemp = req.body.content;

  const post = new postModel();
  post.streamName = streamNameTemp;
  post.title = titleTemp;
  post.content = contentTemp;

post.save((err,doc)=>{

  if(err){
    console.log("post save error is "+err);
  }
  else{
    console.log("post saved!"+doc);
    res.send("post added!");
  }
})


});



//Get a post from stream (works)

router.get("/:streamName/getPost",(req,res)=>{
  
  var streamName = req.params.streamName;
  var titleNew = req.body.title;

  postModel.findOne({"title":titleNew},(err,docs)=>{

    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
      res.send(docs);
    }
  }
  );

  });


//Get All Posts For a Stream(works) in json array

router.get("/:streamName/getAllPosts",(req,res)=>{

  var streamName = req.params.streamName;

  postModel.find({"streamName":streamName},(err,doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(doc);
      res.send(doc);
    }
  })
});

//Delete a Post with a known title(Works)
router.delete("/:streamName/deletePost",(req,res)=>{

 
  var streamName = req.params.streamName;
  var title = req.body.title;

  postModel.findOneAndDelete({"title":title},(err,docs)=>{

    if(err){
      console.log(err);
    }
    else{
      res.send(docs);
      console.log(docs);
    }
  });

});


//Delete All posts from a stream(works)

router.delete("/:streamName/deleteAllPosts",(req,res)=>{
  
  var streamName = req.params.streamName;

  postModel.deleteMany({"streamName":streamName},(err,docs)=>{

    if(err){
      console.log(err);
    }

    else{
      console.log(docs);
      res.send(docs);
    }
  });

});

//update post

router.put("/:streamName/updatePost",(req,res)=>{

  var streamName = req.params.streamName;
  var title = req.body.title;
  var content = req.body.content;
  var id = mongoose.mongo.ObjectID(req.body._id);

  postModel.findOneAndUpdate({"streamName":streamName,"_id":id},{"title":title,"content":content},{"upsert":true},(err,docs)=>{

    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
      res.send(docs);
    }
  
  });
});
module.exports = router;
