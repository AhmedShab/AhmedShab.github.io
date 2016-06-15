import React from "react";

import { IndexLink, Link } from "react-router";

export default class T5ProblemSolving extends React.Component{
  render(){
    return(
      <div class="page-content">
          <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
              <h2>Have you ever got blocked on a simple problem? Solved a problem in an elegant way</h2>
              <h3>What was the problem?</h3>
              <p>
                I experienced lots of problems throughout my programming learning. Recently, I was working on a backend challenge (freecodecamp) so we were asked to
                write api (url root path) that takes a website then makes a short version of that site. E.g https://www.google.com generate 123 then redirect you to google.com.<br/><br/>

                I was having trouble getting the original url request (https://www.exaple.com) and display it on the website.
              </p>
              <h3>What problem solving techniques did you use?</h3>
              <p>
                I looked over my code, tried to analyze the problem by printing what is request itself. For example, when a user goes to my site, it will show what url they typed in.
                From there, all I had to do is select that request and display it on my page.
              </p>
              <h3>How did you feel throughout the process?</h3>
              <p>
                It was a little stressful, any problem solving is hard but we do it everyday in different forms. When I finally solved it, it felt very rewarding. Such a wonderful feeling haha.
              </p>
              <h3>What did you learn?</h3>
              <p>
                Never give up. It can be hard sometimes, but you have to keep going. Doing that everyday will help you improving your problem solving skills and will benefit a lot from it in the long run.
              </p>
              <h2>Reflect on how confident you feel using the problem solving techniques and process:</h2>
              <h3>Pseudocode</h3>
              <p>
                I have to be honest, I don't usually write pseudocode unless I work with someone and want to show them what I mean in a simple format.
              </p>
              <h3>Is writing </h3>
              <p>
                If you're talking about code, no matter how experienced you are there always will be a part of a code you don't understand. I feel confident enough though to write what I want to achieve.
              </p>
              <h3>Trying something</h3>
              <p>
                I aways do that when I'm not sure if my code is right. Trying things out is one of the best practice in programming. You won't know what's happening until you try it out.
              </p>
              <h3>Rubber ducky method</h3>
              <p>
                It's an interesting way to explain your program to yourself and see if you can actually explain it to someone. I normally think about how my program works in my mine. I sometimes face problems if I want to explain my code to someone.
                Applying the rubber ducky method could be very valuable to improve on that.
              </p>
              <h3>Reading error messages</h3>
              <p>
                It can be easy and hard at the same time. In javascript, error messages are not the most helpful comparing to other languages but it gets easier as I face them everyday.
              </p>
              <h3>Console.logging</h3>
              <p>
                One of the best methods I use to debug my code. To know what I'm doing and if I'm doing it correctly, I have to use it in my debugging process.
              </p>
              <h3>Googling</h3>
              <p>
                I give myself a timeframe, If I get stuck for too long then I google my problem and try to work it out.
              </p>
              <h3>Asking your peers for help</h3>
              <p>
                That's important as well, I didn't have a chance yet to ask for help but will definitely do in the future.
              </p>
              <h3>Asking coaches for help</h3>
              <p>
                Same as my previous answer. Will do that more often in the soon future.
              </p>
              <h3>Improving your process with reflection</h3>
              <p>
                It's important to me as that way I can improve myself and fix my problems easily, and next time I face them I will know what to do.
              </p>
              <h2>Describe what these functions do in your own words:</h2>
              <h3>.map()</h3>
              <p>
                Taking one array, manipulate it and that will produce a new array.
              </p>
              <h3>.filter()</h3>
              <p>
                Taking one array, manipulate it but this time, the function it takes return true if it passes that function and false if not. The new array will contain the elements that passed the test of that function.
              </p>
              <h3>.reduce()</h3>
              <p>
                A function that takes an array and reduces it to produce one result. For example, we can have an array with four elements and we want to add one with another.
              </p>
      </div>
      );
    }
  }
