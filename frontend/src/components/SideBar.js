import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  makeStyles,
  useTheme,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import NotesCard from "./notesCard";
import NotesGrid from "./NotesGrid";
import Messages from "./Messages";
import Feed from "./Feed";
import Classes from "./Classes";
import { red } from "@material-ui/core/colors";
import Block from "./Block";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    display: "flex",
  },
  title: {
    flex: 1,
    color: "black",
  },
  searchBox: { flex: 1 },
  signInDialog: { flex: 1 },
  signUpDialog: { flex: 1 },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  color: "#c4c0c1",
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
});

function SideBar(props) {
  //const [window, setWindow] = useState(0);
  const [menuItem, setMenuItem] = useState(0);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [comp, changeComp] = React.useState(0);
  //const [signUp, setSignUp] = React.useState(false);

  function ChangeComponent(i) {
    console.log("i value is " + i);
    switch (i) {
      case 0:
        return <Feed />;
        break;

      case 1:
        return <NotesGrid />;
        break;

      case 2:
        //MEssages
        break;

      case 3:
        //Classes
        break;

      default:
        return <Feed />;
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    switchFunction();
  }, [menuItem]);

  const switchFunction = () => {
    switch (menuItem) {
      case 0:
        return <Feed />;
        break;
      case 1:
        return <NotesGrid />;
        break;
      case 2:
        return <Messages />;
        break;
      case 3:
        return <Classes />;
        break;

      default:
        return <Feed />;
    }
  };
  function handleNavBarItems(item) {
    switch (item) {
      case "Feed":
        return <Feed />;
        break;

      case "Notes":
        setMenuItem(1);
        break;
      case "Messages":
        setMenuItem(2);
        break;
      case "Classes":
        setMenuItem(3);
        break;
    }
  }

  const createStream = (e) => {
    
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Feed", "Notes", "Messages", "Classes"].map((text, index) => (
          <ListItem button key={text} onClick={() => handleNavBarItems(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/*<List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>*/}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={myTheme}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap className={classes.title}>
              CollegeGram
            </Typography>
            <TextField
              variant="filled"
              placeholder="Search"
              className={classes.searchBox}
            />
            <Button onClick={createStream}>Create Stream</Button>
            <Block signIn={false} />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/*<Typography paragraph>Lorem ipsum dolor sit amet</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel.
        </Typography>
        */}

        <Fragment>{switchFunction()}</Fragment>
      </main>
    </div>
  );

  SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
}

export default SideBar;
