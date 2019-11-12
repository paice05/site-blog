import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Views/Login";
import Posts from "./Views/Posts";
import Home from "./Views/Home";
import Cadastro from "./Views/Cadastro"

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route exac path="/login" component={Login}></Route>

        <Route exact path="/posts" component={Posts}></Route>

        <Route exact path="/cadastro" component={Cadastro}></Route>
      </Switch>
    </Router>
  );
}
