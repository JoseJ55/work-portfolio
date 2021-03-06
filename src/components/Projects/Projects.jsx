import React, { useContext } from 'react';
import "./Projects.css";

import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsContext } from "../../projectsContext";

function Projects({ offset, info, set, popup, setPopup }) {
    const { projects } = useContext(ProjectsContext);

    return (
        <div id="portfolio_projects">
            {projects.map((project, key) => (
                <ProjectCard project={project} offset={offset} info={info} set={set} popup={popup} setPopup={setPopup} key={key} />
            ))}
        </div>
    )
}

export default Projects