import React from "react";
import { Button, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../static/images/logo.png";
import layer from "../static/images/layer.png";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import cssa from "../static/images/cssa.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "2rem",
    backgroundImage: `url(${layer})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  },
  intro: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "left",
  },
  title: {
    fontWeight: 500,
    marginTop: "10rem",
    marginBottom: "2rem",
    marginLeft: "3rem",
  },
  contactMe: {
    marginBlock: "3rem",
    marginLeft: "3rem",
  },
  shortcuts: {
    marginBlock: "3rem",
    marginLeft: "3rem",
  },
  uwButton: {
    marginLeft: "5px",
  },

  image: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    height: "85vh",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  subtitle: {
    marginBottom: "2rem",
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
  },
  cardGrid: {
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "70% 100%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Box className={classes.root} width="100%">
          {/* Intro unit */}
          <Box className={classes.intro}>
            <Box className={classes.title}>
              <Typography variant="h5">Hello,</Typography>
              <Typography variant="h3">I'm Shikai Jin</Typography>
              <Typography variant="h5" color="primary">
                Master of Management in Data Analytics Candidate
              </Typography>
              <Typography variant="subtitle1">University of Windsor</Typography>
            </Box>
            <Box className={classes.contactMe}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                href="mailto:shikaijin7@gmail.com"
              >
                Contact Me
              </Button>
            </Box>
            {/* End intro unit */}
            {/* Shortcuts unit */}
            <Box className={classes.shortcuts}>
              <Typography variant="subtitle1">
                Related Page:
                <Button color="inherit" component={Link} to="/projects">
                  Projects
                </Button>
              </Typography>
            </Box>
            {/* End shortcuts unit */}
          </Box>
          {/* Logo unit */}
          <Box className={classes.image} />
          {/* End logo unit */}
          {/* Projects unit */}
          <Container className={classes.cardGrid} maxWidth="md">
            <Box className={classes.subtitle}>
              <Typography variant="h4">Projects Participated</Typography>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={cssa}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      UWCSSA Web
                    </Typography>
                    <Typography>
                      A web built for UWCSSA, University of Windsor students and
                      the local community.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://uwcssa.ca/"
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>

          {/* End projects unit */}
        </Box>
      </div>
    </React.Fragment>
  );
}
export default Home;
