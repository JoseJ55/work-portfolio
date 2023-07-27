import React, { useState } from 'react';

import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';

function Home({ offset }) {
    const [projectDetail, setPorjectDetail] = useState({});
    const [popup, setPopup] = useState(false);

  return (
    <div>
        <Header />
        <Projects offset={offset} info={projectDetail} set={setPorjectDetail} popup={popup} setPopup={setPopup} />
        {/* <Skills /> */}
        <About />
        <Contact />
        {popup ? <ProjectInfo setPopup={setPopup} info={projectDetail} /> : <></>}
    </div>
  )
}

export default Home