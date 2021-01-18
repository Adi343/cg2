import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";
import StreamCard from "./StreamCard";
const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  title: {
    color: "textPrimary",
  },
  cardPage: {
    color: red,
    backgroundColor: red,
    background: red,
  },
  createStreamButton:{
    color:red,
    backgroundColor:red
  },
  createStreamCard:{
    maxWidth:"700px",
    marginTop:"10px",
    marginBottom:"10px",
    backgroundColor:"grey"
  }
}));

function StreamPage() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [createStream,setCreateStream] = useState(false);
  const [streamName,setStreamName] = useState('');
  const temp = ['Foo','Bar'];

  useEffect(() => {
    console.log("Use Effect called!");
    axios
      .get("/stream")
      .then((response) => {
        //setPosts(response.data);
        console.log('response is '+JSON.stringify(response.data));
        setPosts(response.data);

      })
      .catch((error) => {
        //console.log("Finished!");
        console.log("error is " + error);
      });
  }, []);

  const handleCreateStream = (e) =>{
    setCreateStream(!createStream);
  }

  const handleChange = (e) =>{
    setStreamName(e.target.value);
  }

  const handleCreateButton = (e) =>{

    var name = streamName;
    //var temp = document.getElementById("input").nodeValue;
    //console.log('temp is '+temp);
    axios.post("/stream",{name}).then((response)=>{
      console.log("response for creating stream is "+JSON.stringify(response.data))
    }).catch((error)=>{
      console.log('error is '+error)
    });
  }

  return (

    <div>

    
    <Button variant="contained"  className={classes.createStreamButton} color="secondary" onClick={handleCreateStream}>
       Create Stream
    </Button>

    {createStream==true &&<Card className={classes.createStreamCard}>
      <TextField label="Stream Name" variant="outlined" name="input" onChange={handleChange}/>
      <Button variant="contained" onClick={handleCreateButton}>
        Done
      </Button>
    </Card>}

    {/* {posts.map((post.name)=>{
      return <h2>{post.name}</h2>
    })} */}
    {/*console.log('posts are '+JSON.stringify(posts))*/}
    {posts.map((post)=>{
      return <StreamCard title={post.name}/>
    })}

    </div>
  );
}

export default StreamPage;
