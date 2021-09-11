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
    justifyContent: "center",
    marginBottom: "2rem",
  },
  title: {
    minWidth: "40%",
    maxWidth: "100%",
    backgroundImage: `url(${projectBanner})`,
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

function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.title} width="100%">
          <Box className={classes.text}>
            <Typography variant="h3">Projects</Typography>
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
                    UWCSSA Web
                  </Typography>
                  <Typography>
                    A web built for UWCSSA, University of Windsor students and
                    the local communitiy.
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
