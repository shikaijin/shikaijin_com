import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",

    justifyContent: "center",
    marginBottom: "2rem",
    background: "linear-gradient(90deg, #83D475 0%, #57C84D 43%, #2EB62C 100%)",

    // backgroundSize: "100% 100%",
    // backgroundPosition: "center",
    textAlign: "center",
  },
  title: {
    marginTop: "3rem",
  },
}));

function CV() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        CV
      </Typography>
      <Typography variant="h1" className={classes.title}>
        CV
      </Typography>
      <Typography variant="h1" className={classes.title}>
        CV
      </Typography>
      <Typography variant="h1" className={classes.title}>
        CV
      </Typography>
      <Typography variant="h1" className={classes.title}>
        CV
      </Typography>
      <Typography variant="h1" className={classes.title}>
        CV
      </Typography>
      <Typography variant="h1" className={classes.title}>
        CV
      </Typography>
      <Typography variant="h1" className={classes.title}>
        CV
      </Typography>
    </div>
  );
}

export default CV;
