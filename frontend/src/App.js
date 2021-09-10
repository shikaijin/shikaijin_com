import "./App.css";
import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../src/static/images/logo.png";
import Link from "@material-ui/core/Link";

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
  shortcuts: {
    marginBlock: "3rem",
    marginLeft: "3rem",
  },
  link: {
    marginLeft: "5px",
  },
  image: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    backgroundImage: `url(${logo})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  },
  contact: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  email: {
    fontWeight: 600,
    marginTop: "1rem",
    marginBottom: "2rem",
    marginLeft: "10%",
    color: "balck",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Box className={classes.root} width="100%">
          {/* Intro unit */}
          <Box className={classes.intro} style={{ height: "10vh" }}>
            <Typography variant="h5" className={classes.title}>
              Hello,
              <Typography variant="h3">I'm Shikai Jin</Typography>
              <Typography variant="h5" color="primary">
                Master of Management in Data Analytics Candidate
              </Typography>
              <Typography variant="subtitle1">University of Windsor</Typography>
            </Typography>
            {/* End intro unit */}
            {/* Shortcuts unit */}
            <Typography variant="subtitle1" className={classes.shortcuts}>
              Related Page:
              <Link
                href="https://uwcssa.ca/"
                color="inherit"
                className={classes.link}
              >
                UWCSSA
              </Link>
            </Typography>
            {/* End shortcuts unit */}
          </Box>
          <Box
            className={classes.image}
            style={{ height: "75vh", margin: 0, padding: 0 }}
          />
        </Box>
        <Box className={classes.contact} width="100%">
          <Box className={classes.email}>
            <Typography variant="h5">
              Email:
              <Link
                href="mailto:shikaijin7@gmail.com"
                color="inherit"
                className={classes.link}
              >
                shikaijin7@gmail.com
              </Link>
            </Typography>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default App;
