import { useEffect, useState, useRef } from 'react';
import './App.css';

import { useSelector } from 'react-redux';

import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  const { show_project } = useSelector((state) => state.projects);

  return (
    <div className="App" >
      <Home />
      { show_project &&
        <ProjectPage />}
    </div>
  );
}

export default App;
