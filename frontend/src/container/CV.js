import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Button } from "@material-ui/core";
import cvBanner from "../static/images/cv_banner.png";
import Divider from "@material-ui/core/Divider";
import GetAppIcon from "@material-ui/icons/GetApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  title: {
    minWidth: "40%",
    maxWidth: "100%",
    backgroundImage: `url(${cvBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  text: {
    fontWeight: 700,
    marginTop: "5rem",
    marginBottom: "2rem",
    marginLeft: "2rem",
    textAlign: "center",
  },
  content: {
    marginTop: "1rem",
    minWidth: "40%",
    maxWidth: "100%",
  },
  subtitle: {
    marginTop: "2rem",
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
  },
  bodyBox: {
    margin: "2rem",
    marginLeft: "20%",
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "left",
  },
}));

function CV() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.title} width="100%">
          <Box className={classes.text}>
            <Typography variant="h3">Curriculum Vitae</Typography>
          </Box>
        </Box>
        <Box className={classes.content} width="100%">
          <Box className={classes.subtitle}>
            <Typography variant="h5" color="primary">
              Education
            </Typography>
          </Box>
          <Box className={classes.bodyBox}>
            <Box m={2} variant="subtitle1">
              <Typography>MMgt</Typography>
              <Typography>Data Analytics</Typography>
              <Typography>2021 - </Typography>
              <Typography>Unoversity of Windsor. Windsor, ON.</Typography>
            </Box>
            <Box m={2} variant="subtitle1">
              <Typography>Certificate</Typography>
              <Typography>
                Foundations of Analytics: Business Intelligence, Data Analysis
                and Data Science, 2021. Mcmater University CCE. Hamilton, ON.
              </Typography>
            </Box>
            <Box m={2} variant="subtitle1">
              <Typography>BSc (Hons)</Typography>
              <Typography>
                Mathematics, 2020. Queen’s University. Kingston, ON.
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.subtitle}>
            <Typography variant="h5" color="primary">
              Scholarships and Awards
            </Typography>
            <Box className={classes.bodyBox}>
              <Box m={2} variant="subtitle1">
                <Typography>2016</Typography>
                <Typography>
                  Dean's Admission Scholarship for Bachelor of Arts and Science
                  (Honours). 2,000 CAD.
                </Typography>
              </Box>
              <Box m={2} variant="subtitle1">
                <Typography>2015</Typography>
                <Typography>
                  Certificate of Distinction for students scoring in the top 25%
                  in Euclid Contest. University of Waterloo.
                </Typography>
              </Box>
              <Box m={2} variant="subtitle1">
                <Typography>2014</Typography>
                <Typography>
                  Certificate of Distinction for students scoring in the top 25%
                  in Canadian Senior Mathematics Contest. University of
                  Waterloo.
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <Box p={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  endIcon={<GetAppIcon />}
                >
                  Download CV
                </Button>
              </Box>
              <Box p={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  endIcon={<LinkedInIcon />}
                >
                  LinkedIn
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CV;
