import React from 'react';
import "./ProjectPage.css";

function ProjectPage({ project, index }) {
    console.log(index)
    return (
        <div className="portfolio_projects-page">
            <div className="portfolio_projects-page_title">
                <p>{project.title}</p>
            </div>
            <div className="portfolio_projects-page_info">
                {project.description}
            </div>
        </div>
    )
}

export default ProjectPage