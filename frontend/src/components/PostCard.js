import React,{useState} from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Dialog from "@material-ui/core/Dialog";
import { Title } from "@material-ui/icons";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const axios = require("axios").default;
const useStyles = makeStyles((theme)=>({
    
    rootCard:{
        backgroundColor:"#e8f5e9",
        margin:"10px"
        
    }

}));

    
function PostCard(props){



    //console.log('PostCard props are '+JSON.stringify(props));
    const classes = useStyles();

    let title = props.title;
    let content = props.content;
    let id = props.id;
    const [editDialog,setEditDialog] = useState(false);
    const [deleteDialog,setDeleteDialog] = useState(false);
    const [titleNew,setTitleNew] = useState(title);
    const [contentNew,setContentNew] = useState(content);
    const editPost = ()=>{
        setEditDialog(!editDialog);
    }

    const deletePost = ()=>{
        setDeleteDialog(!deleteDialog);
    }

    const closeDeletePost = ()=>{
        setDeleteDialog(false);
    }

    const closeEditPost = ()=>{
        setEditDialog(false);
    }

    const deletePostFunction = ()=>{
        axios.delete("/post/stream1/deletePost",{data:{
            title
        }}).then(()=>{
            console.log("Post deleted!");
            setDeleteDialog(false);
            window.location.reload();
        });
        
    }

    const editPostFunction =()=>{
        axios.put("/post/stream1/updatePost",{"_id":id,"title":titleNew,"content":contentNew}).then((docs)=>{
            console.log("post edit docs");
            console.log(docs);
        })
    }

    const changeTitleNew = (e)=>{
        setTitleNew(e.target.value);
        
    }

    const changeContentNew = (e)=>{
        setContentNew(e.target.value);
        
    }

    return(

        <div>
            <Card className={classes.rootCard}>
            <h4>{props.title}</h4>
            <Typography>
                {props.content}                
            </Typography>
            <EditOutlinedIcon onClick={editPost}/>
            <DeleteOutlineOutlinedIcon onClick={deletePost}/>
            </Card>

            <Dialog open={deleteDialog} onBackdropClick={closeDeletePost} >
                <DialogTitle>
                    <Typography variant={"h5"}>
                    Delete Post?
                    </Typography>
                    
                </DialogTitle>

                <DialogActions>
          <Button onClick={closeDeletePost} >
            Cancel
          </Button>
          <Button  color="primary" onClick={deletePostFunction}>
            Delete
          </Button>
        </DialogActions>
            </Dialog>

            <Dialog open={editDialog} onBackdropClick={closeEditPost} >
                <DialogTitle>
                    <Typography variant={"h5"}>
                    Edit Post?
                    </Typography>
                    
                </DialogTitle>

                <TextField
            autofocus
            margin="dense"
            id="name"
            defaultValue={props.title}
            label="Change Title"
            type="text"
            variant="outlined"
            size="small"
            fullWidth="false"
            onChange={changeTitleNew}

          />
           
          <TextField
            autofocus
            margin="dense"
            id="content"
            type="text"
            variant="outlined"
            label="Change Content"
            defaultValue={props.content}
            size="normal"
            fullWidth="false"
            onChange={changeContentNew}
            multiline
          />
                <DialogActions>
          <Button onClick={closeEditPost} >
            Cancel
          </Button>
          <Button  color="primary" onClick={editPostFunction}>
            Edit
          </Button>
        </DialogActions>
            </Dialog>
            
        </div>

    );
}

export default PostCard