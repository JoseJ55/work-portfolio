import React, { useState, useMemo, useRef } from 'react';
import './AboutText.css';

function AboutText({ isVisible, time, text }) {
    const [animate, setAnimate] = useState('');

    const paraRef = useRef();

    useMemo(() => {
        if (isVisible) {
            setTimeout(() => {
                setAnimate('slideUp 1s forwards');
            }, 1000 * time);
        }
    }, [isVisible, time])

  return (
    <div className='about-text'>
        <p 
            ref={paraRef} 
            style={{ animation: animate }}
        >
            {text}
        </p>
    </div>
  )
}

export default AboutText;