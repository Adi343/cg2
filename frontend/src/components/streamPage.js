import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
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
}));

function StreamPage() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
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

  return (

    <StreamCard />
    //  <Card className={classes.cardPage}>
    //    {/* <h1 className={classes.title}>This is paper!</h1> */}
    //    <Typography variant="h4" className={classes.Cardtitle}>
    //      CARD TITLE
    //    </Typography>
    //  </Card>

    // {temp.map((num)=>(
    //   <h1>{num}</h1>
    // ))}

    

    
    
  );
}

export default StreamPage;
