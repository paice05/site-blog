import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

// views
import Login from "./Views/Login";
import Home from "./Views/Home";
import Cadastro from "./Views/Cadastro";
import NewPost from "./Views/NewPost";
import MyProfile from "./Views/MyProfile";
import PostOpen from "./Views/PostOpen";

export default function routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/newpost" component={NewPost}></Route>
          <Route exact path="/cadastro" component={Cadastro}></Route>
          <Route exact path="/profile" component={MyProfile}></Route>
          <Route exact path="/post/:id" component={PostOpen}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
