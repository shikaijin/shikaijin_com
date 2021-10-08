import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ReactPlayer from "react-player";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  content: {
    marginTop: "1rem",
  },
  media: {
    height: 400,
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Box>
        <Card className={classes.content}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  TDS
                </Avatar>
              }
              title="TDS Editors"
              subheader="03/17/2020 | Data Science"
            />
            <CardMedia className={classes.media}>
              <ReactPlayer
                url="https://youtu.be/ffwYAqqGaj8"
                width="100%"
                height="100%"
                controls
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Data Science @ The New York Times
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The Data Science group at The New York Times develops and
                deploys machine learning solutions to newsroom and business
                problems.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton id="like">
              <ThumbUpIcon />
            </IconButton>
            <Button size="small" color="primary" disabled>
              Read More
            </Button>
          </CardActions>
        </Card>
      </Box>

      {/* {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
