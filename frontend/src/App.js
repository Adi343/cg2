import React from "react";
import "./App.css";
import signup from "./components/signup";
import Home from "./components/home";
import SideBar from "./components/SideBar";
import header from "./components/header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
 //import createHistory from 'history/createBrowserHistory';
import Test from "./components/test";
import Test1 from "./components/test1";
import NotesCard from "./components/notesCard";
import NotesGrid from "./components/NotesGrid";
import { createMuiTheme, MuiThemeProvider,ThemeProvider } from "@material-ui/core";
import SignUpDialog from "./components/SignUpDialog";
import UserPage from "./components/UserPage";
import dashboard from "./components/dashboard";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: `"Roboto", sans-serif`,
      fontSize: 15,
      fontWeightLight: 100,
      fontWeightRegular: 100,
      fontWeightMedium: 100,
    },
    palette:{
      primary:{
        main:"#1b5e20"
      },
      secondary:{
        main:"#55470e"
      }
    }
  });

  // const darkTheme = createMuiTheme({
  //   typography: {
  //     fontFamily: `"Poppins", sans-serif`,
  //     fontSize: 20,
  //     fontWeightLight: 100,
  //     fontWeightRegular: 100,
  //     fontWeightMedium: 100,
  //   },
    
  // });
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Router >
        <Switch>
          <Route exact path="/userPage/" component={UserPage} />
          <Route  path="/stream/:streamName" component = {dashboard} />
          <Route exact path="/" component={SideBar} />
        </Switch>
      </Router>
      {/*<SideBar /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
