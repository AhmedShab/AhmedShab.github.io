import React from "react";

import { IndexLink, Link } from "react-router";

export default class C1TimeAndHabitsBlog extends React.Component{
  render(){
    return(
        <div class="page-content">
          <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
          <h2>Timebox and habits techniques</h2>
          <p>
            While reading the articles I set myslef a time to go through them. Even when I wasn't quite done, I moved on to work on another task.
          </p>
          <p>
            I really liked the Fogg Method and would be very interested to try it out myself starting from tomorrow.
          </p>
          <p>
            I haven't tried any of them yet but would really want to start the Fogg method soon and apply it to my everyday life.
          </p>
          <p>
            There are two techniques I want to apply to my everday life, creating habits and fixed Mindset. I like what Charles Duhigg said about you have to show your behavoir first
            then the attitude will follow ("Display your ability first. Prove it to yourself and then you’ll believe it.").
          </p>
        </div>
      );
    }
  }
