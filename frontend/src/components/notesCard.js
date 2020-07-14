import React from "react";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/styles";
import { sizing } from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    width: "10%",
    display: "inline-block",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
});

function NotesCard(props) {
  const classes = useStyles();

  const handleCard = () => {
    //alert(props.subjectName + " Card Pressed!");
  };
  return (
    <Card className={classes.root} onClick={() => handleCard()}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {props.subjectName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotesCard;
