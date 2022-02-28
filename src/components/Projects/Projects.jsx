import React, { useContext } from 'react';
import "./Projects.css";

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectPage from '../ProjectPage/ProjectPage';
import { ProjectsContext } from "../../projectsContext";

function Projects({ offset }) {
    const { projects } = useContext(ProjectsContext);
    console.log(projects[0])

    return (
        <div id="portfolio_projects">
            {/* <div style={{height: "100px", width: "500px", backgroundColor: "blue"}}>
            </div> */}
            
            {projects.map((project, index) => (
                <ProjectCard project={project} offset={offset} />
                // <ProjectPage project={project} index={index} />
            ))}
        </div>
    )
}

export default Projects