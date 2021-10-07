import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  IconButton,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Box,
} from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { listPosts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const useStyles = makeStyles((theme) => ({
  add: {
    borderStyle: "dotted",
    marginBottom: "1rem",
    textAlign: "center",
    width: "100%",
    alignItems: "center",
    "& > *": {
      margin: "0.25rem",
    },
  },

  root: {
    marginBottom: "1rem",
    marginTop: "2rem",
    textAlign: "center",
    width: "100%",
    alignItems: "center",
    "& > *": {
      margin: "0.25rem",
    },
  },
  input: {
    display: "none",
  },

  formControl: {
    minWidth: 120,
  },
}));

function NewPost() {
  const [posts, setPosts] = useState([]);
  const [showAddPost, setShowAddNewPost] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      const postList = postData.data.listPosts.items;
      console.log("post list", postList);
      setPosts(postList);
    } catch (error) {
      console.log("error on fetching posts", error);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.add}>
      {showAddPost ? (
        <AddPost
          onUpload={() => {
            setShowAddNewPost(false);
            fetchPosts();
          }}
        />
      ) : (
        <IconButton onClick={() => setShowAddNewPost(true)}>
          <AddIcon />
        </IconButton>
      )}
    </div>
  );
}

export default NewPost;

const AddPost = ({ onUpload }) => {
  const uploadPost = () => {
    onUpload();
  };
  const UPLOAD_ENDPOINT = " ";
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if await is removed, console log will be called before the uploadFile() is executed completely.
    //since the await is added, this will pause here then console log will be called
    let res = await uploadFile(file);
    console.log(res.data);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField variant="outlined" margin="normal" fullWidth label="Title" />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Author"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="date"
          label="Date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl
          variant="outlined"
          margin="normal"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="outlined-category-native-simple">
            Category
          </InputLabel>
          <Select
            fullWidth
            native
            value={category}
            onChange={handleChange}
            label="Category"
            inputProps={{
              name: "category",
              id: "outlined-category-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="DataScience">Data Science</option>
            <option value="Technology">Technology</option>
            <option value="MachineLearning">Machine Learning</option>
          </Select>
        </FormControl>
      </Box>
      <div className={classes.root} onSubmit={handleSubmit}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleOnChange}
        />
        <label htmlFor="contained-button-file">
          <Button color="primary" component="span">
            Choose images
          </Button>
        </label>
        <Button color="primary" type="submit" disabled>
          Add
        </Button>
      </div>
      <IconButton onClick={uploadPost} disabled>
        <PublishIcon />
      </IconButton>
    </div>
  );
};
