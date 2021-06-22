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
            margin:"10px",
            color:"#BDBDBD",
            textOverflow:"ellipsis",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"
            
    },
    text:{
        color:"#000000",
        margin:"10px",
        border:"10px",
        wordWrap: "break-word",
        align:"center"
    }

}));

function NotebookCard(props) {

    const classes = useStyles();
    const title = props.title;
    const streamName = props.stream;
    return (
        <div>
            <Card className={classes.root}>
                <Typography className={classes.text} variant='h7' nowrap paragraph display="inline">{title}</Typography>
                <Typography variant="h9">{streamName} </Typography>
                </Card>            
        </div>
    )
}

export default NotebookCard
