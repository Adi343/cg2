import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Axios from "axios";

export default function SignUpDialog() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [accountType, setAccountType] = React.useState("");
  const [postId, setPostId] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    Axios.post("/signup", {
      name: name,
      email: email,
      password: password,
      accountType: accountType,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("jwt", response.token);
        console.log("localStorage.getItem(jwt)", localStorage.getItem("jwt"));
      })
      .catch((error) => console.log(error));
    setOpen(false);
  };

  const handleName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log("Email is ", email);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log("Password is ", password);
  };

  const handleAccountType = (event) => {
    setAccountType(event.target.value);
    console.log("AccountType is ", accountType);
  };

  return (
    <div>
      <Button variant="outlined" color="blue" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign Up!</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="username"
            type="text"
            fullWidth
            onChange={handleName}
          />

          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleEmail}
          />
          <TextField
            margin="dense"
            id="password"
            label="Enter Password"
            type="password"
            fullWidth
            onChange={handlePassword}
          />

          <FormControl component="fieldset" onChange={handleAccountType}>
            <FormLabel compoennt="legend">Account Type</FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel
                value="Student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="Administrator"
                control={<Radio />}
                label="Administrator"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Let's go!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
