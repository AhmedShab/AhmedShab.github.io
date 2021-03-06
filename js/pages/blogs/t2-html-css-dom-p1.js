import React from "react";

import { IndexLink, Link } from "react-router";

export default class T2TechnicalBlogP1 extends React.Component{
  render(){
    return(
      <div class="page-content">
        <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
        <div class="question-one">
          <h2>Can you think of an analogy to describe HTML, CSS and the DOM? How would you describe it to your non-technical friend?</h2>
          <p>
            I was trying to think of a different way to describe it but I believe the house analogy is the best.<br></br><br></br>

            You can think of the HTML as the house footprint. A house has rooms, kitchen bathroom and so on. The same thing here applies to HTML elements (e.g: body, div, h ... etc). It allows us to build the house with different features and how the house looks like.<br></br><br></br>

            CSS is more like taken the house you built with your HTML and paint it with different colors. You can choose what color you want your room or if you like to have the same color to all your rooms, you can do that as well.<br></br><br></br>

            The DOM could be (this might not be the best analogy) a building from top to bottom. You can't go the top floor without going through the floors in between. That's the same thing when you view a website. The layout of a website starts from top to button of a page.
          </p>
        </div>
        <div class="question-two">
          <h2>What is meant by boxifying design?</h2>
          <p>
            It means that you take an entire web page and draw boxes around each element of the HTML.
            Think of a web page as a block of boxes, you can break it down to several boxes to define each element in the DOM.
          </p>
        </div>
        <div class="question-three">
          <h2>What is the box model?</h2>
          <p>
            As we know, every HTML element is considered as a box. Well, box model is how we describe the design and layout of the element.
            They have hidden attributes that contain margins, borders, padding, and the actual content.
          </p>
        </div>
      </div>
    );
  }
}
