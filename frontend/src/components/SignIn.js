import Auth from "@aws-amplify/auth";
import { Box, Button, TextField } from "@material-ui/core";
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
    marginTop: "2rem",
    marginBottom: "3rem",
  },
}));

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      history.push("/blog");
      onSignIn();
    } catch (error) {
      console.log("Oops, there was a login error", error);
    }
  };
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("username"),
      password: data.get("password"),
    });
  };

  return (
    <div className="signin">
      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 1 }}>
          <LockIcon color="primary" />
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onClick={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onClick={(e) => setPassword(e.target.value)}
          />

          <Button
            id="signInButton"
            color="primary"
            onClick={signIn}
            className={classes.ColorButton}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SignIn;
