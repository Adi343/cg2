import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SignInDialog from "./SignInDialog";
import SignUpDialog from "./SignUpDialog";
import { makeStyles } from "@material-ui/styles";
//import UserPageNew from "./UserPageNew";
import UserDialog from "./UserDialog";
import {useHistory} from "react-router-dom";
//import createHistory from 'history/createBrowserHistory'

import Axios from "axios";

const styles = {
  blk: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
  },
  blk2: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
  },
};

const useStyles = makeStyles(styles);
function Block(props) {
  const classes = useStyles();
  console.log("props.signIn is ", props.signIn);
  let history = useHistory();

  // setTimeout(() => {
  //   this.props.history.push("/");
  // });

  const notificationClicked = (e) => {
     console.log("notification clicled!");
     
    // Axios.get("/post").then((response) => {
    //   console.log(response).catch((error) => {
    //     console.log(error);
     // });
   // });
   history.push('/userPage');
   //browserHistory.push('/userPage');

  };

  const accountButtonClicked = (e) => {
    console.log("account button clicked!");
    setAccountDialog(true);
  };

  const [openAccountDialog, setAccountDialog] = React.useState(false);

  if (props.signIn === true) {
    return (
      <div className={classes.blk2}>
        <NotificationsIcon
          fontSize="default"
          onClick={(e) => notificationClicked()}
        />
        {/* <AccountCircle fontSize="large" onClick={accountButtonClicked} /> */}
        {console.log("openAccountDialog is ", openAccountDialog)}
        {/* {openAccountDialog == true && <UserDialog />} */}
        <UserDialog />
      </div>
    );
  } else {
    return (
      <div className={classes.blk}>
        <SignInDialog />
        <SignUpDialog />
      </div>
    );
  }
}

export default Block;
