import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
        <div class="container">
          <div class="main-page-content">
            <h1>My 19 weeks journey towards becoming a successful web developer: Ahmed Shaaban</h1>
            <h3>This is my weekly blog that I will be sharing my experince toward working on becoming a successful web developer.</h3>
          </div>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}
