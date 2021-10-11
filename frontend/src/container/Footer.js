import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        shikaijin.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },

  footer: {
    marginTop: "auto",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          {/* Contact unit */}
          <Box>
            <Typography variant="body1">
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
          {/* End contact unit */}
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
