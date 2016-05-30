import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, HashHistory } from "react-router"

import Blogs from "./pages/Blogs";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={HashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Blogs}></IndexRoute>
      {/*<Route path="blogs" component={BlogEntry}></Route>*/}
    </Route>
  </Router>,
  app
);
