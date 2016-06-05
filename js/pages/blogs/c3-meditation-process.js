import React from "react";

import { IndexLink, Link } from "react-router";

export default class C3MediationBlog extends React.Component{
  render(){
    return(
      <div class="page-content">
        <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
        <h2>What did you think about mediation before reading chapter 2?</h2>
        <p>
          A way to free your mind from any external thought.
        </p>
        <h2>What new things have you learnt about mediation?</h2>
        <p>
          How easily you can meditate everyday if you set a specific time for it everyday. After that, it will become more like a habit you have.
        </p>
        <h2>Did any of the suggested mediation techniques stand out to you?</h2>
        <p>
          Meditation posture seems interesting to me. I never tried it myself which is why I'm keen to try it when I can.
          In fact, I will organize a time once in the morning and practice it.
        </p>
      </div>
    );
  }
}
