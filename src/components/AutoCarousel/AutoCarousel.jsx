import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AutoCarousel.css'; // Create this CSS file for styling

const AutoCarousel = ({ logos, interval }) => {
    const [translateX, setTranslateX] = useState(0);
    const logoWidth = 150; // Assuming each logo has a width of 150px
  
    useEffect(() => {
      const carouselContainer = document.getElementById('carousel-container');
      const containerWidth = carouselContainer.clientWidth;
      const logosWidth = logos.length * logoWidth;
  
      if (logosWidth <= containerWidth) {
        // No need for carousel animation if all logos can fit in the container
        return;
      }
  
      const timer = setInterval(() => {
        setTranslateX((prevTranslateX) => {
          const nextTranslateX = prevTranslateX - 1;
          if (Math.abs(nextTranslateX) >= logoWidth) {
            // When the first logo has entirely scrolled to the left, move it to the end
            return prevTranslateX + logoWidth;
          }
          return nextTranslateX;
        });
      }, interval);
  
      return () => clearInterval(timer);
    }, [logos, interval]);
  
    return (
      <div className="automatic-carousel-container" id="carousel-container">
        <div
          className="automatic-carousel"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${logos.length * logoWidth}px`,
          }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="carousel-item">
              {logo}
            </div>
          ))}
        </div>
      </div>
    );
};

AutoCarousel.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.element).isRequired,
  interval: PropTypes.number.isRequired,
};

export default AutoCarousel;