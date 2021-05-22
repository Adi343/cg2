import React from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


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
    return(

        <div>
            <Card className={classes.rootCard}>
            <h4>{props.title}</h4>
            <Typography>
                {props.content}                
            </Typography>
            </Card>
            
        </div>

    );
}

export default PostCard