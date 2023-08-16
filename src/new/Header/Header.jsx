import React from 'react';
import './Header.css';
import { MdArrowForwardIos } from 'react-icons/md';

function Header() {
  return (
    <div id='header'>
        <div className='header-back-icon' id='header-back-first'></div>
        <div className='header-back-icon' id='header-back-second'></div>
        <div className='header-back-icon' id='header-back-third'></div>
        
        <div id='header-text'>
            <p>Hello<span>,</span></p>
            <p>I am</p>
            <p><span>Jose</span></p>
        </div>

        <div id='header-action'>
            <div id='header-action-icons'>
                <MdArrowForwardIos className='header-action-icon' id='icon-back' />
                <MdArrowForwardIos className='header-action-icon' id='icon-forward' />
            </div>
        </div>
    </div>
  )
}

export default Header;