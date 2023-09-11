import React, { useEffect, useState, memo } from 'react';
import './ProjectImage.css';

import { useSelector } from 'react-redux';

function ProjectImage({ data }) {
  const { hover_project } = useSelector((state) => state.projects);

  const [current, setCurrent] = useState(data[0].images[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [angle, setAngle] = useState(0);

  const handleMouseMove = (event) => {
    if (isHovering) {
      const element = event.target;
      const rect = element.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      setAngle(angle);
    }
  };

  const handleMouseLeave = () => {
    const backColor = document.getElementById('projectImage-back');

    requestAnimationFrame(() => {
      // backColor.style.opacity = 0;
      backColor.style.animation = 'rotateSelf 5s infinite ease'
    })
  }

  useEffect(() => {
    const backColor = document.getElementById('projectImage-back');

    requestAnimationFrame(() => {
      backColor.style.opacity = 0.8;
      backColor.style.transform = `translate(-50%, -50%) rotate(${angle + 90}deg)`;
      backColor.style.animation = '';
    })
  }, [angle])

  useEffect(() => {
      const temp = data.filter((project) => {
          return project.id === hover_project;
      });

      setCurrent(temp[0].coverImage);
  }, [hover_project, data])

  useEffect(() => {
    const imgElement = document.getElementById('project-images');
  
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
  
    imgElement.addEventListener('mouseover', handleMouseOver);
    imgElement.addEventListener('mouseout', handleMouseOut);
  
    return () => {
      imgElement.removeEventListener('mouseover', handleMouseOver);
      imgElement.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div id='projectImage'>
      <div id='projectImage-back'></div>
      <img id='project-images' src={current} alt={`Project Sample`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
    </div>
  )
}

export default memo(ProjectImage);