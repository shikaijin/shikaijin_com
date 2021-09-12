import React from "react";
import { Button, MenuItem, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "1rem",
    paddingLeft: "1rem",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
  githubButton: {
    marginLeft: "1rem",
    marginRight: "1rem",
  },
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem>Home</MenuItem>
      <MenuItem>CV</MenuItem>
      <MenuItem>Skills</MenuItem>
      <MenuItem>Projects</MenuItem>
      <IconButton
        edge="start"
        color="inherit"
        className={props.classes.githubButton}
        aria-label="github"
        href="https://github.com/shikaijin"
      >
        <GitHubIcon />
      </IconButton>
    </ButtonAppBarCollapse>
    <Box
      className={props.classes.buttonBar}
      id="appBar-collapse"
      sx={{ maxWidth: 600 }}
    >
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/cv">
        CV
      </Button>
      <Button color="inherit" component={Link} to="/skills">
        Skills
      </Button>
      <Button color="inherit" component={Link} to="/projects">
        Projects
      </Button>
      <IconButton
        edge="start"
        color="inherit"
        className={props.classes.githubButton}
        aria-label="github"
        href="https://github.com/shikaijin"
      >
        <GitHubIcon />
      </IconButton>
    </Box>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
