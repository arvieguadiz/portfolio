import React, { createContext, useContext, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@material-ui/core';
import { createTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import {
  Brightness4,
  Brightness7,
  Code as CodeIcon,
  Email as EmailIcon,
  Person as PersonIcon,
  ViewList as ViewListIcon
} from '@material-ui/icons';
import logo from '../logo.svg';
import { map } from 'lodash';
// import '../App.css';
// import mainTheme from './config/theme';

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
    // ...theme.mixins.toolbar,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    height: 240,
    backgroundColor: deepOrange['A200'],
    color: '#fff',
  },
}));

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
      {theme.palette.type} mode
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.type === 'dark' ? <Brightness7 /> : <Brightness4 />}
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
  const classes = useStyles();

  const [ mode, setMode ] = useState({ type: 'light' });

  const drawerItems = [
    {
      icon: <PersonIcon />,
      label: 'About',
      to: '/portfolio',
    },
    {
      icon: <ViewListIcon />,
      label: 'Skills',
      to: '/skills',
    },
    {
      icon: <CodeIcon />,
      label: 'Works',
      to: '/works',
    },
    {
      icon: <EmailIcon />,
      label: 'Contact',
      to: '/contact',
    },
  ];

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode.type === 'light' ? { type: 'dark' } : { type: 'light' }));
    },
  }), [],);

  const theme = useMemo(() => createTheme({
    palette: { ...mode, },
  }), [mode],);

  return (
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    //     {/* <Paper variant="outlined">
    //       <Box m={3}>
    //         <Typography variant="h1">Hello World</Typography>
    //       </Box>
    //     </Paper> */}
    //     <MyApp />
    //   </ThemeProvider>
    // </ColorModeContext.Provider>

    <React.Fragment>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Box className={classes.root}>
              <CssBaseline />
              {/* <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                  <Typography variant="h6" noWrap>Title</Typography>
                </Toolbar>
              </AppBar> */}

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
                {/* <Divider /> */}
                <List>
                  {
                    map(drawerItems, (item, index) => {
                      return (
                        <ListItem button key={`item-${item.label}`} component={Link} to={item.to}>
                          <ListItemIcon>{ item.icon }</ListItemIcon>
                          <ListItemText primary={item.label} />
                        </ListItem>
                      );
                    })
                  }
                </List>
                {/* <Divider /> */}
              </Drawer>

              <main>
                <Routes>
                  <Route path="/portfolio" element={<MyApp />} />
                  <Route path="/skills" element={<MyApp />} />
                  <Route path="/works" element={<MyApp />} />
                  <Route path="/contact" element={<MyApp />} />
                </Routes>
              </main>
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
};

export default App;
