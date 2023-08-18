import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

import Header from '../new/Header/Header';
import Scrollbar from '../new/Scrollbar/Scrollbar';
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

    const pagesRef = useRef(null);

  const handleScroll = (e) => {
    if (!pagesRef.current) return;

    pagesRef.current.scrollTo({
      left: pagesRef.current.scrollLeft + (e.deltaY * 1.5),
      behavior: 'smooth',
      duration: 500
    });
  }

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll)
  }, [])

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
        {/* <Scrollbar /> */}
    </div>
  )
}

export default Home