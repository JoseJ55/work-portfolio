import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './Redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from "./themeContext";
import { ProjectsProvider } from "./projectsContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ProjectsProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProjectsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
