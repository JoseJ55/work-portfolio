import React, { useState, useEffect } from 'react';
import './Projects.css';

import { useSelector, useDispatch } from 'react-redux';
import { set_current_project, set_show_project } from '../../Redux/Slices/Projects';

// import ProjectTabs from '../ProjectTabs/ProjectTabs';
// import ProjectImage from '../ProjectImage/ProjectImage';

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from 'react-icons/cg';

import ProjectCard from './ProjectCard/ProjectCard';

function Projects() {

  const { all } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  // const [opacity, setOpacity] = useState(1);

  // useEffect(() => {
  //   // Function to handle scroll event
  //   const handleScroll = () => {
  //     // Assuming the sticky area starts at  100px from the top
  //     const stickyAreaStart =  0;
  //     // Get the current scroll position
  //     const scrollPosition = window.scrollX;

  //     // Calculate the opacity based on the scroll position
  //     if (scrollPosition >= stickyAreaStart) {
  //       // Set the opacity to  0.5 when the element is sticking
  //       setOpacity(0.5);
  //     } else {
  //       // Reset the opacity to  1 when the element is not sticking
  //       setOpacity(1);
  //     }
  //   };

  //   // Add the scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [])

  return (
    <div id='projects'>
      <ProjectCard project={all[0]} />
      {/* <ProjectCard project={all[1]} /> */}

      {/* <div id='project-title'>
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
        src={all[0].coverImage} alt={`Project Sample`} />
        <div className='projects-tabs-break'></div>
        
        <ProjectTabs data={all[1]} />
        <img 
        className='projects-tabs-image mobile-ony'
        onClick={() => {
          dispatch(set_current_project(all[1].id));
          dispatch(set_show_project(true));
        }} 
        src={all[1].coverImage} alt={`Project Sample`} />
        <div className='projects-tabs-break'></div>
        
        <ProjectTabs data={all[2]} />
        <img 
        className='projects-tabs-image mobile-ony' 
        onClick={() => {
          dispatch(set_current_project(all[2].id));
          dispatch(set_show_project(true));
        }}
        src={all[2].coverImage} alt={`Project Sample`} />
        <div className='projects-tabs-break'></div>
        
        <ProjectTabs data={all[3]} />
        <img 
        className='projects-tabs-image mobile-ony' 
        onClick={() => {
          dispatch(set_current_project(all[3].id));
          dispatch(set_show_project(true));
        }}
        src={all[3].coverImage} alt={`Project Sample`} />
        <div className='projects-tabs-break'></div>
        
        <ProjectTabs data={all[4]} />
        <img 
        className='projects-tabs-image mobile-ony' 
        onClick={() => {
          dispatch(set_current_project(all[4].id));
          dispatch(set_show_project(true));
        }}
        src={all[4].coverImage} alt={`Project Sample`} />
      </div>

      <ProjectImage data={all} /> */}
    </div>
  )
}

export default Projects;