import React, { useState, useEffect, useRef, useCallback } from 'react';
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

function Home({ offset }) {
    const [projectDetail, setPorjectDetail] = useState({});
    const [popup, setPopup] = useState(false);

    const { show_project } = useSelector((state) => state.projects);

    const pagesRef = useRef(null);

    
  useEffect(() => {
    const handleScroll = (e) => {
      if (!pagesRef.current) return;
  
      if (show_project) return;
  
      pagesRef.current.scrollTo({
        left: pagesRef.current.scrollLeft + (e.deltaY * 1.5),
        behavior: 'smooth',
        duration: 500
      });
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll)
  }, [show_project])

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