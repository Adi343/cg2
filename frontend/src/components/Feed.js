import React, { useState, useEffect } from "react";
import FeedCard from "./FeedCard";
import Button from "@material-ui/core/Button";

const axios = require("axios").default;
const url = "https://jsonplaceholder.typicode.com/posts";

function Feed() {
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);

  function getData() {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response.data);
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
    <div color="#000000">
      <h1>Feed</h1>
      <ul>
        {users.map((user) => (
          <div>
            <FeedCard title={user.title} content={user.body} />
            <li>{<FeedCard name={user.name} />}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
