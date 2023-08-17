import React from 'react';
import './Navbar.css';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

function Navbar() {
  return (
    <div id='navbar'>
        <div id='navbar-links'>
            <div className='navbar-link'>
                <p>Home</p>
                <div className='navbar-link-active'></div>
            </div>
            <div className='navbar-link'>
                <p>Projects</p>
                <div className='navbar-link-active'></div>
            </div>
            <div className='navbar-link'>
                <p>About</p>
                <div className='navbar-link-active'></div>
            </div>
            <div className='navbar-link'>
                <p>Contact</p>
                <div className='navbar-link-active'></div>
            </div>
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