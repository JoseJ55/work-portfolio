import React, { useRef, useState, useMemo, useEffect } from 'react';
import './About.css';

import AboutText from '../AboutText/AboutText';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  const bodyRef = useRef();

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    }
  ), []);

  useEffect(() => {
    observer.observe(bodyRef.current)
    return () => observer.disconnect()
  }, [observer])

  return (
    <div id='about'>
        <div id='about-profile'>
            <img id='about-profile-image' src='/images/profile-500px.png' alt='profile' />
            <div id='about-profile-name'>
                <p><span>Jose</span> Jimenez</p>
            </div>
        </div>

        <div ref={bodyRef} id='about-desc'>
          <AboutText isVisible={isVisible} time={1} text={'My name is Jose Jimenez, I am a web developer with expertise in both frontend and backend development. My primary focus is on crafting visually stunning interfaces with exceptional usability. I am deeply passionate about staying at the forefront of web development trends, which drives me to continuously expand my skill set.'} />
          <AboutText isVisible={isVisible} time={2.5} text={'In frontend development, I excel in using JavaScript to create captivating animations and leverage popular frameworks like React and Angular to build bespoke components. Additionally, I harness the power of Node.js and Python Django to develop robust and secure backends, enabling me to deliver full-stack projects with confidence.'} />
          <AboutText isVisible={isVisible} time={4} text={'Currently, I am actively exploring the realm of 3D modeling and manipulation with Three.js, which adds another dimension of creativity to my repertoire. My commitment to innovation leads me to explore various applications, and I am always eager to acquire new skills that enhance my project capabilities.'} />
        </div>
    </div>
  )
}

export default About;