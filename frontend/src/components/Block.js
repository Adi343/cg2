import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SignInDialog from "./SignInDialog";
import SignUpDialog from "./SignUpDialog";
import { makeStyles } from "@material-ui/styles";
const styles = {
  blk: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
  },
};

const useStyles = makeStyles(styles);
function Block(props) {
  const classes = useStyles();
  console.log("props.signIn is ", props.signIn);

  // setTimeout(() => {
  //   this.props.history.push("/");
  // });

  if (props.signIn === true) {
    return (
      <div>
        <NotificationsIcon fontSize="large" />
        <AccountCircle fontSize="large" />
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
