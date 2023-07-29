import React, { useRef, useState, useEffect } from 'react';
import './Wave.css';

import waveUp from './waveUp.svg';
import waveDown from './waveDown.svg';

function Wave() {
  const waveRef = useRef();
  const bottomWaveRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = bottomWaveRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (element.top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
      
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='wave' ref={waveRef} style={{ display: isVisible ? 'block' : 'none' }}>
        <img className='wave-up' src={waveUp} alt='wave up' />
        <img className='wave-down' src={waveDown} alt='wave down' ref={bottomWaveRef}/>
    </div>
  )
}

export default Wave