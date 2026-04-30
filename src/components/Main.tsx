import React from "react";
import meee from '../assets/images/Meee.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div id="home" className="about-section">
        <div className="image-wrapper">
          <img src={meee} alt="Avatar"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/shiveush" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shiveush/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shiveush Pandiyaraj</h1>
          <p>I create practical software projects, from frontend apps to system-level experiments.
            Currently exploring full-stack development and real-time systems.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/shiveush" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shiveush/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;