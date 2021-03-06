import React from 'react';
import "./ProjectInfo.css";

import { IoIosArrowBack } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { MdWeb } from "react-icons/md";

import ProjectInfoImages from '../ProjectInfoImages/ProjectInfoImages';

function ProjectInfo({ setPopup, info}) {
    console.log(info)

  return (
    <div id="ProjectInfo">
        <input type={"button"} id="ProjectInfo-btn" onClick={() => setPopup(false)}/>
        <div id="ProjectInfo-section">
            <div id="ProjectInfo-section-head">
                <button onClick={() => setPopup(false)}>
                    <IoIosArrowBack id="ProjectInfo-section-head-icon" />
                </button>

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

            <h1>{info.title}</h1>

            <div id="ProjectInfo-section-desc">
                <p>{info.description}</p>
            </div>

            <div id="ProjectInfo-section-tools">
                <ul>
                    {info.tools.map((tool) => (
                        <li>{tool}</li>
                    ))}
                </ul>
            </div>

            <ProjectInfoImages images={info.images} />
        </div>
    </div>
  )
}

export default ProjectInfo