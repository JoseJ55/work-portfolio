import React from 'react';
import './Footer.css';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer">
        <div id='footer-main'>
        {/* <h2 id="contactTitle">GET IN TOUCH</h2> */} 
            <p className="footer-main-item">Email: <a href="mailto:josejimenez826@gmail.com">josejimenez826@gmail.com</a></p>
            <p className="footer-main-item">Phone: 1-(760)-221-2790</p>
            <div id="footer-main-icons">
                <a href="https://github.com/JoseJ55"><AiFillGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/jose-jimenez-238453169"><AiFillLinkedin className="icon"/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer