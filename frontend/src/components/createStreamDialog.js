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
import BuildIcon from "@material-ui/icons/Build";

function CreateStreamDialog() {
  const handleClick = () => {
    //console.log("button pressed!");
    localStorage.setItem("jwt", "");
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        CreateStream
      </Button> */}
      <BuildIcon onClick={handleClick} />
    </div>
  );
}

export default CreateStreamDialog;
