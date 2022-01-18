import React, { createContext, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';

// import './index.css';
import reportWebVitals from './reportWebVitals';
import themeSettings from './js/config/theme';
import Base from './js/components/pages/Base';
import Home from './js/components/pages/home/Home';
import Projects from './js/components/pages/projects/Projects';
import Skills from './js/components/pages/skills/Skills';
import About from './js/components/pages/about/About';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const { lightTheme, darkTheme } = themeSettings();

  const [ isDarkMode, setIsDarkMode ] = useState(true);

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setIsDarkMode((prevMode) => !prevMode);
    },
  }), [],);

  const mainTheme = useMemo(() => isDarkMode ? darkTheme : lightTheme, [isDarkMode, darkTheme, lightTheme],);
  
  return (
    <React.Fragment>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={mainTheme}>
          {/* <Base ColorModeContext={ColorModeContext}> */}
          <Base>
            <Home ColorModeContext={ColorModeContext} />
            <Skills />
            <Projects />
            <Skills />
            <About />
          </Base>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
