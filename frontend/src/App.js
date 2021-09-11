import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import CV from "./container/CV";
import Header from "./container/Header";
import Skills from "./container/Skills";
import Projects from "./container/Projects";
import Footer from "./container/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cv" exact component={CV} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
