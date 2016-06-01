import React from "react";
import { Link } from "react-router"

export default class Nav extends React.Component{

  render(){
    const navHome = location.pathname === "/" ? "active" : "";
    // const navAbout = location.pathname.match(/^\/c2-emotional-intelligence/) ? "active" : "";
    // const navPortfolio = location.pathname.match(/^\/c2-emotional-intelligence/) ? "active" : "";

    return(
      <ul class="nav nav-tabs">
        <li role="presentation" class={navHome}><Link to="/">Home</Link></li>
        <li role="presentation"><Link to="">About</Link></li>
        <li role="presentation"><Link to="">Portfolio</Link></li>
      </ul>
    );
  }
}
