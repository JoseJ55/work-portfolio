import React, { useState, useEffect } from 'react';
import './ProjectPage.css';

import { useSelector, useDispatch } from 'react-redux';
import { set_show_project } from '../../Redux/Slices/Projects';

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from 'react-icons/cg';

import ProjectScreens from '../../new/ProjectScreens/ProjectScreens';

function ProjectPage() {
  const { all, current_project } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  const [current, setCurrent] = useState({});

  const handleBack = () => {
    dispatch(set_show_project(false));
  }

  useEffect(() => {
    const temp = all.filter((project) => project.id === current_project);

    setCurrent(temp[0]);
  }, [all, current_project])

  return (
    <div id='project-page'>
      <div id='project-page-back' onClick={() => handleBack()}></div>

      <div id='project-page-container'>
        <div id='project-page-container-head'>
          <p id='project-page-container-head-title'>{current.title}</p>

          <div id='project-page-container-head-link'>
            <a href={current?.links?.github}><AiFillGithub className="project-icon"/></a>
            <a href={current?.links?.live}><CgWebsite className="project-icon"/></a>
          </div>
        </div>

        <p id='project-page-container-desc'>{current.description}</p>
      
        <ProjectScreens />
      </div>
    </div>
  )
}

export default ProjectPage