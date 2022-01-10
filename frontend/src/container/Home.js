import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import cssa from "../static/images/cssa.jpg";
import hero from "../static/images/hero.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
    justifyContent: "center",
    backgroundColor: "white",
  },
  heroContent: {
    display: "block",
    textAlign: "left",
    marginBottom: "5rem",
    backgroundImage: `url(${hero})`,

    width: "100%",
    height: "100%",
    paddingBottom: "2rem",

    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up("lg")]: {
      height: "835px",
      backgroundSize: "auto 100%",
      backgroundRepeat: "no-repeat",
    },
  },
  heroTitle: {
    fontWeight: 500,
    paddingTop: "12rem",
    marginBottom: "2rem",
    marginLeft: "2rem",
  },
  ButtonsDiv: {
    marginTop: "1rem",
  },
  ButtonsBox: {
    marginBlock: "3rem",
    marginLeft: "2rem",
    paddingBottom: "12rem",
  },
  ColorButton: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  heroFab: {
    marginBlock: "3rem",
    marginLeft: "2rem",
  },
  AboutButtons: {
    p: "0.25rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginBottom: "1rem",
  },

  cardGrid: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    marginBottom: "2rem",
  },
  subtitle: {
    marginBottom: "3rem",
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
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
        <div className={classes.root}>
          {/* Hero unit */}
          <Box className={classes.heroContent}>
            <Container maxWidth="lg">
              <Box className={classes.heroTitle}>
                <Typography variant="h4" gutterBottom>
                  Hello,
                </Typography>
                <Typography variant="h3" gutterBottom>
                  I'm Shikai Jin
                </Typography>
                <Typography variant="h5" color="primary">
                  Master of Management in Data Analytics Candidate
                </Typography>
                <Typography variant="subtitle1">
                  University of Windsor
                </Typography>
              </Box>
              <div className={classes.ButtonsDiv}>
                <Box className={classes.ButtonsBox}>
                  <Button
                    size="large"
                    endIcon={<SendRoundedIcon />}
                    href="mailto:shikaijin7@gmail.com"
                    className={classes.ColorButton}
                  >
                    Contact Me
                  </Button>
                </Box>
                {/*<Box>
                  <Fab
                    variant="extended"
                    size="small"
                    href="#About"
                    className={classes.heroFab}
                  >
                    Scroll down
                    <ArrowDownwardIcon />
                  </Fab>
                </Box>*/}
              </div>
            </Container>
          </Box>
          {/* End hero unit */}
          {/* About unit */}
          <section id="About">
            <Container className={classes.cardGrid} maxWidth="md">
              <Box className={classes.subtitle}>
                <Typography variant="h4">About</Typography>
              </Box>
              <Typography variant="body1">
                Incididunt eiusmod irure mollit minim laboris. Proident sint
                veniam tempor in voluptate sint ex pariatur tempor dolore
                proident. Exercitation exercitation ad duis voluptate ex minim
                exercitation consectetur aliquip et est commodo. Est eu nulla
                amet duis aliqua laborum minim minim quis et ipsum nulla. Tempor
                id mollit ullamco proident eu. Velit reprehenderit fugiat Lorem
                pariatur sit excepteur minim.
              </Typography>
              <div className={classes.ButtonsDiv}>
                <Box display="flex" justifyContent="center" p={1}>
                  <Box className={classes.AboutButtons}>
                    <Button
                      size="medium"
                      className={classes.ColorButton}
                      href="/cv/#cv"
                    >
                      CV
                    </Button>
                  </Box>
                  <Box className={classes.AboutButtons}>
                    <Button
                      size="medium"
                      className={classes.ColorButton}
                      href="/skills/#skills"
                    >
                      Skills
                    </Button>
                  </Box>
                </Box>
              </div>
            </Container>
          </section>
          {/* End about unit */}
          <Divider variant="middle" />
          {/* Projects unit */}
          <section id="Projects">
            <Container className={classes.cardGrid} maxWidth="md">
              <Box className={classes.subtitle}>
                <Typography variant="h4" gutterBottom>
                  Recent Projects Involved
                </Typography>
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
                        UWCSSA Web Development
                      </Typography>
                      <Typography>
                        The UWCSSA project is a web development project designed
                        to provide an efficient working platform for the
                        University of Windsor Chinese Students and Scholars
                        Association and a student forum for University of
                        Windsor students.
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
          </section>
          {/* End projects unit */}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
