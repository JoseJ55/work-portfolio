import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div id='projects'>
      <div id='project-title'>
        <div id='project-title-shape'></div>
        <div id='project-title-text'>
          <p>My Projects</p>
        </div>
      </div>

      <div id='projects-tabs'>
        <button className='projects-tab'>Project 1</button>
        <div className='projects-tabs-break'></div>
        <button className='projects-tab'>Project 2</button>
        <div className='projects-tabs-break'></div>
        <button className='projects-tab'>Project 3</button>
        <div className='projects-tabs-break'></div>
        <button className='projects-tab'>Project 4</button>
        <div className='projects-tabs-break'></div>
        <button className='projects-tab'>Project 5</button>
      </div>

      <div id='project-images'>

      </div>
    </div>
  )
}

export default Projects;