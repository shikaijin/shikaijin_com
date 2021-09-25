import Auth from "@aws-amplify/auth";
import {
  Box,
  Button,
  TextField,
  Grid,
  Link,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";
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
    marginBottom: "3rem",
  },
}));

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const history = useHistory();

  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number,
        },
      });
      history.push("/blogs");
      onSignUp();
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const classes = useStyles();

  return (
    <div className="signup">
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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MuiPhoneNumber
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone_number"
              label="Phone Number"
              defaultCountry={"ca"}
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              fullWidth
              id="signUpButton"
              color="primary"
              onClick={signUp}
              className={classes.ColorButton}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/blogs/signin" variant="body2">
                  {"Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;
