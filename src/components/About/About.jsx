import React from 'react';
import "./About.css";

function About({ offset }) {
  return (
    <div id="portfolio_about">
        <div id="portfolio_about_shape"></div>
        <p style={{transform: `translateY(${offset * 0.1}px)`}}>A Web Developer with an Associates’s Degree in computer information science at Victor Valley College and a certificate in Web Development from the University of California Riverside. Proficient in programming with HTML, CSS, and javascript which is used to connect both the frontend and backend of a website.</p>
    </div>
  )
}

export default About