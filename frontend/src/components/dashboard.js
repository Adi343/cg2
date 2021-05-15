import React , { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PostCard from "./PostCard";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import NotebookCard from "./NotebookCard";
const axios = require("axios").default;
export default function Dashboard() {

  //var streamName = props.streamName;
  let {streamName} = useParams();
  console.log(useParams());

  const [posts, setPosts] = useState([]);
  const [openDialog,setOpenDialog] = useState(false);
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');

  var notebooks = ["Linear Control Systems","System On Chip Architecture","VLSI"];
  useEffect(() => {
    console.log("Use Effect called!");
    axios
      .get("/stream/"+streamName+"/getAllPosts")
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

  const chipClicked = ()=>{
    setOpenDialog(true);
  }

  const joinChipClicked = ()=>{
    var userName = localStorage.getItem("userName");
      axios.post("/stream/"+streamName+"/addUser/"+userName).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      });
  }

  const closeDialog = () =>{
    setOpenDialog(false);
  }

  const handleTitleChange = (e) =>{
    setTitle(e.target.value);
  }

  const handleContentChange = (e) =>{
    setContent(e.target.value);
  }

  const handleSubmit = () =>{

    if(title!='' && content!=''){

      axios.post("/stream/"+streamName+"/addPost",{
        'title':title,
        'content':content
      }).then((response) => {
        //setPosts(response.posts);
        console.log('response is '+JSON.stringify(response.data));
        setPosts(response.data.posts);
        closeDialog();

      })
      .catch((error) => {
        //console.log("Finished!");
        console.log("error is " + error);
      });
    }
  }


  return (
    <div>
      <h2>{streamName}</h2>
      <Typography>Stream Description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices ut arcu non dignissim. Pellentesque commodo consequat erat id blandit. Donec pretium mattis tortor at tincidunt. Quisque sagittis nunc quam, non imperdiet augue ullamcorper molestie. Vivamus nec mi metus.</Typography>
      <Chip label="Post" clickable onClick={chipClicked} color="secondary" />
      <Chip label="Join" clickable onClick={joinChipClicked} color="default" />

      <Card>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >

          {notebooks.map((notebook)=>{

            //return <Card variant="outlined"><Typography variant="body1">{notebook}</Typography></Card>
            return <NotebookCard title={notebook}/>
          })}

          <NotebookCard title={"Notebook1"}/>

        
       
        </Grid>
      </Card>
      {console.log('posts')}
      {console.log(posts)}
    {posts.length != 0 && posts.map((post)=>{
      console.log('Inside posts.forEach');
      console.log(post.content);
      return <PostCard title={post.title} content= {post.content}/>
    })}
    {posts.length == 0 && <PostCard title="No Posts" content="This stream has no posts!"/>}

    <Dialog open={openDialog}>
      <DialogTitle>Create Post</DialogTitle>
      <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>

          <TextField
            autofocus
            margin="dense"
            id="name"
            label="Enter Title"
            type="text"
            variant="outlined"
            size="small"
            fullWidth="false"
            onChange = {handleTitleChange}
          />

          <TextField
            autofocus
            margin="dense"
            id="name"
            label="Enter Content"
            type="text"
            variant="outlined"
            size="normal"
            fullWidth="false"
            multiline
            onChange={handleContentChange}
          />

        <DialogActions>
          <Button onClick={closeDialog} >
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Post
          </Button>
        </DialogActions>
    
    </Dialog>
    </div>
  );
}
