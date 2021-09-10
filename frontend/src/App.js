import "./App.css";
import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
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
    textAlign: "center",
  },
  title: {
    fontWeight: 500,
    marginTop: "15rem",
    marginBottom: "2rem",
    color: "balck",
  },
  uwLink: {
    marginBlock: "3rem",
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
  const preventDefault = (event) => event.preventDefault();
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Box className={classes.root} width="100%">
          <Box className={classes.intro} style={{ height: "10vh" }}>
            <Typography variant="h3" className={classes.title}>
              Welcome to Mysite
            </Typography>
            <Typography variant="h5">coming soon...</Typography>
            <Typography variant="subtitle1" className={classes.uwLink}>
              Related Page:
              <Link href="https://uwcssa.ca/" onClick={preventDefault}>
                UWCSSA
              </Link>
            </Typography>
          </Box>
          <Box
            className={classes.image}
            style={{ height: "90vh", margin: 0, padding: 0 }}
          />
        </Box>
      </div>
    </React.Fragment>
  );
}

export default App;
