import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import NotesCard from "./notesCard";
import NotebookCard from "./NotebookCard";
const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    background: "black",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [notebooks,setNotebooks] = useState([]); 
 
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  useEffect(() => {
    axios.get("/notebook/getAllNotebooks")
        .then((docs)=>{
      setNotebooks(docs.data);});
  }, []);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {notebooks.map((note)=>{
            return <NotebookCard title={note.name} stream={note.stream}/>
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
