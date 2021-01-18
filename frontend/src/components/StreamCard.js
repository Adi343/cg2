import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {TouchRipple} from '@material-ui/core/ButtonBase/TouchRipple';

import CardActions from "@material-ui/core/CardActions"
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:"700px",
        margin:"10px"
    },
    title:{
        fontWeight:200
    },
    joinButton:{
        
    }

}));
function StreamCard(props) {

    var title = props.title;
    //console.log(title);
    if(title==undefined){
        title = "This is a stream card";
    }
    const classes = useStyles();
    return (
        
        <Card className={classes.root} onClick={(e)=>(alert('cliidfjgi````'))}>
            <Typography class={classes.title} variant="h2">
                {title}
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, metus ut dignissim maximus, lectus neque condimentum dui, laoreet varius eros nisi quis nunc. Cras eget tortor sodales, pharetra nisl nec, ornare nisi. Proin volutpat ipsum risus, nec vestibulum est fringilla et. Vivamus bibendum orci vel leo condimentum vestibulum. Morbi fringilla sem in felis malesuada tempor. 
            </Typography>

            {/* <CardActions>
            
            </CardActions> */}
            <Button variant="outlined"className={classes.joinButton}>
                Join
            </Button>
        </Card>
        
    )
}

export default StreamCard
