import React from 'react';
import './ProjectScreens.css';

function ProjectScreens({ current }) {
  return (
    <div 
    id='projectScreens' 
    style={{ 
        justifyContent: current.mobileImage === null ? 'center' : 'space-between'
    }}>
        <div id="projectScreens-pc">
            <div id='projectScreens-pc-contain'>
                <img id='projectScreens-pc-contain-image' src={current?.pcImage} alt='whole web page' />
            </div>

            <img id='projectScreens-pc-frame' src='/assets/pngFrames/mac-laptop.png' alt='laptop frame' />
        </div>

        {current.mobileImage && (
            <div id="projectScreens-mobile">
                <div id='projectScreens-mobile-contain'>
                    <img id='projectScreens-mobile-contain-image' src={current?.mobileImage} alt='whole web page' />
                </div>

                <img id='projectScreens-mobile-frame' src='/assets/pngFrames/phoneFrame.png' alt='mobile frame' />
            </div>
        )}
    </div>
  )
}

export default ProjectScreens