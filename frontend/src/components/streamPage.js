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
  const temp = ['Foo','Bar'];

  useEffect(() => {
    console.log("Use Effect called!");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
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

  return (

    <div>

    
    <Button variant="contained"  className={classes.createStreamButton} color="secondary" onClick={handleCreateStream}>
       Create Stream
    </Button>

    {createStream==true &&<Card className={classes.createStreamCard}>
      <TextField label="Stream Name" variant="outlined"/>
      <Button variant="contained" >
        Done
      </Button>
    </Card>}
    

    <StreamCard />
    

   
    </div>
  );
}

export default StreamPage;
