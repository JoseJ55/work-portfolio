import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div id='experience'>
        <p id='experience-title'>Experience/Education</p>

        <div id='experience-info'>
            <div className='experience-info-section'>
                <p>Victor Valley College</p>
                <p>2020</p>
            </div>
            <div className='experience-info-break'></div>
            <div className='experience-info-section'>
                <p>University of California Riverside</p>
                <p>2021</p>
            </div>
            <div className='experience-info-break'></div>
            <div className='experience-info-section'>
                <p>FOMO Social .inc</p>
                <p>2021 - now</p>
            </div>
        </div>
    </div>
  )
}

export default Experience;