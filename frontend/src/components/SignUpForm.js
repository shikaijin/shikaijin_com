import React, { useState } from "react";
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
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

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

export default function SignUpForm() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    phone_number: "",
    authenticationCode: "",
    step: 0,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const signUp = async () => {
    const { email, password, username, phone_number } = formData;
    try {
      console.log("start signed up!");
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number },
      });
      console.log("successfully signed up!");
      setFormData({ step: 1 });
    } catch (error) {
      console.log("error signing up:", error);
    }
  };
  const history = useHistory();
  const confirmSignUp = async () => {
    const { username, code } = formData;
    try {
      await Auth.confirmSignUp(username, code);
      console.log("user successfully signed up!");
      history.push("/blogs");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };
  return (
    <div>
      {formData.step === 0 && (
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
                onChange={(e) => onChange(e)}
                name="username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                onChange={(e) => onChange(e)}
                name="password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={(e) => onChange(e)}
                name="email"
              />
              <MuiPhoneNumber
                variant="outlined"
                margin="normal"
                fullWidth
                id="phone_number"
                label="Phone Number"
                defaultCountry={"ca"}
                onChange={(e) => onChange(e)}
                name="phone_number"
              />
              <Button
                fullWidth
                id="signUpButton"
                color="primary"
                onClick={signUp}
                className={classes.ColorButton}
              >
                Create account
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
      )}
      {formData.step === 1 && (
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
                onChange={(e) => onChange(e)}
                name="username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="code"
                label="Code"
                type="code"
                onChange={(e) => onChange(e)}
                name="code"
              />
              <Button
                fullWidth
                id="signUpButton"
                color="primary"
                onClick={confirmSignUp}
                className={classes.ColorButton}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
}
