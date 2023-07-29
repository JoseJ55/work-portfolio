import React, { useEffect, useState } from 'react';
import "./About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = document.getElementById('portfolio_about').getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
      
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="portfolio_about">
        <div id="portfolio_about_shape"></div>
        <h1 style={{ display: isVisible ? 'block' : 'none'}}>Hello there</h1>

        <p style={{ display: isVisible ? 'block' : 'none'}}>My name is Jose Jimenez, I am a web developer with expertise in both frontend and backend development. My primary focus is on crafting visually stunning interfaces with exceptional usability. I am deeply passionate about staying at the forefront of web development trends, which drives me to continuously expand my skill set.</p> 

        <p style={{ display: isVisible ? 'block' : 'none'}}>In frontend development, I excel in using JavaScript to create captivating animations and leverage popular frameworks like React and Angular to build bespoke components. Additionally, I harness the power of Node.js and Python Django to develop robust and secure backends, enabling me to deliver full-stack projects with confidence.</p>

        <p style={{ display: isVisible ? 'block' : 'none'}}>Currently, I am actively exploring the realm of 3D modeling and manipulation with Three.js, which adds another dimension of creativity to my repertoire. My commitment to innovation leads me to explore various applications, and I am always eager to acquire new skills that enhance my project capabilities.</p>
    </div>
  )
}

export default About