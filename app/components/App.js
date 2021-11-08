import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Code, Email, Person, ViewList } from '@material-ui/icons';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import { map } from 'lodash';

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
}));

const App = () => {
    const classes = useStyles();

    const drawerItems = [
        {
            icon: <Person />,
            label: 'About',
            url: '/about',
        },
        {
            icon: <ViewList />,
            label: 'Skills',
            url: '/skills',
        },
        {
            icon: <Code />,
            label: 'Works',
            url: '/works',
        },
        {
            icon: <Email />,
            label: 'Contact',
            url: '/contact',
        },
    ];

    return (
        <React.Fragment>
            <ThemeProvider>
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
                        </Drawer>

                        <main>
                            <Routes>
                                <Route path="/about" element={<Typography variant="h2">About</Typography>} />
                                <Route path="/skills" element={<Typography variant="h2">Skills</Typography>} />
                                <Route path="/works" element={<Typography variant="h2">Works</Typography>} />
                                <Route path="/contact" element={<Typography variant="h2">Contact</Typography>} />
                            </Routes>
                        </main>
                    </Box>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;