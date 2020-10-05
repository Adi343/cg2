import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Avatar from "@material-ui/core/Avatar";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

function UserProfile(props) {

    var open = props.open;
  return (

    props.open == true ?<div>
    <Dialog>
           <Typography variant="h2">User Settings</Typography>
           <Avatar variant="circle" src="" />
         </Dialog>
       </div>:<div></div>
        
    }
    
  );
}

export default UserProfile;
