import React from 'react';
import './Header.css';
import { MdArrowForwardIos } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { update_progress } from '../../Redux/Slices/Cursor';

import { TypeAnimation } from 'react-type-animation';

function Header() {
  let x = 0;
  let y = 0;

  const dispatch = useDispatch();

  const calculateTranslation = (rect, mouseX, mouseY, speed, distance) => {
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
  
    // Calculate the maximum and minimum translation values
    const maxTranslation = rect.width / 2;
    const minTranslation = -rect.width / 2;
  
    // Clamp the translation values within the maximum and minimum limits
    const clampedTranslationX = Math.max(Math.min(distanceX * speed, maxTranslation), minTranslation);
    const clampedTranslationY = Math.max(Math.min(distanceY * speed, maxTranslation), minTranslation);
  
    // Calculate the percentage values
    const percentageX = (clampedTranslationX - minTranslation) / (maxTranslation - minTranslation) * distance;
    const percentageY = (clampedTranslationY - minTranslation) / (maxTranslation - minTranslation) * distance;
  
    return { percentageX, percentageY };
  };

  const handleMouseMove = (e) => {
    x = e.offsetX;
    y = e.offsetY;

    var first = document.getElementById('header-back-first');
    var second = document.getElementById('header-back-second');
    var third = document.getElementById('header-back-third');

    var rect1 = first.getBoundingClientRect();
    var rect2 = second.getBoundingClientRect();
    var rect3 = third.getBoundingClientRect();

    const translation1 = calculateTranslation(rect1, x, y, 0.15, 10);
    const translation2 = calculateTranslation(rect2, x, y, 0.2, 15);
    const translation3 = calculateTranslation(rect3, x, y, 0.30, 80);

    requestAnimationFrame(() => { 
      first.style.transform = `translate(${translation1.percentageX}%, ${translation1.percentageY}%)`;
      second.style.transform = `translate(${translation2.percentageX}%, ${translation2.percentageY}%)`;
      third.style.transform = `translate(${translation3.percentageX}%, ${translation3.percentageY}%)`;
    });
  }

  window.addEventListener('mousemove', handleMouseMove);

  return (
    <div id='header'>
        <div className='header-back-icon' id='header-back-first'></div>
        <div className='header-back-icon' id='header-back-second'></div>
        <div className='header-back-icon' id='header-back-third'></div>
        
        <div id='header-text'>
          {/* <p>Hello<span className='colorChange'>,</span></p>
          <p>I am</p>
          <p><span className='colorChange'>Jose</span></p> */}
          <p className='backColor'>Hello<span className='colorChange'>,</span> I am</p>
          <TypeAnimation 
            sequence={[
              'Jose', 5000,
              'A Web Developer', 2000,
              'A Full-stack Developer', 2000,
              'A Engineer', 2000
            ]}
            wrapper='span'
            cursor={true}
            repeat={Infinity}
            className='colorChange backColor'
          />
        </div>

        <div id='header-action' onClick={e => {
          let home = document.getElementById("home");
          let projects = document.getElementById("projects");
          e.preventDefault();
          home && projects.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
          setTimeout(() => {
            dispatch(update_progress());
          },  500);
        }}>
            <div id='header-action-icons'>
                <MdArrowForwardIos className='header-action-icon' id='icon-back' />
                <MdArrowForwardIos className='header-action-icon' id='icon-forward' />
            </div>
        </div>
    </div>
  )
}

export default Header;