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
import {makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/core";
import darkTheme from "../darkTheme";
import NotebookCard from "./NotebookCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Bar from "./Bar";
const axios = require("axios").default;

const useStyles = makeStyles((theme)=>({
  streamTitle:{
    backgroundColor:"#ffffff"
  },
  dialog:{
    
  }
}));

export default function Dashboard() {

  //var streamName = props.streamName;
  let {streamName} = useParams();
  console.log(useParams());

  const [posts, setPosts] = useState([]);
  const [openDialog,setOpenDialog] = useState(false);
  const [openNotebookDialog,setOpenNotebookDialog] = useState(false);
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [notebookTitle,setNotebookTitle] = useState('');
  const [notebooks,setNotebooks] = useState([]);
  const [createEvent,setCreateEvent] = useState(false);
  const [eventTitle,setEventTitle] = useState('');
  const [eventContent,setEventContent] = useState('');
  const [eventTime,setEventTime] = useState('');


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

      axios.get("/stream/"+streamName+"/getAllNotebooks").then((response)=>{
        console.log('response is '+JSON.stringify(response.data));
        setNotebooks(response.data);
  
      }).catch((error)=>{
        console.log('error is '+error);
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

  const closeNotebookDialog = () =>{
    setOpenNotebookDialog(false);
  }

  const handleNoteTitleChanged = (e) =>{
    setNotebookTitle(e.target.value);
  }

  const createNotebook = () =>{

    if(notebookTitle=='' || notebookTitle==undefined){
      alert('empty notebok title');
    }
    else{
      axios.post('/notebook/'+streamName+'/'+notebookTitle).then((response)=>{
        if(response=="cannot create"){
          alert('cannot create notebook ');
        }
      })
    }
  }

  const eventDialog = (e)=>{
    setCreateEvent(!createEvent);
  }

  const createEventDialog = ()=>{
    alert('create event!')
  }

  const closeEventDialog = () =>{
    setCreateEvent(false);
  }

  const handleEventTitleChange = (e) =>{
    setEventTitle(e.target.value);
  }

  const handleEventContentChange = (e) =>{
    setEventContent(e.target.value);
  }

  const handleEventTimeChange = (e) =>{
    setEventTime(e.target.value);
  }

  const handleCreateEvent = () =>{

    if(eventTitle!='' && eventContent!='' && eventTime!=''){
      const data = {
        'title':eventTitle,
        'content':eventContent,
        'eventTime':eventTime,
        'streamName':streamName
      }
      axios.post('/event/createEvent',data).then((response)=>{
        //console.log('axios response is '+response.data);
        setCreateEvent(false);
      })
    }
    else{
      alert('enter full details!');
    }

   
  }


  const classes = useStyles();
  return (
  
    <div className={classes.streamTitle}>
      {/* <Bar /> */}
      <h2>{streamName}</h2>
      <Typography >Stream Description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices ut arcu non dignissim. Pellentesque commodo consequat erat id blandit. Donec pretium mattis tortor at tincidunt. Quisque sagittis nunc quam, non imperdiet augue ullamcorper molestie. Vivamus nec mi metus.</Typography>
      <Chip label="Post" clickable onClick={chipClicked} color="secondary" />
      <Chip label="Join" clickable onClick={joinChipClicked} color="default" />
      <Chip label="Create NoteBook" color="default" onClick={()=>{setOpenNotebookDialog(true)}}/>
      <Chip label="Create Event" color="secondary" onClick={eventDialog}/>
      <Card>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >

          {notebooks.map((notebook)=>{

            //return <Card variant="outlined"><Typography variant="body1">{notebook}</Typography></Card>
            return <NotebookCard title={notebook.name}/>
          })}

          <NotebookCard title={"Notebook1"}/>

        
       
        </Grid>
      </Card>
      {console.log('posts')}
      {console.log(posts)}
    {posts.length != 0 && posts.map((post)=>{
      //console.log('Inside posts.forEach');
      //console.log(post.content);
      return <PostCard title={post.title} content= {post.content}/>
    })}
    {posts.length == 0 && <PostCard title="No Posts" content="This stream has no posts!"/>}

    <Dialog open={openDialog} onBackdropClick={()=>{setOpenDialog(false)}}>
      <DialogTitle>Create Post</DialogTitle>
      <DialogContentText>
            Enter Title and Content of the post.
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

    <Dialog open={openNotebookDialog} onBackdropClick={()=>{setOpenNotebookDialog()}}>
    <DialogTitle>Create Notebook</DialogTitle>

    <DialogContentText>
            Enter Title Of the notebook.
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
            onChange = {handleNoteTitleChanged}
          />

          

        <DialogActions>
          <Button onClick={closeNotebookDialog} >
            Cancel
          </Button>
          <Button  color="primary" onClick={createNotebook}>
            Create
          </Button>
        </DialogActions>


    </Dialog>

    <Dialog open={createEvent} className={classes.dialog} onBackdropClick={closeEventDialog}>  
    <DialogTitle>Create Event</DialogTitle>

          <TextField
            autofocus
            margin="dense"
            id="name"
            label="Enter Title"
            type="text"
            variant="outlined"
            size="small"
            fullWidth="false"
            onChange={handleEventTitleChange}
          />

          <TextField
            autofocus
            margin="dense"
            id="content"
            label="Enter Content"
            type="text"
            variant="outlined"
            size="normal"
            fullWidth="false"
            multiline
            onChange={handleEventContentChange}
          />

<form className={classes.container} noValidate>
  <TextField
    id="datetime-local"
    label="Event Time"
    type="datetime-local"
    defaultValue=""
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    onChange={handleEventTimeChange}
  />
</form>



        <DialogActions>
          <Button onClick={closeEventDialog} >
            Cancel
          </Button>
          <Button  color="primary" onClick={handleCreateEvent}>
            Post
          </Button>
        </DialogActions>
    </Dialog>


    </div>
    
  );
}
