import React from 'react';
import './Navbar.css';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineClose } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {

    const handleClose = (e) => {
        // Close the navbar
        let closeIcon = document.getElementById('navbar-close');
        let openIcon = document.getElementById('navbar-open');
        e.preventDefault();

        closeIcon.style.display = 'flex';
        openIcon.style.display = 'none';
    }

    const handleOpen = (e) => {
        // Open the navbar
        let closeIcon = document.getElementById('navbar-close');
        let openIcon = document.getElementById('navbar-open');
        e.preventDefault();

        closeIcon.style.display = 'none';
        openIcon.style.display = 'flex';
    }

  return (
    <div id='navbar'>
        <div id='navbar-links'>
            <div className='navbar-link' onClick={e => {
                let home = document.getElementById("home");
                let header = document.getElementById("header");
                e.preventDefault();
                home && header.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"});
            }}>
                <p>Home</p>
                <div className='navbar-link-active'></div>
            </div>

            <div className='navbar-link' onClick={e => {
                let home = document.getElementById("home");
                let projects = document.getElementById("projects");
                e.preventDefault();
                home && projects.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
            }}>
                <p>Projects</p>
                <div className='navbar-link-active'></div>
            </div>

            <div className='navbar-link' onClick={e => {
                let home = document.getElementById("home");
                let about = document.getElementById("about");
                e.preventDefault();
                home && about.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
            }}>
                <p>About</p>
                <div className='navbar-link-active'></div>
            </div>

            <div className='navbar-link' onClick={e => {
                let home = document.getElementById("home");
                let contact = document.getElementById("contact");
                e.preventDefault();
                home && contact.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"});
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

        {/* This is for mobile navbar */}
        <div id='navbar-close'>
            <GiHamburgerMenu id='navbar-close-icon' onClick={handleOpen} />
        </div>

        <div id='navbar-open'>
            <AiOutlineClose id='navbar-open-icon' onClick={handleClose} />

            <div id='navbar-open-items'>
                <div className='navbar-open-item' onClick={e => {
                    let home = document.getElementById("home");
                    let header = document.getElementById("header");
                    e.preventDefault();
                    home && header.scrollIntoView({ behavior: "smooth", block: "start"});
                    handleClose(e);
                }}>
                    <p>Home</p>
                </div>

                <div className='navbar-open-items-border'></div>

                <div className='navbar-open-item' onClick={e => {
                    let home = document.getElementById("home");
                    let projects = document.getElementById("projects");
                    e.preventDefault();
                    home && projects.scrollIntoView({ behavior: "smooth", block: "start"});
                    handleClose(e);
                }}>
                    <p>Projects</p>
                </div>

                <div className='navbar-open-items-border'></div>

                <div className='navbar-open-item' onClick={e => {
                    let home = document.getElementById("home");
                    let about = document.getElementById("about");
                    e.preventDefault();
                    home && about.scrollIntoView({ behavior: "smooth", block: "start"});
                    handleClose(e);
                }}>
                    <p>About</p>
                </div>

                <div className='navbar-open-items-border'></div>

                <div className='navbar-open-item' onClick={e => {
                    let home = document.getElementById("home");
                    let contact = document.getElementById("contact");
                    e.preventDefault();
                    home && contact.scrollIntoView({ behavior: "smooth", block: "start"});
                    handleClose(e);
                }}>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;