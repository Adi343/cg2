import React, { useState, useEffect } from "react";
import FeedCard from "./FeedCard";
import Button from "@material-ui/core/Button";
import {ThemeProvider,Paper,Typography} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import darkTheme from "../darkTheme";
import Carousel from 'react-material-ui-carousel';
import EventItem from './EventItem';

const axios = require("axios").default;
const url = "/post"
function Feed() {
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);
  console.log(users)

  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor cursus massa, nec sagittis quam vulputate nec. Nam vitae libero et libero eleifend ultricies vitae sed est. Nam ultrices commodo pellentesque. Quisque vehicula porttitor tellus, vel ultricies nulla faucibus in. Sed ac erat faucibus arcu lobortis hendrerit non vel libero. In id eros vitae neque malesuada convallis. Pellentesque tristique finibus purus eu porta. Nunc maximus, lorem dignissim feugiat tempor, mi urna faucibus libero, quis cursus ligula enim vel nisi."
    }
]

  function getData() {

    var streamName = "stream1";
    var urlNew = url+"/"+streamName;
    axios
      .get(urlNew)
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
      <Typography variant="h5">Events</Typography>
      <Carousel autoPlay={false}>
            {
                items.map( (item, i) => <EventItem key={i} item={item} /> )
            }
        </Carousel>
        {console.log("users data is "+JSON.stringify(users))}
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
