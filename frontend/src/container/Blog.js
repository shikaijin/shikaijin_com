import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@material-ui/core";
import Auth from "@aws-amplify/auth";
import { Link } from "react-router-dom";
import original from "../static/images/original.gif";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../components/SignIn";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "2rem",
    marginTop: "3rem",
    textAlign: "center",
  },
  subHeader: {
    backgroundColor: "#212F3D",
    minHeight: "5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    paddingTop: "3rem",
    paddingBottom: "2rem",
    backgroundImage: `url(${original})`,
    backgroundSize: "auto",
    backgroundBlendMode: "lighten",
  },
  text: {
    textAlign: "center",
    margin: "0 2rem 2rem",
    padding: "0 10rem",
  },

  ColorButton: {
    background: "linear-gradient(45deg, #12100e 30%, #2b4162 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(73, 73, 69, 0.88)",
    color: "white",
    height: 48,
    padding: "0 20px",
  },
}));

function Blog() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AssessLoggedInState();
  }, []); // LF

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.log("error signing out", error);
    }
  };
  const onSignIn = () => {
    setLoggedIn(true);
  };
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <header>
          <Box className={classes.subHeader}>
            <Typography variant="h3" gutterBottom>
              <b>Blog</b>
            </Typography>
            <Box className={classes.text}>
              <Typography variant="subtitle1" gutterBottom>
                Aliquip ullamco do laborum labore minim quis non proident.
                Exercitation culpa officia reprehenderit exercitation cillum ex
                pariatur velit excepteur ad. Nulla ipsum ex in sunt est
                voluptate amet. Officia ipsum nostrud non deserunt ad ad
                occaecat elit amet. Deserunt in veniam ea commodo officia
                deserunt occaecat aliquip minim dolore laboris officia. Dolor id
                velit incididunt aliqua qui reprehenderit sunt fugiat veniam
                veniam.
              </Typography>
            </Box>

            {loggedIn ? (
              <Button
                size="small"
                className={classes.ColorButton}
                onClick={signOut}
              >
                Sign out
              </Button>
            ) : (
              <Link to="/blog/signin" style={{ textDecoration: "none" }}>
                <Button size="small" className={classes.ColorButton}>
                  Sign In
                </Button>
              </Link>
            )}
          </Box>
        </header>
        <Switch>
          <Route exact path="/blog" />
          <Route path="/blog/signin">
            <SignIn onSignIn={onSignIn}></SignIn>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Blog;
