import React from "react";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";

function Block(props) {
  if (props.signIn == true) {
    return (
      <div>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    );
  } else {
    return (
      <div>
        <AccountCircle fontSize="large" />
      </div>
    );
  }
}

export default Block;
