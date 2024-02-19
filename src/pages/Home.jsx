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