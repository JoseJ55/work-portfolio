import React, { useState, useMemo, useRef } from 'react';
import './AboutText.css';

function AboutText({ isVisible, time, text }) {
    const [animate, setAnimate] = useState('');

    const paraRef = useRef();

    useMemo(() => {
        if (isVisible) {
            setTimeout(() => {
                if (window.innerWidth < window.innerHeight) {
                    setAnimate('fadeIn 1s forwards');
                    return;
                }
                setAnimate('slideUp 1s forwards');
            }, 500 * time);
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