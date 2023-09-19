import { useEffect, useState, useRef } from 'react';
import './App.css';

import { useSelector } from 'react-redux';

import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  const { show_project } = useSelector((state) => state.projects);

  // This is for the cursor animation.
  // useEffect(() => {
  //   let cursor = document.getElementById('cursor');
  //   let x = 0;
  //   let y = 0;

  //   const move = (e) => {
  //     e.preventDefault();
  //     x = e.clientX;
  //     y = e.clientY;

  //     cursor.animate(
  //       [
  //         { left: x, top: y },
  //         { left: e.clientX + 'px', top: e.clientY + 'px' }
  //       ],
  //       {
  //         duration: 200, 
  //         easing: 'ease-in-out', 
  //         fill: 'both'
  //       }
  //     );
  //   }

  //   window.addEventListener('mousemove', move)

  //   return () => {
  //     window.removeEventListener('mousemove', move);
  //   }
  // }, [])

  return (
    <div className="App" >
      <div id="cursor"></div>

      <Home />
      { show_project &&
        <ProjectPage />}
    </div>
  );
}

export default App;
