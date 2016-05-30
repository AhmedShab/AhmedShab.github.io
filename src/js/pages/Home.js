import React from "react";
import { IndexLink, Link } from "react-router";

export default class Home extends React.Component{
  render(){
    return(
      <div class="main-page-content">
        <h1>My 19 weeks journey towards becoming a successful web developer: Ahmed Shaaban</h1>
        <h3>This is my weekly blog that I will be sharing my experince toward working on becoming a successful web developer.</h3>
        <div class="blog">
          <h3>May 27, 2016</h3>
          <Link to="blog/c2-emotional-intelligence">Cultural blog</Link>
        </div>
        <div class="blog">
          <h3>May 26, 2016</h3>
          <Link to="blog/t2-html-css-dom-p2">Technical blog part 2</Link>
        </div>
        <div class="blog">
          <h3>May 24, 2016</h3>
          <Link to="blog/t2-html-css-dom-p1">Technical blog part 1</Link>
        </div>
        <div class="blog">
          <h3>May 19, 2016</h3>
          <Link to="blog/c1-reflection-blog">Reflaction blog</Link><br></br>
          <Link to="blog/c1-time-and-habits-blog">Time and habits blog</Link>
        </div>
      </div>
    );
  }
}
