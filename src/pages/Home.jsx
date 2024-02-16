import React, { useEffect, useRef } from 'react';
import './Home.css';

import { useSelector } from 'react-redux';

import Header from '../new/Header/Header';
import Navbar from '../new/Navbar/Navbar';
import Projects from '../new/Projects/Projects';
import About from '../new/About/About';
import Skills from '../new/Skills/Skills';
import Experience from '../new/Experience/Experience';
import Contact from '../new/Contact/Contact';
import Footer from '../new/Footer/Footer';

function Home({ pagesRef }) {

  // const { show_project } = useSelector((state) => state.projects);

  // const pagesRef = useRef(null);

  
  // useEffect(() => {
  //   let isDown = false;
  //   let startX;
  //   let scrollLeft;

  //   const handleScroll = (e) => {
  //     if (!pagesRef.current) return;
  
  //     if (show_project) return;

  //     if (window.innerWidth < 500) return;
  
  //     pagesRef.current.scrollTo({
  //       left: pagesRef.current.scrollLeft + (e.deltaY * 1.5),
  //       behavior: 'smooth',
  //       duration: 500
  //     });
  //   };

  //   const startDragging = (e) => {
  //     isDown = true;
  //     startX = e.pageX - pagesRef.current.offsetLeft;
  //     scrollLeft = pagesRef.current.scrollLeft;
  //   };
    
  //   const stopDragging = () => {
  //     isDown = false;
  //   };
    
  //   const move = (e) => {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - pagesRef.current.offsetLeft;
  //     const walk = x - startX;
  //     pagesRef.current.scrollLeft = scrollLeft - walk;
  //   };

  //   pagesRef.current.addEventListener('mousedown', startDragging);
  //   pagesRef.current.addEventListener('mousemove', move);
  //   pagesRef.current.addEventListener('mouseup', stopDragging);
  //   pagesRef.current.addEventListener('mouseleave', stopDragging);
  //   window.addEventListener("wheel", handleScroll);

  //   return () => {
  //     pagesRef.current.removeEventListener('mousedown', startDragging);
  //     pagesRef.current.removeEventListener('mousemove', move);
  //     pagesRef.current.removeEventListener('mouseup', stopDragging);
  //     pagesRef.current.removeEventListener('mouseleave', stopDragging);
  //     window.removeEventListener("wheel", handleScroll)
  //   }
  // }, [show_project])

  return (
    <div id='home'>
        <Navbar />
        <div id='pages' ref={pagesRef}>
          <Header />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </div>
    </div>
  )
}

export default Home