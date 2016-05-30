import React from "react";

import { IndexLink, Link } from "react-router";

export default class C2ReflectionBlog extends React.Component{
  render(){
    return(
      <div class="page-content">
        <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
        <div class="t2-question-1">
          <h2>What learnings did you take from the chapter?</h2>
          <p>
            If I want to summrize it in few words, I would say that our mind is very hard to understand. At the same time, this enforced me to be more aware of how we think and behave.<br/><br/>

          Happiness is an important mindset. Being happy allows us to focus on the task as it's the default state of our mind. If you're happy, you are most likely a calm person.<br/><br/>

        I have to share this wonderful quotes, it caught my attention:
        <b>"Breathing as if your life depends on it"</b> -Jon Kabat-Zinn
        </p>
          </div>
          <div class="c2-question-2">
            <h2>How did you find the two minutes of mindfulness?</h2>
            <p>
              It was wonderful exrice to do. I tried it in the morning and it's incredible. As we are busy with our lives (working or doing whatever makes us busy and even stressed about few things),
              it's incredible how we easily we can escape our problems for a few minutes.<br/>

              It's worth making it a habit every morning. Releasing yourself for all the troubles and worries you have makes you happier and have a productive day overall.<br/>

              I have been doing some kind of meditation every moring after breakfast and must admit, it makes my day much better.
          </p>
        </div>
      </div>
    );
  }
}
