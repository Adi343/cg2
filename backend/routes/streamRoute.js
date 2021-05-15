const express = require("express");
const mongoose = require("mongoose");
const streamModel = require("../models/stream");
const postModel = require("../models/post");
let router = express.Router();
const authJwt = require("./authenticateJwt");
const e = require("express");
const { db } = require("../models/stream");
const userModel = require("../models/userModel");
const { json } = require("express");

router.get("/", (req, res) => {
  var data = ['abcd'];
  //const myStream = new streamModel({});
  //res.send("Inside stream get route");
  streamModel.find({},(err,docs)=>{
    // data.push(docs);
    // console.log(docs);
    res.send(docs);
  });
  
});
router.post("/", (req, res) => {
  var Name = req.body.name;
  console.log(Name);
  var admin = "admin";

  if (Name !== undefined) {
    var newStream = new streamModel();
    newStream.name = Name;

    streamModel.find({ name: Name }, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log("query data length is ", data.length);
        if (data.length > 0) {
          console.log("stream with same name exists!");
          res.send("stream with same name exists!");
        } else {
          newStream.save((err) => {
            if (err) {
              console.log('err is '+err);
            } else {
              //res.json(newStream);

              console.log("new stream created!");
              res.json({ message: "new stream created", newStream });
            }
          });
        }
      }
    });
  } else {
    res.send("enter full details!");
  }
});
// router.post("/:name", (req, res) => {
//   var Name = req.params.name;

//   var newStream = new stream({ name: Name });

//   // const query = stream.find().where("name").equals(name);

//   // console.log(query[0]);

//   // if (query != NaN) {
//   //   console.log("stream exists");
//   // } else {
//   newStream.save((err, newStream) => {
//     if (err) {
//       console.log("error creating stream");
//     } else {
//       res.json(newStream);
//     }
//   });
//   //res.send(query);
//   // newStream.save().then(() => {
//   //   console.log("stream created!");
//   //   res.send("user saved successfully!");
//   // });
//   //}
// });

router.put("/updateStream", (req, res) => {
  var newName = req.body.name;
  var id = req.body.id;
  console.log(id);
  if (id !== undefined && id !== "") {
    //var newStream = new stream(newName);
    stream.findById(id, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        stream.findByIdAndUpdate(id, { name: newName }, (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log("stream is updated");
            res.send("stream is updated");
          }
        });
      }
    });

    // stream.find({ name: newName }, (error, data) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     if (data.length > 0) {
    //       console.log("stream with this name already exists!");
    //       res.send("stream with this name already exists");
    //     } else {
    //       var id = data.id;
    //       stream.findByIdAndUpdate(id, { name: newName }, (error, result) => {
    //         if (error) {
    //           console.log(error);
    //         } else {
    //           console.log("update stream is ", result);
    //           res.send("stream is updated ", result);
    //         }
    //       });
    //     }
    //   }
    // });
  } else {
    res.send("Enter full details!");
  }
});

router.delete("/deleteStream", (req, res) => {
  console.log(req.body.name);
  if (req.body.name === undefined) {
    console.log("enter full details");
    res.send("enter full details");
  } else {
    stream.find({ name: req.body.name }, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        if (data.length == 0) {
          console.log("stream does'nt exist");
        } else if (data.length == 1) {
          console.log("data.length is 1");
          stream.deleteOne({ name: req.body.name }, (error) => {
            console.log(error);
          });
          res.status(200).send("deleted one stream by name ");
        } else {
          console.log("data.length is many");
          stream.deleteMany({ name: req.body.name }, (error) => {
            console.log("error is ", error);
          });
          res.status(200).send("deleted many users by name ");
        }
      }
    });
  }
});

//Dummy route
router.get("/addUser",(req,res)=>{

  res.send("Route works");

  //streamModel.findOne({_id:id}).
});

//Adds user to stream (works)
router.post("/:streamName/addUser/:userName",(req,res)=>{

  //var StreamId = req.data.streamId;
  var streamName = req.params.streamName;
  var userName = req.params.userName;
  
  var temp = [];
  var Id = req.body.id;

      streamModel.findOne({name:streamName},(error,doc)=>{

     if(error){
       console.log(err);
     }
     else{
       console.log('success');
       console.log('doc is '+doc);
       if(doc!=null){
        const streamObj = doc;
        const member = {
          name:userName
        };
 
        streamObj.members.push(member);
        streamObj.save((err)=>{
          if(err){
            console.log('error in saving');
          }
          else{
           res.send(JSON.stringify(doc));
          }
        });

       }
       
       
       //res.send(doc);

      
     }

    

  })

  //streamModel.findOne({name:streamName},).members.$push({id}).save();

  // streamModel.update({name:streamName},{$push:{temp}},(err,docs)=>{
    
  //   if(err){
  //     console.log(err);
  //   }
  //   else{
  //     console.log(docs);
  //   }
  // });

  // streamModel.findByIdAndUpdate({streamName},{$push:{members:id}},(err,docs)=>{

  //   if(err){
  //     console.log('err are '+err);
  //   }
  //   else{
  //     console.log('success');
  //   }
  // })

  // userModel.findById(id,(err,docs)=>{
  //   if(err){
  //     console.log('addUser error is '+err);
  //   }
  //   else{
  //     console.log('addUser docs are '+docs);
  //   }
  // })

  //streamModel.findOne({_id:id}).
});

