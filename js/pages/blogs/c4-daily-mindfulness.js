import React from "react";

import { IndexLink, Link } from "react-router";

export default class C4DailyMindfulness extends React.Component{
  render(){
    return(
      <div class="page-content">
          <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
              <h2>What did you learn from your 'mindfulness conversation'? How did the other person find it?</h2>
              <p>
                There are three parts to it:<br/><br/>

                Listening: Listening to that person you're talking to without any distractions.<br/><br/>

                Looping: After he/she is done talking, you have to demonstrate what you have listed.<br/><br/>

                Dipping: Is checking with yourself and see if you're not distracted by internal distractions.<br/><br/>

                I haven't had the chance to practice it myself, but it gave me some useful awareness of how I can improve my communication skills and that is something valuable to have.
              </p>
              <h2>Which of the three suggested techniques will you use to sustain your practice?</h2>
              <p>
                I think I going for 'do less then you can'. That doesn't mean I I'm not gonna accomplish my practice, it will help me more in the long run as I will do it regularly and keep it consistency.
                For example, I will keep practicing this week for 10 mins then expand it the week after.<br/><br/>

                The important thing (as the author said) is that it doesn't become a burden to you. If that happened, there is no point of practicing it.
              </p>
          </div>
      );
    }
  }
