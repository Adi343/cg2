import React from "react";
import "./App.css";

import signup from "./components/signup";
import Home from "./components/home";
import SideBar from "./components/SideBar";
import header from "./components/header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Test from "./components/test";
import Test1 from "./components/test1";
import NotesCard from "./components/notesCard";
import NotesGrid from "./components/NotesGrid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import SignUpDialog from "./components/SignUpDialog";
import UserPage from "./components/UserPage";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: 20,
      fontWeightLight: 100,
      fontWeightRegular: 100,
      fontWeightMedium: 100,
    },
  });
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={SideBar} />
          <Route path="/signup" component={SignUpDialog} />
          <Route exact path="/userPage/" component={UserPage} />
        </Switch>
      </Router>
      {/*<SideBar /> */}
    </div>
  );
}

export default App;
