import React from 'react'
import { Card } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme)=>({

    root:{
            background:"#f0f0f0",
            width:"150px",
            height:"200px",
            margin:"10px"
    },
    text:{
        color:"#000000",
        margin:"10px"
    }

}));

function NotebookCard(props) {

    const classes = useStyles();
    const title = props.title;
    return (
        <div>
            <Card className={classes.root}>
                <Typography className={classes.text} variant="h5" paragraph={true}>{title}</Typography>
                </Card>            
        </div>
    )
}

export default NotebookCard