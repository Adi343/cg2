import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import FormDialog from "./dialog";
import ReactDOM from "react-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  let temp = false;
  const [openDialog, setOpenDialog] = useState(true);
  //console.log("open dialog value is " + openDialog);

  {
    /*useEffect(() => {
    setOpenDialog(true);
  });
*/
  }
  function showDialog() {
    setOpenDialog(true);
    console.log("open dialog value is " + openDialog);
    temp = true;
  }

  return (
    <div className={classes.root}>
      <AppBar variant="dense" position="static" color="Black">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Cg
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => showDialog()}
          >
            Signup
          </Button>
          <Button variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
