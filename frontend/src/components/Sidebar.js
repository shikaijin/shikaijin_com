import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NewPost from "./NewBlog";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { categories } = props;

  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Categories
      </Typography>
      {categories.map((categories) => (
        <Link
          display="block"
          variant="body1"
          href={categories.url}
          key={categories.title}
        >
          {categories.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        New Post
      </Typography>
      <NewPost />
    </Grid>
  );
}

Sidebar.propTypes = {
  categories: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
};
