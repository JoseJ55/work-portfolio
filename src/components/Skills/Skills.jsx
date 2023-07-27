import React from 'react';
import "./Skills.css";

import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiMysql, DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import Slider from 'react-slick';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function Skills() {
    const items = [
            <AiFillHtml5 id="html" className='icon-size'/>,
            <FaCss3Alt id="css" className='icon-size'/>,
            <DiJavascript1 id="js" className='icon-size'/>,
            <FaNodeJs id="node" className='icon-size'/>,
            <FaReact id="react" className='icon-size'/>,
            <DiMysql id="mysql" className='icon-size'/>,
            <DiMongodb id="mongo" className='icon-size'/>
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

  return (
    // // <div id="portfolio_skills">
    //     // {/* <Slider {...settings}>
    //     //     {items.map((item, index) => (
    //     //         <div key={index} className="portfolio_skills-area_icon">
    //     //             {item}
    //     //         </div>
    //     //     ))}
    //     // </Slider> */}
    //     <Carousel 
    //     swipeable={false}
    //     draggable={false}
    //     showDots={false}
    //     responsive={responsive}
    //     ssr={true} // means to render carousel on server-side.
    //     infinite={true}
    //     autoPlay={true}
    //     autoPlaySpeed={3000}
    //     // keyBoardControl={true}
    //     // customTransition="all .5"
    //     transitionDuration={1000}
    //     // containerClass="portfolio_skills"
    //     removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    //     // deviceType={this.props.deviceType}
    //     // dotListClass="custom-dot-list-style"
    //     // itemClass="carousel-item-padding-40-px"
    //     >
    //         {items.map((item, index) => (
    //             <div key={index} className="portfolio_skills-area_icon">
    //                 {item}
    //             </div>
    //         ))}
    //     </Carousel>
    // // </div>

    <div id="portfolio_skills">
        {items.map((item, index) => (
            <div key={index} className="portfolio_skills-area_icon">
                {item}
            </div>
        ))}
    </div>
  )
}

export default Skills