import React from "react";
import { IndexLink, Link } from "react-router";

export default class Home extends React.Component{
  render(){
    var myName = "Ahmed Shaaban";

    return(
      <div class="main-page-content well">
        {/*<img src="images/profile.jpg"></img>*/}
        <h1>My 19 weeks journey towards becoming a successful web developer: {myName}</h1>
        <h3>This is my weekly blog that I will be sharing my experince toward working on becoming a successful web developer.</h3>
        <div class="blog">
          <h3>June 23, 2016</h3>
          <Link to="blog/t6-js-language">JavaScript language blog</Link><br/>
          <Link to="blog/c6-control">Control blog</Link>
        </div>
        <div class="blog">
          <h3>June 15, 2016</h3>
          <Link to="blog/t5-problem-solving">Problem Solving blog</Link><br/>
          <Link to="blog/c5-self-confidence">Self Confidence blog</Link>
        </div>
        <div class="blog">
          <h3>June 8, 2016</h3>
          <Link to="blog/c4-daily-mindfulness">Daily mindfulness blog</Link>
        </div>
        <div class="blog">
          <h3>June 7, 2016</h3>
          <Link to="blog/t4-javascript-basics">Javascript basics blog</Link>
        </div>
        <div class="blog">
          <h3>June 5, 2016</h3>
          <Link to="blog/c3-meditation-process">Meditation process blog</Link>
        </div>
        <div class="blog">
          <h3>June 2, 2016</h3>
          <Link to="blog/t3-design-to-web-blog">Design a web blog</Link>
        </div>
        <div class="blog">
          <h3>May 27, 2016</h3>
          <Link to="blog/c2-emotional-intelligence">Emotional intelligence blog</Link>
        </div>
        <div class="blog">
          <h3>May 26, 2016</h3>
          <Link to="blog/t2-html-css-dom-p2">HTML, CSS and the DOM Part 2</Link>
        </div>
        <div class="blog">
          <h3>May 24, 2016</h3>
          <Link to="blog/t2-html-css-dom-p1">HTML, CSS and the DOM Part 1</Link>
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
