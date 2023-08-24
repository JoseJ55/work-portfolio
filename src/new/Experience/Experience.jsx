import React from 'react';
import './Experience.css';

import { BsBuilding } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';

function Experience() {
  return (
    <div id='experience'>
        <p id='experience-title'>Experience/Education</p>

        <div id='experience-info'>
            <div className='experience-info-section'>
                <div className='experience-info-section-title'>
                    <IoMdSchool className='experience-info-section-title-icon' />
                    <p>Victor Valley College</p>
                </div>
                <p className='experience-info-section-date'>2020</p>
            </div>

            <div className='experience-info-break'></div>

            <div className='experience-info-section'>
                <div className='experience-info-section-title'>
                    <IoMdSchool className='experience-info-section-title-icon' />
                    <p>University of California Riverside</p>
                </div>
                <p className='experience-info-section-date'>2021</p>
            </div>

            <div className='experience-info-break'></div>

            <div className='experience-info-section'>
                <div className='experience-info-section-title'>
                    <BsBuilding className='experience-info-section-title-icon' />
                    <p>FOMO Social .inc</p>
                </div>
                <p className='experience-info-section-date'>2021 - now</p>
            </div>
        </div>
    </div>
  )
}

export default Experience;