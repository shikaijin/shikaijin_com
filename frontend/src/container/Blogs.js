import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@material-ui/core";
import Auth from "@aws-amplify/auth";
import { Link } from "react-router-dom";
import sky from "../static/images/sky.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../components/SignIn";
import BlogsList from "../components/BlogList";
import SignUpForm from "../components/SignUpForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "3rem",
    marginTop: "3rem",
    textAlign: "center",
  },
  subHeader: {
    minWidth: "40%",
    maxWidth: "100%",
    minHeight: "5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    paddingTop: "1rem",
    paddingBottom: "1.5rem",
    backgroundImage: `url(${sky})`,
    backgroundSize: "auto",
    backgroundPosition: "right",
  },
  title: {
    fontWeight: 700,
    marginTop: "3rem",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    padding: "0 3rem 1rem",
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

function Blogs() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AssessLoggedInState();
  }, []); // LF

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        console.log("logged in");
        setLoggedIn(true);
      })
      .catch(() => {
        console.log("not logged in");
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
        <header className={classes.subHeader}>
          <Box className={classes.title}>
            <Typography variant="h3" gutterBottom>
              <b>Blogs</b>
            </Typography>
          </Box>
          <Box className={classes.subtitle}>
            <Typography variant="subtitle1" gutterBottom>
              Browse our technical blogs.
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
            <Link to="/blogs/signin" style={{ textDecoration: "none" }}>
              <Button size="small" className={classes.ColorButton}>
                Sign In
              </Button>
            </Link>
          )}
        </header>
        <Switch>
          <Route exact path="/blogs">
            <BlogsList />
          </Route>
          <Route path="/blogs/signin">
            <SignIn onSignIn={onSignIn}></SignIn>
          </Route>
          <Route path="/blogs/signup">
            <SignUpForm></SignUpForm>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Blogs;
