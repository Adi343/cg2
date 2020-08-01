import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";
import createStreamDialog from "./createStreamDialog";

const styles = {
  title: {
    backgroundColor: "#ffffff",
    margin: "10px",
  },
  chatBox: {
    backgroundColor: "#c4c4c4",
    color: red,
    display: "flex",
    height: "500px",
    flexDirection: "column",
  },
  chat: {
    backgroundColor: "#696969",
    flexGrow: 1,
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
      <createStreamDialog />
      <Paper variant="outlined" className={classes.chatBox}>
        <Typography className={classes.title} variant="h3">
          CHAT
        </Typography>
        <Container className={classes.chat}>
          <ul>
            {ChatItems.map((item, index) => (
              <li key="index">{item}</li>
            ))}
          </ul>
        </Container>
        <form>
          <TextField
            placeholder="Type message op!"
            type="text"
            onChange={(e) => setChat(e.target.value)}
          />
          <Button onClick={handleSubmit}>Send</Button>
        </form>
      </Paper>
    </div>
  );
}

export default Messages;
