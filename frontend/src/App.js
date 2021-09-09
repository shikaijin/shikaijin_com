import "./App.css";
import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  title: {
    fontWeight: 700,
    marginTop: "3rem",
    marginBottom: "2rem",
    color: "red",
  },
  uwButton: {
    marginBlock: "3rem",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Welcome to Mysite
      </Typography>
      <Typography variant="h2">coming soon...</Typography>

      <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.uwButton}
        href="https://uwcssa.ca/"
      >
        UWCSSA
      </Button>
    </div>
  );
}

export default App;
