import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";
import StreamCard from "./StreamCard";
const axios = require("axios").default;


const useStyles = makeStyles((theme)=>({

  title:{
    color:'textPrimary'
  },
  cardPage:{
    color:red,
    backgroundColor:red,
    background:red
  }

}));

function StreamPage() {


  const classes = useStyles();
  const [posts,setPosts] = React.useState([]);

  axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    console.log('axios!');
    setPosts(response.data)
  }).then(()=>{
    console.log('Finished!')
  })


  return (
    // <Card className={classes.cardPage}>
    //   {/* <h1 className={classes.title}>This is paper!</h1> */}
    //   <Typography variant="h4" className={classes.Cardtitle}>
    //     CARD TITLE
    //   </Typography>
    // </Card>

    <StreamCard />
  );
}

export default StreamPage;
