import React from "react";
import { Link } from "react-router"

export default class Nav extends React.Component{

  render(){
    // const navAbout = location.pathname.match(/^\/c2-emotional-intelligence/) ? "active" : "";
    // const navPortfolio = location.pathname.match(/^\/c2-emotional-intelligence/) ? "active" : "";

    return(
      <ul class="nav nav-tabs">
        <li role="presentation"><Link to="">About</Link></li>
        <li role="presentation"><Link to="">Portfolio</Link></li>
      </ul>
    );
  }
}
