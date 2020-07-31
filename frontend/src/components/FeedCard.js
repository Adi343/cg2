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
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#E6E6FA",
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
    backgroundColor: red[500],
  },
}));

function FeedCard(props) {
  const title = props.title;
  const content = props.content;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Paella dish"
      />
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default FeedCard;
