import React,{useState} from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
const styles = {
  userMenu: {
    margin: "20px",
  },
};
const useStyles = makeStyles(styles);
function UserDialog() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () =>{

    localStorage.clear();
    window.location.reload(true);
    
  }
  return (
    <div>
      <AccountCircle fontSize="default" onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        anchorOrigin={{
          vertical: 'top',
                  horizontal: 'right'}
        }
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="userMenu"
      >
        <MenuItem><Typography variant="h6">{localStorage.getItem("userName")}</Typography></MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default UserDialog;