//Deletes user from a stream(works)
router.delete("/deleteUser",(req,res)=>{
  var streamName = req.body.streamName;
  var userName = req.body.userName;

  console.log('Inside user delete route '+streamName+' '+userName);
  if(userName!=null){
    console.log('Inside userName check!');
    
    streamModel.updateOne({"name":streamName},{$pull:{"members":{"name":userName}}},(err,doc)=>{

      if(err){
        console.log(err)
      }
      else{
        console.log('doc is '+JSON.stringify(doc));
        console.log(userName+'deleted');
        res.send(doc);
      }
    })

  }
  
});

//Gets all users from a stream(works)
router.get("/getStreamUsers",(req,res)=>{

  var streamName = req.body.name;

  streamModel.findOne({"name":streamName},(err,doc)=>{

    if(err){
      console.log(err);
    }
    else{
      console.log('doc is '+JSON.stringify(doc));
      res.send(doc.members);
    }
  });
});

//Add post to a stream(works)
router.post("/:streamName/addPost",(req,res)=>{

  var streamNameTemp = req.params.streamName;
  var titleTemp = req.body.title;
  var contentTemp = req.body.content;

  post = new postModel();
  post.streamName = streamNameTemp;
  post.title = titleTemp;
  post.content = contentTemp;


  // var post = {
  //   streamName,
  //   title,
  //   content
  // }

streamModel.findOneAndUpdate({"name":streamNameTemp},{$push:{"posts":post}},{new:true},(err,doc)=>{
  
  if(err){
    console.log(err);
  }
  else{
    console.log(JSON.stringify(doc));
    res.send(doc);
  }
})
});

//Get a post from stream (works)

router.get("/getPost",(req,res)=>{
  
  var streamName = req.body.name;
  var titleNew = req.body.title;

  streamModel.find({"name":streamName},{"posts":{$elemMatch:{"title":titleNew}}},(err,doc)=>{

    if(err){
      console.log(err);
    }

    else{
      console.log(doc[0].posts[0]);
      res.send(doc[0].posts[0]);
    }
  });
});

//Get All Posts For a Stream(works) in json array

router.get("/:streamName/getAllPosts",(req,res)=>{

  var streamName = req.params.streamName;

  streamModel.find({"name":streamName},(err,doc)=>{
    if(err){
      console.log(err);
    }
    else{
      var streamTemp = doc[0];
      console.log('doc is -->');
      console.log(doc);
      console.log(streamTemp.posts);
      var res1 = JSON.stringify(streamTemp.posts);
      console.log(res1);
      res.send(res1);
      // streamTemp.posts.find({},(err,docs)=>{
      //   if(err){
      //     console.log(err);
      //   }
      //   else{
      //     res.send(docs);
      //   }
      // })
    }
  })
});



//Delete a Post with a known title(Works)
router.delete("/deletePost",(req,res)=>{

 
  var streamName = req.body.name;
  var title = req.body.title;
  streamModel.findOneAndUpdate({"name":streamName},{$pull:{"posts":{"title":title}}},{new:true},(err,doc)=>{

    if(err){
      console.log(err);
    }
    else{
      console.log(doc);
      res.send(doc);
    }
  });
});

//Delete All posts from a stream(works)

router.delete("/deleteAllPosts",(req,res)=>{
  
  var streamName = req.body.name;
  streamModel.findOneAndUpdate({"name":streamName},{$pull:{"posts":{}}},{new:true},(err,doc)=>{

    if(err){
      console.log(err);
    }
    else{
      console.log(doc);
      res.send(doc);
    }
  });

});

//update post title

router.get("/:streamName/updatePostTitle/:postName",(req,res)=>{

  var postName = req.params.postName;
  var streamName = req.params.streamName;
  console.log('req params ');
  console.log(req.params.postName);
  console.log(req.params.streamName);


  streamModel.findByIdAndUpdate({"name":streamName},{$set:{'streams.$[streamName].posts.$[post].title':'titleNew'}},{arrayFilters:[{'name':streamName},{'title':postName}]},(err,docs)=>{

    if(err){
      console.log('update error is '+err);
    }
    else{
      console.log(docs);
      res.send(docs);
    }
  });
  res.send(postName);
});

//router

module.exports = router;