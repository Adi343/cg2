import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import darkTheme from "../darkTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    background: "#e8f5e9",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
     backgroundColor: green[500],
  },
}));

function FeedCard(props) {
  const title = props.title;
  const content = props.content;
  const imgsrc = props.thumbnail;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const names = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'];
  var name = names[Math.floor(Math.random()*11)]
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} backgroundColor="blue">
            {name}
          </Avatar>
        }
        title={title}
        //  subheader="September 14, 2016"
      />

      {/* <CardMedia
        className={classes.media}
        title="Paella dish"
        image={imgsrc}
      /> */}

      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{props.name}</Typography>
          
        </CardContent>
      </Collapse>
    </Card>    
  );
}

export default FeedCard;
