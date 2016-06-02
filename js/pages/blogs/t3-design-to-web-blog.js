import React from "react";

import { IndexLink, Link } from "react-router";

export default class T3DesignBlog extends React.Component{
  render(){
    return(
      <div class="page-content">
          <Link to="/" class="home-page"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link>
              <h2>What a responsive site is, and why responsiveness is important</h2>
              <p>
                A responsive site is simply a site that changes the scale of the site up and down based on how much you're resizing the page.<br/><br/>

                Therefore, it's important to have it because everyone has different screen size. imagine we don't have a responsive site.
                How are you going to design your site for a different screen? It's going to be impassable, right? You will have to think
                of every possible screen and design your site for the ones you selected.<br/><br/>

                Can you see now the power of responsive site? It saves you all the trouble working on different screen sizes.
              </p>
              <h2>What mobile first design is, and why it's important</h2>
              <p>
                It's an approach to have the same content of a desktop site to be viewable/ usable for users to use on their
                mobile first then convert it into a desktop environment. What I mean here by viewable/ usable is that it's easy for users to use.<br/><br/>

                It's important to have a mobile first design because nowadays there are a lot of users browsing sites using their phone.
                You don't want your site to be hard for users to navigate your content. Therefore, having this approach will guarantee that your sites work perfectly through any environment.
              </p>
              <h2>What are frameworks and what are their pros and cons?</h2>
              <p>
                Imagine that part of the house you're building is already made for you. You can just ask for that part to put it in your house rather than building it from scratch.<br/><br/>

                They're wonderful to have, gives you an advantage. You don't have to build ever single piece from scratch. You can select what you like to have in your house instead.<br/><br/>

                The only problem with framework though is that you have to learn how to use them. You also might not like some of it and try to understand how to change that small part.
                It might take a time to learn them too.

              </p>
              <h2>What a wireframe is and why we use it</h2>
              <p>
                If you're trying to build a house from scratch without a plan, how will you accomplish it? Will you try and see where everything fits together?<br/><br/>

                Can you tell now why we need wireframe for our app/website? It's more efficient and will save you a lot in the long run.
                If you're working with a team as well, you will be able to communicate your ideas with them. I think you can see the big picture now.<br/><br/>
              </p>
              <div class="c3-images-container">
                <img src="/images/wireframe-index-page-desktop.jpg" class="img-responsive c3-images" alt="" />
                <img src="/images/wireframe-index-page-mobile.jpg" class="img-responsive c3-images" alt="" />
                <img src="/images/wireframe-blog-page-desktop.jpg" class="img-responsive c3-images" alt="" />
                <img src="/images/wireframe-blog-page-mobile.jpg" class="img-responsive c3-images" alt="" />
              </div>
              <h2>The aspects of your wireframes you found difficult to implement, and why</h2>
              <p>
                Well, I have a simple wireframe. It's just a blog so I really don't have much besides my weekly posts. I'm not sure yet how my website could look any different
                from my mobile version but I will keep that in mind as I expand my blog in the future.
              </p>
          </div>
      );
    }
  }
