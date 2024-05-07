import React, { useState } from 'react';
import './Navbar.css';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineClose } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

import { motion } from 'framer-motion';

import NavbarLink from './components/NavbarLink/NavbarLink';
import MobileLink from './components/MobileLink/MobileLink';

function Navbar() {
    const [openNav, setOpenNav] = useState(false);

    const hidden = { opacity: 0, y: -100, transition: { duration: 0.5, ease: "easeInOut" } };
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } };

    const handleNav = () => {
        setOpenNav((prev) => !prev);
    }

  return (
    <div id='navbar'>
        <div id='navbar-links'>
            <NavbarLink name={'Home'} href='header' />
            <NavbarLink name={'Projects'} href='projects' />
            <NavbarLink name={'About'} href='about' />
            <NavbarLink name={'Contact'} href='contact' />
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
        <div id='mobile-navbar-button'>
            {openNav ? 
                <AiOutlineClose id='navbar-open-icon' onClick={handleNav} /> :
                <GiHamburgerMenu id='navbar-close-icon' onClick={handleNav} />}
        </div>

        <motion.div 
            id='navbar-open-items'
            initial={openNav ? visible : hidden}
            animate={openNav ? visible : hidden}
            transition={{ duration: 0.5 }}
            style={{ pointerEvents: openNav ? 'auto' : 'none'}}
        >
            <MobileLink name='Home' idName='header' handleNav={handleNav} />

            <div className='navbar-open-items-border'></div>

            <MobileLink name='Projects' idName='projects' handleNav={handleNav} />

            <div className='navbar-open-items-border'></div>

            <MobileLink name='About' idName='about' handleNav={handleNav} />

            <div className='navbar-open-items-border'></div>

            <MobileLink name='Contact' idName='contact' handleNav={handleNav} />
        </motion.div>
    </div>
  )
}

export default Navbar;