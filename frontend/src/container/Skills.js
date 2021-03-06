import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Typography,
  CircularProgress,
  Container,
  Divider,
} from "@material-ui/core";
import skillBanner from "../static/images/skillBanner.png";

const grey = "#f5f5f5";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    marginTop: "3rem",
    backgroundColor: "#FFFF",
  },
  titleBox: {
    minWidth: "40%",
    maxWidth: "100%",
    paddingTop: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingBottom: "1rem",
    backgroundImage: `url(${skillBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    fontWeight: 700,
    marginTop: "3rem",
    marginBottom: "1rem",
    textAlign: "center",
  },

  skills: {
    flexGrow: 1,
    marginBottom: "3rem",
    justifyContent: "center",
  },
  skillsType: {
    textAlign: "center",
    paddingTop: "2rem",
  },
  skillBox: {
    alignItems: "center",
    p: "0.25rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginBottom: "1rem",
  },
  paper: {
    padding: "0.5rem",
    textAlign: "center",
  },
}));

function NumberCircularProgress(props) {
  return (
    <Box position="relative" display="inline-block">
      <Box top={0} left={0} bottom={0} right={0} position="absolute">
        <CircularProgress
          style={{ color: grey }}
          size={110}
          variant="static"
          value={100}
        />
      </Box>
      <CircularProgress size={110} variant="static" value={props.value} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h5"
          component="div"
          color="textSecondary"
        >{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
}

function Skills() {
  const classes = useStyles();

  return (
    <div id="skills">
      <Box className={classes.root}>
        <Box className={classes.titleBox} width="100%">
          <Box className={classes.title}>
            <Typography variant="h3" gutterBottom>
              <b>Skills</b>
            </Typography>
          </Box>
        </Box>
        <div className={classes.skills}>
          <Container maxWidth="md">
            <Typography
              variant="h5"
              color="primary"
              className={classes.skillsType}
            >
              <b>Data Analytics and Data Science</b>
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              m={1}
              p={1}
            >
              <Box className={classes.skillBox}>
                <Box mb={1}>
                  <Typography
                    variant="h6"
                    className={classes.paper}
                    gutterBottom
                  >
                    R
                  </Typography>
                </Box>
                <NumberCircularProgress value={80} />
              </Box>
              <Box className={classes.skillBox}>
                <Box mb={1}>
                  <Typography
                    variant="h6"
                    className={classes.paper}
                    gutterBottom
                  >
                    SQL
                  </Typography>
                </Box>
                <NumberCircularProgress value={75} />
              </Box>
              <Box className={classes.skillBox}>
                <Box mb={1}>
                  <Typography
                    variant="h6"
                    className={classes.paper}
                    gutterBottom
                  >
                    Python
                  </Typography>
                </Box>
                <NumberCircularProgress value={70} />
              </Box>
            </Box>
            <Divider />
            <Typography
              variant="h5"
              color="primary"
              className={classes.skillsType}
            >
              <b>Frontend</b>
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              m={1}
              p={1}
            >
              <Box className={classes.skillBox}>
                <Box mb={1}>
                  <Typography
                    variant="h6"
                    className={classes.paper}
                    gutterBottom
                  >
                    HTML
                  </Typography>
                </Box>
                <NumberCircularProgress value={75} />
              </Box>
              <Box className={classes.skillBox}>
                <Box mb={1}>
                  <Typography
                    variant="h6"
                    className={classes.paper}
                    gutterBottom
                  >
                    CSS
                  </Typography>
                </Box>
                <NumberCircularProgress value={70} />
              </Box>
              <Box className={classes.skillBox}>
                <Box mb={1}>
                  <Typography
                    variant="h6"
                    className={classes.paper}
                    gutterBottom
                  >
                    RactJS
                  </Typography>
                </Box>
                <NumberCircularProgress value={65} />
              </Box>
            </Box>
            <Divider />
            <Typography
              variant="h5"
              color="primary"
              className={classes.skillsType}
            >
              <b>UI Design</b>
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              m={1}
              p={1}
            >
              <Box className={classes.skillBox}>
                <Box mb={1}>
                  <Typography
                    variant="h6"
                    className={classes.paper}
                    gutterBottom
                  >
                    Figma
                  </Typography>
                </Box>
                <NumberCircularProgress value={90} />
              </Box>
            </Box>
          </Container>
        </div>
      </Box>
    </div>
  );
}

export default Skills;
