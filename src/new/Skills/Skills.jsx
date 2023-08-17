import React from 'react';
import './Skills.css';

import { FaCss3Alt, FaNodeJs, FaDigitalOcean, FaDocker, FaReact, FaPython } from 'react-icons/fa';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import { SiThreedotjs, SiJavascript, SiMongodb, SiFirebase, SiRedux, SiDjango } from 'react-icons/si';

function Skills() {
  return (
    <div id='skills'>
        <p>My Skills</p>

        <div id='skills-icons'>
            <div className='skills-icon' id='skill1'>
                <FaReact />
            </div>
            <div className='skills-icon' id='skill2'>
                <SiJavascript />
            </div>
            <div className='skills-icon' id='skill3'>
                <FaPython />
            </div>
            <div className='skills-icon' id='skill4'>
                <SiMongodb />
            </div>
            <div className='skills-icon' id='skill5'>
                <SiFirebase />
            </div>
            <div className='skills-icon' id='skill6'>
                <SiRedux />
            </div>
            <div className='skills-icon' id='skill7'>
                <SiDjango />
            </div>
            <div className='skills-icon' id='skill8'>
                <FaCss3Alt />
            </div>
            <div className='skills-icon' id='skill9'>
                <FaNodeJs />
            </div>
            <div className='skills-icon' id='skill10'>
                <FaDigitalOcean />
            </div>
            <div className='skills-icon' id='skill11'>
                <FaDocker />
            </div>
            <div className='skills-icon' id='skill12'>
                <AiFillHtml5 />
            </div>
            <div className='skills-icon' id='skill13'>
                <AiFillGithub />
            </div>
            <div className='skills-icon' id='skill14'>
                <GrMysql />
            </div>
            <div className='skills-icon' id='skill15'>
                <SiThreedotjs />
            </div>
        </div>
    </div>
  )
}

export default Skills;