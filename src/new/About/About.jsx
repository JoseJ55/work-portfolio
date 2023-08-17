import React from 'react';
import './About.css';

function About() {
  return (
    <div id='about'>
        <div id='about-profile'>
            <div id='about-profile-image'></div>
            <div id='about-profile-name'>
                <p><span>Jose</span> Jimenez</p>
            </div>
        </div>

        <div id='about-desc'>
            <p>My name is Jose Jimenez, I am a web developer with expertise in both frontend and backend development. My primary focus is on crafting visually stunning interfaces with exceptional usability. I am deeply passionate about staying at the forefront of web development trends, which drives me to continuously expand my skill set.</p>
            <p>In frontend development, I excel in using JavaScript to create captivating animations and leverage popular frameworks like React and Angular to build bespoke components. Additionally, I harness the power of Node.js and Python Django to develop robust and secure backends, enabling me to deliver full-stack projects with confidence.</p>
            <p>Currently, I am actively exploring the realm of 3D modeling and manipulation with Three.js, which adds another dimension of creativity to my repertoire. My commitment to innovation leads me to explore various applications, and I am always eager to acquire new skills that enhance my project capabilities.</p>
        </div>
    </div>
  )
}

export default About;