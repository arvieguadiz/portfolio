import React, { createContext, useContext, useMemo, useState } from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import logo from '../logo.svg';
import '../App.css';
// import mainTheme from './config/theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const MyApp = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Paper
      // sx={{
      //   display: 'flex',
      //   width: '100%',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   bgcolor: 'background.default',
      //   color: 'text.primary',
      //   borderRadius: 1,
      //   p: 3,
      // }}
      variant="outlined"
    >
      {theme.palette.mode} mode
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Paper>
  );
};

const App = () => {
  const [ mode, setMode ] = useState('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), [],);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode],);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <Paper variant="outlined">
          <Box m={3}>
            <Typography variant="h1">Hello World</Typography>
          </Box>
        </Paper> */}
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
