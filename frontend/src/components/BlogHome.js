import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import post1 from "../static/posts/blog-post.1.md";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "October Edition: Data Science Meets Sports",
  author: "TDS Editors",
  date: "Oct 1",
  category: "Data Science",
  description:
    "Exploring the areas within sports that are the most receptive to data science solutions",
  image: "https://miro.medium.com/max/2000/0*uRRGQ5WYn8q6zBbV",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    author: "Username",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    author: "Username",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const posts = [post1];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  categories: [
    { title: "Data Science", url: "#" },
    { title: "Technology", url: "#" },
    { title: "Machine Learning", url: "#" },
  ],
};

export default function BlogHome() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="In the Blog" posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            categories={sidebar.categories}
          />
        </Grid>
      </main>
    </React.Fragment>
  );
}
