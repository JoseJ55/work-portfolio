import React from 'react';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ProjectInfoImages.css";

function ProjectInfoImages({ images }) {
  return (
    <div id="slide-container">
      <Slide easing="ease">
        {images.map((image, index) => (
          <div className="each-slide" key={index}>
            <div style={{"backgroundImage": `url(${image})`}}></div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default ProjectInfoImages