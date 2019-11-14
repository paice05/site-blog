import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Views/Login";
import Posts from "./Views/Posts";
import Home from "./Views/Home";
import Cadastro from "./Views/Cadastro";
import NewPost from "./Views/NewPost";
import MyProfile from "./Views/MyProfile";
import PostOpen from "./Views/PostOpen";

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/login" component={Login}></Route>

        <Route exact path="/posts" component={Posts}></Route>

        <Route exact path="/newpost" component={NewPost}></Route>

        <Route exact path="/cadastro" component={Cadastro}></Route>

        <Route exact path="/profile" component={MyProfile}></Route>

        <Route exact path="/post" component={PostOpen}></Route>
      </Switch>
    </Router>
  );
}
