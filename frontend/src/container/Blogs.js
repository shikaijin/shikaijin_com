import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography, Container } from "@material-ui/core";
import Auth from "@aws-amplify/auth";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUpForm from "../components/SignUpForm";
import BlogHome from "../components/BlogHome";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "3rem",
    marginTop: "3rem",
  },
  subHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: " 1px solid silver",
    marginBottom: "3em",
    overflowX: "auto",
  },
  title: {
    fontWeight: 700,
    marginTop: "3rem",
    textAlign: "center",
  },

  ColorButton: {
    marginTop: "2rem",
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
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Box className={classes.subHeader}>
            <Button
              size="small"
              color="primary"
              className={classes.ColorButton}
              disabled
            >
              Subscribe
            </Button>
            <Box className={classes.title}>
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
              >
                <b>Blogs</b>
              </Typography>
            </Box>
            {loggedIn ? (
              <Button
                variant="outlined"
                size="small"
                color="primary"
                className={classes.ColorButton}
                onClick={signOut}
              >
                Sign out
              </Button>
            ) : (
              <Link to="/blogs/signin" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.ColorButton}
                >
                  Sign In
                </Button>
              </Link>
            )}
          </Box>

          <Switch>
            <Route exact path="/blogs">
              <BlogHome />
            </Route>
            <Route path="/blogs/signin">
              <SignIn onSignIn={onSignIn}></SignIn>
            </Route>
            <Route path="/blogs/signup">
              <SignUpForm></SignUpForm>
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default Blogs;
