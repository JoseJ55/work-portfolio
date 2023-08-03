import React from 'react';
import "react-slideshow-image/dist/styles.css";
import "./ProjectInfoImages.css";

import Carousel from '../Carousel/Carousel';

function ProjectInfoImages({ images }) {
  return (
    <div id="slide-container">
      <Carousel>
        {images.map((image) => (
          <img src={image} alt="alt" />
        ))}
      </Carousel>
    </div>
  )
}

export default ProjectInfoImages