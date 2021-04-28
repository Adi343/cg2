import React , { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import PostCard from "./PostCard";
const axios = require("axios").default;
export default function Dashboard() {

  //var streamName = props.streamName;
  let {streamName} = useParams();
  console.log(useParams());

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Use Effect called!");
    axios
      .get("/stream/"+streamName+"/getAllPosts")
      .then((response) => {
        //setPosts(response.data);
        console.log('response is '+JSON.stringify(response.data));
        setPosts(response.data);

      })
      .catch((error) => {
        //console.log("Finished!");
        console.log("error is " + error);
      });
  }, []); 


  return (
    <div>
      <h2>{streamName}</h2>
      <p>Stream Description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices ut arcu non dignissim. Pellentesque commodo consequat erat id blandit. Donec pretium mattis tortor at tincidunt. Quisque sagittis nunc quam, non imperdiet augue ullamcorper molestie. Vivamus nec mi metus.</p>
    <PostCard />
    {posts.forEach((post)=>{
      console.log(post.content);
      return <PostCard title={"hjkuhkuj"} content = {"joju9009"}/>
    })}
    </div>
  );
}
