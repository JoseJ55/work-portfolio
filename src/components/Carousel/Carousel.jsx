import React, { useEffect, useState } from 'react';
import "./Carousel.css";

import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

function Carousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState -1);
        }
    }

    useEffect(() => {
        setLength(children.length);
    }, [children])

  return (
    <div className='carousel-container'>
        <div className='carousel-wrapper'> 
            {
                currentIndex > 0 &&
                <button className='carousel-left-arrow' onClick={prev}>
                    <BsChevronDoubleLeft color='white' size={20} className="carousel-left-icon" />
                </button>
            }

            <div className='carousel-content-wrapper'>
                <div className='carousel-content' style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                    {children}
                </div>
            </div>

            {
                currentIndex < (length - 1) &&
                <button className='carousel-right-arrow' onClick={next}>
                    <BsChevronDoubleRight color='white' size={20} className="carousel-right-icon" />
                </button>
            }
        </div>
    </div>
  )
}

export default Carousel