import React from 'react';
import './Projects.css';

import { useSelector, useDispatch } from 'react-redux';
import { set_current_project, set_show_project } from '../../Redux/Slices/Projects';

import ProjectTabs from '../ProjectTabs/ProjectTabs';
import ProjectImage from '../ProjectImage/ProjectImage';

function Projects() {

  const { all } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

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
        <img 
        className='projects-tabs-image mobile-ony' 
        onClick={() => {
          dispatch(set_current_project(all[0].id));
          dispatch(set_show_project(true));
        }}
        src={all[0].images[0]} alt={`Project Sample`} />
        <div className='projects-tabs-break'></div>
        
        <ProjectTabs data={all[1]} />
        <img 
        className='projects-tabs-image mobile-ony'
        onClick={() => {
          dispatch(set_current_project(all[1].id));
          dispatch(set_show_project(true));
        }} 
        src={all[1].images[0]} alt={`Project Sample`} />
        <div className='projects-tabs-break'></div>
        
        <ProjectTabs data={all[2]} />
        <img 
        className='projects-tabs-image mobile-ony' 
        onClick={() => {
          dispatch(set_current_project(all[2].id));
          dispatch(set_show_project(true));
        }}
        src={all[2].images[0]} alt={`Project Sample`} />
        <div className='projects-tabs-break'></div>
        
        <ProjectTabs data={all[3]} />
        <img 
        className='projects-tabs-image mobile-ony' 
        onClick={() => {
          dispatch(set_current_project(all[3].id));
          dispatch(set_show_project(true));
        }}
        src={all[3].images[0]} alt={`Project Sample`} />
        <div className='projects-tabs-break'></div>
        
        <ProjectTabs data={all[4]} />
        <img 
        className='projects-tabs-image mobile-ony' 
        onClick={() => {
          dispatch(set_current_project(all[4].id));
          dispatch(set_show_project(true));
        }}
        src={all[4].images[0]} alt={`Project Sample`} />
      </div>

      <ProjectImage data={all} />
    </div>
  )
}

export default Projects;