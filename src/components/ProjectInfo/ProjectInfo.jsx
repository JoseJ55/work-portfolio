import React from 'react';
import "./ProjectInfo.css";

function ProjectInfo({ setPopup, info}) {
    console.log(info)

  return (
    <div id="ProjectInfo">
        <input type={"button"} id="ProjectInfo-btn" onClick={() => setPopup(false)}/>
        <div id="ProjectInfo-section">
            <div id="ProjectInfo-section-head">
                <button onClick={() => setPopup(false)}>
                    back
                </button>
            </div>
            <h1>{info.title}</h1>
            <ul>
                {info.links.map((link) => (
                    <p><a href={link}>{link}</a></p>
                ))}
            </ul>
            <p>{info.description}</p>
            <ul>
                {info.tools.map((tool) => (
                    <p>{tool}</p>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ProjectInfo