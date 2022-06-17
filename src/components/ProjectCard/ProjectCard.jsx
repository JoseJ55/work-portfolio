import React from 'react';
import "./ProjectCard.css";
import Tilt from "react-parallax-tilt";

function ProjectCard({ project, offset, info, set, popup, setPopup }) {
    let style;
    switch (project.small) {
        case "one":
            style = {
                transform: `translateY(${offset * .2}px)`,
                transition: "linear"
            }
            break;
        case "two":
            style = {
                transform: `translateY(${offset * 0.3}px)`,
                transition: "linear"
            }
            break;
        case "three":
            style = {
                transform: `translateY(${offset * 0.55}px)`,
                transition: "linear"
            }
            break;
        case "four":
            style = {
                transform: `translateY(${offset * 0.3}px)`,
                transition: "linear"
            }
            break;
        case "five":
            style = {
                transform: `translateY(${offset * 0.45}px)`,
                transition: "linear"
            }
            break;
        case "six":
            style = {
                transform: `translateY(${offset * .25}px)`,
                transition: "linear"
            }
            break;
        default:
            style = {
                transform: `translateY(${offset * 0.5}px)`,
                transition: "linear"
            }
            break;
    }

    return (
        <div 
        className="portfolio_projects-project" 
        id={`${project.small}`} 
        style={style}
        >
            <Tilt style={{height: "inherit", width: "100%"}} tiltReverse={true} glareEnable={true}>
            <input 
                type="button" 
                className="portfolio_projects-project_image"
                onClick={() => {
                    setPopup(!popup)
                    set(project)
                }}
                style={{
                    backgroundImage: `url(${project.images[0]})`
                }}
            />
            </Tilt>
        </div>
    )
}

export default ProjectCard