import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { createBrowserHistory } from "history";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import C1ReflectionBlog from "./pages/blogs/c1-reflection-blog";
import C1TimeAndHabitsBlog from "./pages/blogs/c1-time-and-habits-blog";
import T2TechnicalBlogP1 from "./pages/blogs/t2-html-css-dom-p1";
import T2TechnicalBlogP2 from "./pages/blogs/t2-html-css-dom-p2";
import C2ReflectionBlog from "./pages/blogs/c2-emotional-intelligence";
import T3DesignBlog from "./pages/blogs/t3-design-to-web-blog";
import Template from "./pages/blogs/blog-template";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={createBrowserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="blog/c1-reflection-blog" component={C1ReflectionBlog}></Route>
      <Route path="blog/c1-time-and-habits-blog" component={C1TimeAndHabitsBlog}></Route>
      <Route path="blog/t2-html-css-dom-p1" component={T2TechnicalBlogP1}></Route>
      <Route path="blog/t2-html-css-dom-p2" component={T2TechnicalBlogP2}></Route>
      <Route path="blog/c2-emotional-intelligence" component={C2ReflectionBlog}></Route>
      <Route path="blog/t3-design-to-web-blog" component={T3DesignBlog}></Route>
      <Route path="blog/blog-template" component={Template}></Route>
    </Route>
  </Router>,
  app
);
