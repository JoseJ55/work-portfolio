import React from 'react';
import './Navbar.css';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

function Navbar() {
  return (
    <div id='navbar'>
        <div id='navbar-links'>
            <div className='navbar-link' onClick={e => {
                let home = document.getElementById("home");
                let header = document.getElementById("header");
                e.preventDefault();
                home && header.scrollIntoView({ behavior: "smooth", block: "start"});
            }}>
                <p>Home</p>
                <div className='navbar-link-active'></div>
            </div>

            <div className='navbar-link' onClick={e => {
                let home = document.getElementById("home");
                let projects = document.getElementById("projects");
                e.preventDefault();
                home && projects.scrollIntoView({ behavior: "smooth", block: "start"});
            }}>
                <p>Projects</p>
                <div className='navbar-link-active'></div>
            </div>

            <div className='navbar-link' onClick={e => {
                let home = document.getElementById("home");
                let about = document.getElementById("about");
                e.preventDefault();
                home && about.scrollIntoView({ behavior: "smooth", block: "start"});
            }}>
                <p>About</p>
                <div className='navbar-link-active'></div>
            </div>

            <div className='navbar-link' onClick={e => {
                let home = document.getElementById("home");
                let contact = document.getElementById("contact");
                e.preventDefault();
                home && contact.scrollIntoView({ behavior: "smooth", block: "start"});
            }}>
                <p>Contact</p>
                <div className='navbar-link-active'></div>
            </div>
        </div>

        <div id='navbar-social'>
            <a target='_blank' rel='noreferrer' href='mailto:josejimenez826@gmail.com'>
                <HiOutlineMail className='link-icon'/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jose-jimenez-238453169/'>
                <AiOutlineLinkedin className='link-icon' />
            </a>
            <a target='_blank' rel='noreferrer' href='https://github.com/JoseJ55'>
                <FiGithub className='link-icon' />
            </a>
        </div>
    </div>
  )
}

export default Navbar;