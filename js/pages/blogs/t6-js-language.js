import React from "react";

import { IndexLink, Link } from "react-router";

export default class T6Js extends React.Component{
  render(){
    return(
      <div class="page-content">
          <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
              <h2>In the JavaScript language, describe all the use cases for each of:</h2>
              <h3>parentheses () - e.g. '1. Execute a function var result = doSomething()'</h3>
              <p>
                parentheses in javascript are going to a function and execute its block of code then it go back again to where it was. E.g if I have a function called <code>greeting()</code>, it executes the block of greeting code
                then return to the <code>greeting()</code> line. It can also be used to group expressions. E.g <code>(1 + 3) * 4 = 16</code>.

              </p>
              <h3>brackets []</h3>
              <p>This can be used to create arrays. I can create an array such as <code>var greeting = []</code> and add what I need to that array.</p>
              <h3>braces {}</h3>
              <p>Can be used for defining where a function, condition or object starting and ending points</p>
              <h3> single quotes '' and double quotes ""</h3>
              <p>They are the same thing. Basically creating a string in javascript, you would use one of the two.</p>
          </div>
      );
    }
  }
