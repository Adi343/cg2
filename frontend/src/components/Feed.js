import React, { useState, useEffect } from "react";
import FeedCard from "./FeedCard";
import Button from "@material-ui/core/Button";
import {ThemeProvider,Paper,Typography} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import darkTheme from "../darkTheme";

const axios = require("axios").default;
 //const url = "https://jsonplaceholder.typicode.com/posts";
const url = "/post"
function Feed() {
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);
  console.log(users)
  function getData() {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log('response.data is '+response.data);
        setUsers(response.data);
        //setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    getData();
    //console.log("use effect called!");
    console.log(users);
  }, []);

  return (
    <div>
      <ul>
      <Typography variant="h5" >Events</Typography>
        {users.map((user) => (
          <Paper>
            <FeedCard title={user.title} content={user.content} thumbnail={user.thumbnail}/>
            {/* <li>{<FeedCard name={user.title} />}</li> */}
          </Paper>
        ))}
      </ul>
      </div>
      
    
  );
}

export default Feed;
