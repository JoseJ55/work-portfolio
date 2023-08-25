import React from 'react';
import './ProjectScreens.css';

function ProjectScreens() {
  return (
    <div id='projectScreens'>
        <div id="projectScreens-pc">
            <div id='projectScreens-pc-contain'>
                <img id='projectScreens-pc-contain-image' src='/images/fitnessGym/fitness101-whole.jpg' alt='whole web page' />
            </div>

            <img id='projectScreens-pc-frame' src='/assets/pngFrames/mac-laptop.png' alt='laptop frame' />
        </div>

        <div id="projectScreens-mobile">
            <div id='projectScreens-mobile-contain'>
                <img id='projectScreens-mobile-contain-image' src='/images/fitnessGym/fitness101-mobile.jpg' alt='whole web page' />
            </div>

            <img id='projectScreens-mobile-frame' src='/assets/pngFrames/phoneFrame.png' alt='mobile frame' />
        </div>
    </div>
  )
}

export default ProjectScreens