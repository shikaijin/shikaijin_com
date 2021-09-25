import Auth from "@aws-amplify/auth";
import {
  Box,
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useHistory } from "react-router";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  ColorButton: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
}));

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async () => {
    try {
      // eslint-disable-next-line
      const user = await Auth.signIn(username, password);
      history.push("/blogs");
      onSignIn();
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const classes = useStyles();

  return (
    <div className="signin">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ m: 1 }}>
            <LockIcon color="primary" />
          </Box>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              id="signInButton"
              color="primary"
              onClick={signIn}
              className={classes.ColorButton}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/blogs/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
