import React from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme)=>({
    
    rootCard:{
        backgroundColor:"#e8f5e9",
        margin:"10px"
        
    }

}));

    
function PostCard(props){



    console.log('PostCard props are '+JSON.stringify(props));
    const classes = useStyles();

    let title = props.title;
    let content = props.content;
    return(

        <div>
            <Card className={classes.rootCard}>
            <h3>{props.title}</h3>
            <p>
              {props.content}
            </p>
            </Card>
            
        </div>

    );
}

export default PostCard