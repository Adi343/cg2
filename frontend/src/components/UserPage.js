import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Avatar from "@material-ui/core/Avatar";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Typography } from "@material-ui/core";

function UserPage(props) {
  if (props.open == true) {
    return (
      <div>
        <Dialog>
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

export default UserPage;
