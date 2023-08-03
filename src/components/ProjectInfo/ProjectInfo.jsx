import React from 'react';
import "./ProjectInfo.css";

import { AiFillGithub } from "react-icons/ai";
import { MdWeb } from "react-icons/md";

import ProjectInfoImages from '../ProjectInfoImages/ProjectInfoImages';

function ProjectInfo({ setPopup, info}) {
  return (
    <div id="ProjectInfo">
        <input type={"button"} id="ProjectInfo-btn" onClick={() => setPopup(false)}/>

        <div id="ProjectInfo-section">
            <div id='section-projectInfo'>
                <div id='section-head'>
                    <h1>{info.title}</h1>

                    <div id="ProjectInfo-section-head-links">
                        {info.links.github ? 
                            <a 
                                href={info.links.github}
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub className='ProjectInfo-section-head-links-icons'/>
                            </a> 
                        : <></>}
                        {info.links.live ? 
                            <a 
                                href={info.links.live}
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <MdWeb className='ProjectInfo-section-head-links-icons'/>
                            </a> 
                        : <></>}
                    </div> 
                </div>

                <div id="ProjectInfo-section-desc">
                    <p>{info.description}</p>
                </div>

                {/* <div id="ProjectInfo-section-tools">
                    <ul>
                        {info.tools.map((tool) => (
                            <li>{tool}</li>
                        ))}
                    </ul>
                </div> */}
            </div>

            <ProjectInfoImages images={info.images} />
        </div>
    </div>
  )
}

export default ProjectInfo