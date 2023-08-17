import React from 'react';
import './Footer.css';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

function Footer() {
  return (
    <div id='footer'>
        <div id='footer-shape'></div>

        <div id='footer-text'>
            <p>© 2023 Jose Jimenez</p>
        </div>

        <div id='footer-links'>
            <FiGithub />
            <AiOutlineLinkedin />
            <HiOutlineMail />
        </div>
    </div>
  )
}

export default Footer;