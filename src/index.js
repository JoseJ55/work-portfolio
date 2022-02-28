import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from "./themeContext";
import { ProjectsProvider } from "./projectsContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
