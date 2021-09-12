import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import CV from "./container/CV";
import Header from "./container/Header";
import Projects from "./container/Projects";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cv" exact component={CV} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
