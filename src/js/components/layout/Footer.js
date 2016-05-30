import React from "react";

export default class Footer extends React.Component{
  render(){
    return(
      <footer>
        <p>
          <a href="mailto:ahmed.vuw@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/ahmed.s.shaaban" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
          <a href="https://twitter.com/A_Shab_" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
          <a href="https://nz.linkedin.com/in/ahmed-shaaban-4b4546105" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="https://github.com/AhmedShab/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        </p>
      </footer>
    );
  }
}
