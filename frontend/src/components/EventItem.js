import React from 'react'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles({

    root:{
        width:'100%',
        backgroundColor:'#1b5e20'

    },
    title:{
        color:'#ffffff',
        margin:'15px'
    },
    description:{
        color:'#ffffff',
        margin:'15px'
    },
    btn:{
        backgroundColor:'secondary'
    }
});

function EventItem(props) {

    const classes = useStyles();
    
    return (
       
        <Card className={classes.root}>
            <Typography variant='h6' className={classes.title}>{props.item.name}</Typography>
            <Typography varainat='paragraph' className={classes.description}>{props.item.description}</Typography>

            <Button color="primary" variant="contained" className={classes.btn}>
                Check it out!
            </Button>
        </Card>
        
    )
}

export default EventItem


