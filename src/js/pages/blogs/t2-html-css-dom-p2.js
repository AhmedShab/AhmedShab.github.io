import React from "react";

import { IndexLink, Link } from "react-router";

export default class T2TechnicalBlogP2 extends React.Component{
  render(){
    return(
      <div class="page-content">
          <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
              <h2>What is grid based design?</h2>
              <p>
                We can imagine web page is divided into rows and columns. An entire row with the full width of the page has 12 columns.
                This way, it's much easier to have a well-organized layout for users rather than having a little piece of a page all over the place.<br/><br/>

                You can see below the diagram of a column layout on a page.<br/><br/>
              </p>
              <img src="/images/grid-system.png" alt="" />
              <h2>Whats all the hype about responsive webpages?</h2>
              <p>
                Nowadays, we don't just have one size of a screen. That created few problems for designing a webpage.
                Because we can't know exactly how big or small the screen that users will be using, we can't use pixel to change ever single size.
                Thus, having responsive webpages will change the layout biased on the type of screen you have.
              </p>
              <h2>What is semantic structure?</h2>
              <p>
                I will try to explain this as clear as I can (sometimes it's hard to explain those things). We can think of Semantic structure as the order of importance in a webpage.
                For example, we have a title which is important detail about the page so we use h1 tag. For less important details, we can use  h2, h3 or h4.
                Therefore, These elements structured based on the specific order.<br/><br/>

                I found this diagram that could be helpful to illustrate what I mean. <br/><br/>
              </p>
              <img src="/images/semantic-elements.png" alt="" />
          </div>
      );
    }
  }
