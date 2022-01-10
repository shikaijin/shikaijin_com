import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import CV from "./container/CV";
import Header from "./container/Header";
import Skills from "./container/Skills";
import Projects from "./container/Projects";
import Blogs from "./container/Blogs";
import Footer from "./container/Footer";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

Amplify.configure(awsconfig);

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Noto Sans",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cv" exact component={CV} />
              <Route path="/skills" exact component={Skills} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/blogs" exact component={Blogs} />
              <Route path="/blogs/signin" exact component={Blogs} />
              <Route path="/blogs/signup" exact component={Blogs} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
