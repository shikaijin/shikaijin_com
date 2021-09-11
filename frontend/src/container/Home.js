import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../static/images/logo.png";
import layer from "../static/images/layer.png";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";

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
  },
  contactMe: {
    marginBlock: "3rem",
    marginLeft: "3rem",
  },
  shortcuts: {
    marginBlock: "3rem",
    marginLeft: "3rem",
  },
  uwButton: {
    marginLeft: "5px",
  },

  image: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    height: "85vh",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
            <Box className={classes.title}>
              <Typography variant="h5">Hello,</Typography>
              <Typography variant="h3">I'm Shikai Jin</Typography>
              <Typography variant="h5" color="primary">
                Master of Management in Data Analytics Candidate
              </Typography>
              <Typography variant="subtitle1">University of Windsor</Typography>
            </Box>
            <Box className={classes.contactMe}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                href="mailto:shikaijin7@gmail.com"
              >
                Contact Me
              </Button>
            </Box>
            {/* End intro unit */}
            {/* Shortcuts unit */}
            <Box className={classes.shortcuts}>
              <Typography variant="subtitle1">
                Related Page:
                <Button color="inherit" component={Link} to="/projects">
                  Projects
                </Button>
              </Typography>
            </Box>
            {/* End shortcuts unit */}
          </Box>
          {/* Logo unit */}
          <Box className={classes.image} />
        </Box>
        {/* End logo unit */}
      </div>
    </React.Fragment>
  );
}
export default Home;
