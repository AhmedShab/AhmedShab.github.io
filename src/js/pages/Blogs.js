import React from "react";

export default class Blog extends React.Component{
  render(){
    return(
      <div>
        <div class="blog">
          <h3>May 27, 2016</h3>
          <a href="blog/c2-emotional-intelligence.html">Cultural blog</a>
        </div>
        <div class="blog">
          <h3>May 26, 2016</h3>
          <a href="blog/t2-html-css-dom-p2.html">Technical blog part 2</a>
        </div>
        <div class="blog">
          <h3>May 26, 2016</h3>
          <a href="blog/t2-html-css-dom-p2.html">Technical blog part 2</a>
        </div>
        <div class="blog">
          <h3>May 24, 2016</h3>
          <a href="blog/t2-html-css-dom-p1.html">Technical blog part 1</a>
        </div>
        <div class="blog">
          <h3>May 19, 2016</h3>
          <a href="/blog/c1-reflection-blog.html">Reflaction blog</a>
          <a href="/blog/c1-time-and-habits-blog.html">Time and habits blog</a>
          </div>
        </div>
      );
    }
  }
