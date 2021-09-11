import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "2rem",

    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  },
  title: {
    marginTop: "3rem",
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Projects
      </Typography>
    </div>
  );
}

export default Projects;
