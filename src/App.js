import React, { createContext, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, Typography } from '@material-ui/core';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import DrawerComponent from './components/drawer/DrawerComponent';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const AppContent = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Box className={classes.root}>
        <CssBaseline />

        <DrawerComponent ColorModeContext={ColorModeContext} />

        <main>
          <Routes>
            <Route path="/portfolio" element={<Typography variant="h2">About</Typography>} />
            <Route path="/skills" element={<Typography variant="h2">Skills</Typography>} />
            <Route path="/works" element={<Typography variant="h2">Works</Typography>} />
            <Route path="/contact" element={<Typography variant="h2">Contact</Typography>} />
            <Route path="/site_info" element={<Typography variant="h2">About this site</Typography>} />
          </Routes>
        </main>
      </Box>
    </BrowserRouter>
  );
}

const App = () => {
  const [ themeMode, setThemeMode ] = useState({ type: 'light' });

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setThemeMode((prevMode) => (prevMode.type === 'light' ? { type: 'dark' } : { type: 'light' }));
    },
  }), [],);

  const mainTheme = useMemo(() => createTheme({
    palette: {
      ...themeMode,
    },
  }), [themeMode],);
  
  return (
    <React.Fragment>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={mainTheme}>
          <AppContent />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
}

export default App;
