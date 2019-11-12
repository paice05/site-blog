import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './Views/Login'
import Posts from './Views/Posts'
import Home from './Views/Home'

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}>
          
        </Route>

        <Route exac path="/login" component={Login}>
        </Route>

        <Route exact path="/Posts" component={Posts}>
        
        </Route>
      </Switch>
    </Router>
  );
}