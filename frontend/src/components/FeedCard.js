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
        title="Paella dish"
        image="data:image/png;base64,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"
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
