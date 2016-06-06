import React from "react";

import { IndexLink, Link } from "react-router";

export default class T4JavascriptBasics extends React.Component{
  render(){
    return(
      <div class="page-content">
          <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
              <h2>How does JavaScript compare to HTML and CSS?</h2>
              <p>
                Javascript would be connecting wires in your house to make (e.g) electricity works in your house.
                In that sense, it's more like hidden extra work to make your website more powerful

              </p>
              <h2>Explain control flow and loops using an example process from everyday life, for example 'waking up' or 'brushing your teeth'</h2>
              <p>

                Let's say it is time for dinner and you have two options, order pizza or make what you have in your fridge. You decided to make dinner yourself so you do so.
                The next day you wanna do the same thing and you repeat that same procedure.<br/><br/>

                That's exactly what IF/else statements, decide one thing over the other then proceed it.
                Loops are the procedure you repeat over and over. Sounds simple now does it?
              </p>
              <h2>Explain the difference between accessing data from arrays and object literals</h2>
              <p>
                Arrays start from position 0 to access the first data and I would say it mainly store basic data.<br/><br/>

                Whereas you can make objects more complicated with a bigger responsibility. However, in terms of data, we have to access to it from no particular order.
                We just need a reference to that object then get a data from it.
              </p>
              <h2>Explain what functions are and why they are useful</h2>
              <p>
                Functions are simply a block of code that we can call over and over many times we want.<br/><br/>

                You can produce the same result without having a function, but imagine if you need to have the same code over several places, what would you do?
                You will have to repeat that code all over the place. It takes time and doing that way is inconsistent. That's where the function can be useful, you can just make one function and use it anywhere you want.
                Saves you plenty of time and space in your editor

              </p>
          </div>
      );
    }
  }
