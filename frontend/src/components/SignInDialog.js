import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
const axios = require("axios").default;
export default function SignInDialog() {
  const theme = createMuiTheme({
    pallete: {
      primary: {
        main: "#A7414A",
      },
      secondary: {
        main: "#282726",
      },
    },
  });
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // let url = "/signIn/" + userName;

    setOpen(false);

    // axios
    //   .get(url)
    //   .then((response) => {
    //     console.log(response.data.message);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .then(() => {});
  };

  //handle submit function is used to send username and password to api
  const handleSubmit = () => {
    setOpen(false);
    //console.log("userName is ", userName, " passWord is ", password);
    let url = "/signIn/";

    //dataInput is data from api whether user exists or not
    var dataInput;
    setOpen(false);

    axios
      .post(url, { name: userName, password: password })
      .then((response) => {
        console.log('response is '+response.data);
        dataInput = response.data;

        if(dataInput.message=="Sign In successful"){

          var token = response.data.token;
          var id = response.data.id;

          localStorage.setItem("userName",userName);
        localStorage.setItem("jwt", token);
        localStorage.setItem("id",id);
        console.log("id is "+id);
        }
        else{
          alert('User Not found!');
        }
        
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log('dataInput is ',dataInput);
        window.location.reload(true);
      });
  };

  return (
    <div>
      <Button variant="contained" color="#343434" onClick={handleClickOpen}>
        Sign In
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign In!</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="username"
            type="text"
            onChange={handleUserNameChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Enter Password"
            type="password"
            onChange={handlePasswordChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Let's go!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
