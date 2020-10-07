import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import Avatar from "@material-ui/core/Avatar";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Typography } from "@material-ui/core";

function userPageNew(props) {
  var check = props.open;

  const [dialogOpen, setDialogOpen] = useState();

  const handleClose = () => {
    console.log("Inside handleClose UserPage");
    setDialogOpen(false);
    console.log(dialogOpen);
    check = false;
  };

  useEffect(() => {
    console.log("useEffect called!");
  }, [check]);

  //console.log("check is ", check);
  console.log("dialog open is ", dialogOpen);
  if (check == true) {
    return (
      <div>
        <Dialog open={check} onClose={handleClose}>
          <Typography variant="h2">User Settings</Typography>
          <Avatar variant="circle" src="" />
          <DialogContent>
            <Typography variant="h2">Settings</Typography>
          </DialogContent>
        </Dialog>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default userPageNew;
