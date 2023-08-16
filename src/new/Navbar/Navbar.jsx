import React from 'react';
import './Navbar.css';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

function Navbar() {
  return (
    <div id='navbar'>
        <div id='navbar-links'>
            <p>Home</p>
            <p>Projects</p>
            <p>About</p>
            <p>Contact</p>
        </div>

        <div id='navbar-social'>
            <HiOutlineMail className='link-icon'/>
            <AiOutlineLinkedin className='link-icon' />
            <FiGithub className='link-icon' />
        </div>
    </div>
  )
}

export default Navbar;