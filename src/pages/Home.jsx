import React from 'react';

import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

function Home({ offset }) {
  return (
    <div>
        <Header />
        <Projects offset={offset} />
        <Skills />
        <About offset={offset} />
        <Contact />
    </div>
  )
}

export default Home