import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import layer from "../static/images/Website.png";
import Link from "@material-ui/core/Link";
import logo from "../static/images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "2rem",
    backgroundImage: `url(${layer})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
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
    color: "black",
  },
  mySelf: {
    marginTop: "10rem",
    marginBottom: "2rem",
    marginLeft: "3rem",
    color: "black",
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
    height: "75vh",
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

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Box className={classes.root} width="100%">
          {/* Intro unit */}
          <Box className={classes.intro}>
            <Box className={classes.mySelf}>
              <Typography variant="h5">Hello,</Typography>
              <Typography variant="h3">I'm Shikai Jin</Typography>
              <Typography variant="h5" color="primary">
                Master of Management in Data Analytics Candidate
              </Typography>
              <Typography variant="subtitle1">University of Windsor</Typography>
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
            </Box>

            {/* End shortcuts unit */}
          </Box>
          {/* Logo unit */}
          <Box className={classes.image} />
        </Box>
        {/* End logo unit */}
        {/* Contact unit */}
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

export default Home;
