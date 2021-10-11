import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Button, Container } from "@material-ui/core";
import projectBanner from "../static/images/projectBanner.png";
import cssa from "../static/images/cssa.jpg";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

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
  title: {
    minWidth: "40%",
    maxWidth: "100%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundImage: `url(${projectBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  text: {
    fontWeight: 700,
    marginTop: "3rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: "2rem",
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
  },
  cardGrid: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    marginBottom: "2rem",
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

function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.title} width="100%">
          <Box className={classes.text}>
            <Typography variant="h3">
              <b>Projects</b>
            </Typography>
          </Box>
        </Box>
        <Container className={classes.cardGrid} maxWidth="md">
          <Box className={classes.subtitle}>
            <Typography variant="h5" color="primary">
              Projects Participated
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
                    The UWCSSA project is a web development project designed to
                    provide an efficient working platform for the University of
                    Windsor Chinese Students and Scholars Association and a
                    student forum for University of Windsor students.
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
      </Box>
    </div>
  );
}

export default Projects;
