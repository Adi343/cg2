import React, { useState, Fragment, useEffect,useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from "@material-ui/core/Paper";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";

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
import CreateStreamDialog from "./createStreamDialog";
import CreateStream from "./createStream";
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import HomeIcon from "@material-ui/icons/Home";
import BookIcon from "@material-ui/icons/Book";
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import Grid from "@material-ui/core/Grid";
import GridItem from "@material-ui/core/Grid";
import StreamPage from "./streamPage";
import UserHomePage from "./UserHomePage";
import darkTheme from "../darkTheme"
const drawerWidth = 175;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Poppins",
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
  },
  title: {
    
    fontWeight: 700,
    fontFamily: "Poppins",
    color:'#D50000'
  },
  searchBox: {},
  signInDialog: {},
  signUpDialog: {},
  block: {},
  createStreamDialog: {},
  createStream: {},

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
    //default value of spacing is
    padding: theme.spacing(0),
  },
}));

const useDarkStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Poppins",
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
  },
  title: {
    color: "white",
    fontWeight: 700,
    fontFamily: "Poppins",
  },
  searchBox: {},
  signInDialog: {},
  signUpDialog: {},
  block: {},
  createStreamDialog: {},
  createStream: {},

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

// const darkTheme = createMuiTheme({
//   palette: {

//     type:'dark',
//     primary: {
//       main: "#000000",
//     },
//     secondary: {
//       main: "#063f27",
//     },
//   },
// });

function SideBar(props) {
  //const [window, setWindow] = useState(0);
  const [menuItem, setMenuItem] = useState(0);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme(darkTheme);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [comp, changeComp] = React.useState(0);
  const [signIn, setSignIn] = React.useState("no");
  // var prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const [darkMode,setDarkMode] = useState(prefersDarkMode);
  var token = localStorage.getItem("jwt");
  var id = localStorage.getItem("id");

  

  // const theme1 = React.useMemo(() =>
  //   createMuiTheme({
  //     palette: {
  //       type: darkMode ? "dark" : "light",
  //       primary: {
  //         main: '#ffffff',
  //       },
  //       secondary: {
  //         main: "#063f27",
  //       }
  //     }
  //   })
  // );
  // useEffect(() => {
  //   setDarkMode(prefersDarkMode);
  // }, [prefersDarkMode]);
 
  




  useEffect(() => {
    console.log("SideBar useEffect called!");

    //console.log("localStorage.getItem(jwt)", token);

    if (token === null || token === undefined) {
      setSignIn(false);
    } else if (token != null && token != undefined) {
      setSignIn(true);
    }
    console.log("outside if token is", token);
    if (typeof token !== undefined || typeof token !== "") {
      console.log("Inside if ");
      console.log("token is ", token);
      console.log("id is "+id);
      setSignIn("yes");
    }
    console.log("After if signIn is", signIn);
  }, []);

  //Not used
  function ChangeComponent(i) {
    //console.log("i value is " + i);
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

      case 4:
        //streams
        alert('stream presssed!');
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
      case 4:
        return <StreamPage />;
        break;

      default:
        return <Feed />;
    }
  };
  function handleNavBarItems(item) {
    switch (item) {
      case "Events":
        // return <Feed />;
        setMenuItem(0);
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
      case "Streams":
        setMenuItem(4);
        break;
    }
  }

  // const setSignIn = (status) => {
  //   if (status) {
  //     signIn = true;
  //   } else {
  //     signIn = false;
  //   }
  // };

  const createStream = (e) => {};

 



  function setTheme  () {
    // setDarkMode(!darkMode);
    // console.log('darkMode is '+darkMode)
  };

 

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Events", "Notes", "Messages", "Classes", "Streams"].map(
          (text, index) => (
            <ListItem button key={text} onClick={() => handleNavBarItems(text)}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {text === "Events" && <EventOutlinedIcon color="primary" />}
                {text === "Notes" && <BookOutlinedIcon color="secondary"/>}
                {text === "Messages" && <ForumOutlinedIcon color="secondary" />}
                {text === "Classes" && <SchoolOutlinedIcon color="secondary"/>}
                {text === "Streams" && <InboxOutlinedIcon color="secondary"/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
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
            <Grid
              container
              spacing={10}
              alignItems="center"
              justify="space-between"
            >
              <Grid item xs={3}>
                <Typography variant="h5"  className={classes.title}>
                  CollegeGram
                </Typography>
              </Grid>

              <Grid item xs={3}>
                {/* <TextField
                  variant="filled"
                  placeholder="Search"
                  className={classes.searchBox}
                /> */}
              </Grid>

              <Grid item xs={6}>
                <Grid
                  container
                  alignItems="center"
                  justify="flex-end"
                  direction="row"
                >
                  <Brightness4Icon fontSize="default" onClick={setTheme}/>
                  <CreateStreamDialog className={classes.createStreamDialog} />
                  <CreateStream className={classes.createStream} />
                   {console.log("token is ", token)} 
                  {/*console.log(token.length)*/} 
                  { token!==null && <Block signIn={true} />}
                  {token===null &&<Block signIn={false} />} 
                </Grid>
              </Grid>
            </Grid>
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
