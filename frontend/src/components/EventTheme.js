import {createMuiTheme} from "@material-ui/core";

const eventTheme = createMuiTheme({
    typography: {
      fontFamily: `"Roboto", sans-serif`,
      fontSize: 15,
      fontWeightLight: 100,
      fontWeightRegular: 100,
      fontWeightMedium: 100,
    },
    palette:{
      primary:{
        main:"#000000"
      },
      secondary:{
        main:"#ffffff"
      }
    }
  });



export default eventTheme;