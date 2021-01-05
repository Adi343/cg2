import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:"700px"
    },
    title:{
        fontWeight:200
    }

}));
function StreamCard() {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Typography class={classes.title} variant="h2">
                This is a stream card!
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, metus ut dignissim maximus, lectus neque condimentum dui, laoreet varius eros nisi quis nunc. Cras eget tortor sodales, pharetra nisl nec, ornare nisi. Proin volutpat ipsum risus, nec vestibulum est fringilla et. Vivamus bibendum orci vel leo condimentum vestibulum. Morbi fringilla sem in felis malesuada tempor. 
            </Typography>

            {/* <CardActions>
            
            </CardActions> */}
        </Card>
    )
}

export default StreamCard
