import React from 'react';
import './Projects.css';

import { useSelector } from 'react-redux';

import ProjectCard from './ProjectCard/ProjectCard';

function Projects() {

  const { all } = useSelector((state) => state.projects);

  return (
    <div id='projects'>
      <ProjectCard project={all[0]} />
      <ProjectCard project={all[1]} />
      <ProjectCard project={all[2]} />
      <ProjectCard project={all[3]} />
    </div>
  )
}

export default Projects;