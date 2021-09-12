import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  githubButton: {
    marginLeft: "1rem",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Portfolio
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            alignContent="flex-start"
            sx={{ maxWidth: 600 }}
          >
            <Box p={2}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
            </Box>
            <Box p={2}>
              <Button color="inherit" component={Link} to="/cv">
                CV
              </Button>
            </Box>
            <Box p={2}>
              <Button color="inherit" component={Link} to="/projects">
                Projects
              </Button>
            </Box>
            <Box p={1}>
              <IconButton
                edge="start"
                color="inherit"
                className={classes.githubButton}
                aria-label="github"
                href="https://github.com/shikaijin"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
            <Box>
              <AmplifySignOut />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
