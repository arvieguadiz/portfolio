import React, { createContext, useContext, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box, Collapse, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { AlternateEmail as AlternateEmailIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon, Code as CodeIcon, ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, List as ListIcon, PersonOutline as PersonOutlineIcon, Tune as TuneIcon } from '@material-ui/icons';
import { createTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import { capitalize, map } from 'lodash';

import logo from './logo.svg';
import './App.css';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    height: 240,
    backgroundColor: deepOrange['A200'],
    color: '#fff',
  },
  nestedDrawerItems: {
    paddingLeft: theme.spacing(4),
  },
}));

// const mainTheme = createTheme({
//   palette: {
//     type: 'dark',
//   },
// });

const AppContent = () => {
  const classes = useStyles();
  
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  const [ openSettings, setOpenSettings ] = useState(true);

  const drawerItems = [
    {
      icon: <PersonOutlineIcon />,
      label: 'About',
      url: '/portfolio',
    },
    {
      icon: <ListIcon />,
      label: 'Skills',
      url: '/skills',
    },
    {
      icon: <CodeIcon />,
      label: 'Works',
      url: '/works',
    },
    {
      icon: <AlternateEmailIcon />,
      label: 'Contact',
      url: '/contact',
    },
  ];

  return (
    <BrowserRouter>
      <Box className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Box className={classes.toolbar}>
            <Typography variant="h5">Christian Arvie</Typography>
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>Benito</Typography>
            <Typography variant="caption" style={{ color: '#000', paddingTop: 15 }}>Web Developer</Typography>
          </Box>

          <List>
            {
              map(drawerItems, (item, index) => {
                return (
                  <ListItem button key={`item${item.label}`} component={Link} to={item.url}>
                    <ListItemIcon>{ item.icon }</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                );
              })
            }
          </List>

          <Divider />

          <List>
            <ListItem button onClick={() => setOpenSettings(!openSettings)}>
              <ListItemIcon><TuneIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
              { openSettings ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
            </ListItem>

            <Collapse in={openSettings} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem button className={classes.nestedDrawerItems} onClick={colorMode.toggleColorMode}>
                  <ListItemIcon>{ theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon /> }</ListItemIcon>
                  <ListItemText primary={`${capitalize(theme.palette.type === 'light' ? 'dark' : 'light')} mode`} />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>

        <main>
          <Routes>
            <Route path="/portfolio" element={<Typography variant="h2">About</Typography>} />
            <Route path="/skills" element={<Typography variant="h2">Skills</Typography>} />
            <Route path="/works" element={<Typography variant="h2">Works</Typography>} />
            <Route path="/contact" element={<Typography variant="h2">Contact</Typography>} />
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
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
