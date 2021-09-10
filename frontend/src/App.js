import "./App.css";
import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../src/static/images/logo.png";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  intro: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "left",
  },
  title: {
    fontWeight: 500,
    marginTop: "10rem",
    marginBottom: "2rem",
    marginLeft: "3rem",
    color: "balck",
  },
  uwButton: {
    marginBlock: "3rem",
    marginLeft: "3rem",
  },
  image: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    backgroundImage: `url(${logo})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Box className={classes.root} width="100%">
          <Box className={classes.intro} style={{ height: "10vh" }}>
            <Typography variant="h5" className={classes.title}>
              Hello,
              <Typography variant="h3">I'm Shikai Jin</Typography>
              <Typography variant="h5" color="primary">
                Master of Management in Data Analytics Candidate
              </Typography>
              <Typography variant="subtitle1">University of Windsor</Typography>
            </Typography>
            <Typography variant="subtitle1" className={classes.uwButton}>
              Related Page:
              <Button size="small" href="https://uwcssa.ca/">
                UWCSSA
              </Button>
            </Typography>
          </Box>
          <Box
            className={classes.image}
            style={{ height: "90vh", margin: 0, padding: 0 }}
          />
        </Box>
        <Box></Box>
      </div>
    </React.Fragment>
  );
}

export default App;
