import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";

const styles = {
  chatBox: {
    backgroundColor: "#c4c0c1",
    color: red,
    width: "500px",
    height: "500px",
  },
};

const useStyles = makeStyles(styles);

function Messages() {
  const classes = useStyles();
  const ChatItems = ["Hi", "Hey", "what up!"];
  const [chat, setChat] = React.useState("");
  const [chatItems, setChatItems] = useState([...ChatItems]);

  useEffect(() => {
    console.log("chat updated");
  }, [chatItems]);

  const handleSubmit = (e) => {
    setChatItems(...ChatItems, chat);
    console.log(chatItems);
  };

  const showChat = () => {
    console.log("chat is ", chat);
  };
  return (
    <div>
      <Paper variant="outlined" className={classes.chatBox}>
        <h1>Chat!</h1>

        {ChatItems.map((item, index) => (
          <li key="index">{item}</li>
        ))}
      </Paper>

      <form>
        <TextField
          placeholder="Type message op!"
          type="text"
          onChange={(e) => setChat(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send</Button>
      </form>
    </div>
  );
}

export default Messages;
