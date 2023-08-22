import React from 'react';
import './Projects.css';

import { useSelector } from 'react-redux';

import ProjectTabs from '../ProjectTabs/ProjectTabs';
import ProjectImage from '../ProjectImage/ProjectImage';

function Projects() {

  const { all } = useSelector((state) => state.projects);

  return (
    <div id='projects'>
      <div id='project-title'>
        <div id='project-title-shape'></div>
        <div id='project-title-text'>
          <p>My Projects</p>
        </div>
      </div>

      <div id='projects-tabs'>
        <ProjectTabs data={all[0]} />
        <div className='projects-tabs-break'></div>
        <ProjectTabs data={all[1]} />
        <div className='projects-tabs-break'></div>
        <ProjectTabs data={all[2]} />
        <div className='projects-tabs-break'></div>
        <ProjectTabs data={all[3]} />
        <div className='projects-tabs-break'></div>
        <ProjectTabs data={all[4]} />
      </div>

      <ProjectImage data={all} />
    </div>
  )
}

export default Projects;