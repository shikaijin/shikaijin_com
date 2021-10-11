import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "October Edition: Data Science Meets Sports",
  author: "TDS Editors",
  date: "10/01/2021",
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
    date: "10/12/2020",
    author: "Username",
    category: "Data Science",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "10/11/2020",
    author: "Username",
    category: "Data Science",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const sidebar = {
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
          <Main title="In the Blog" posts={""} />
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
