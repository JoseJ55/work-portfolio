import React, { useState } from 'react';
import './Home.css';

// import Header from '../components/Header/Header';
// import Projects from '../components/Projects/Projects';
// // import Skills from '../components/Skills/Skills';
// import About from '../components/About/About';
// import Contact from '../components/Contact/Contact';
// import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
// import Wave from '../components/Wave/Wave';
// import Footer from '../components/Footer/Footer';

import Header from '../new/Header/Header';
import Scrollbar from '../new/Scrollbar/Scrollbar';
import Navbar from '../new/Navbar/Navbar';
import Projects from '../new/Projects/Projects';
import About from '../new/About/About';

function Home({ offset }) {
    const [projectDetail, setPorjectDetail] = useState({});
    const [popup, setPopup] = useState(false);

  return (
    <div id='home'>
        {/* <Header />
        <Projects offset={offset} info={projectDetail} set={setPorjectDetail} popup={popup} setPopup={setPopup} /> */}
        {/* <Skills /> */}
        {/* <Wave />
        <About />
        <Wave />
        <Contact />
        <Footer />
        {popup ? <ProjectInfo setPopup={setPopup} info={projectDetail} /> : <></>} */}

        <Navbar />
        <div id='pages'>
          <Header />
          <Projects />
          <About />
        </div>
        {/* <Scrollbar /> */}
    </div>
  )
}

export default Home