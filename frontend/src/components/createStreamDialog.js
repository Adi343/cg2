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

function CreateStreamDialog() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");

  const handleClickOpen = () => {
    console.log("button pressed!");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleName = () => {};
  return (
    <div>
      <Button variant="outlined" onclick={handleClickOpen}>
        CreateStream
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a new Stream!</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            onChange={handleName}
          />
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

export default CreateStreamDialog;
