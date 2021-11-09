import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Collapse, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core';
import { AlternateEmail as AlternateEmailIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon, Code as CodeIcon, ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, HelpOutline as HelpOutlineIcon, List as ListIcon, PersonOutline as PersonOutlineIcon, Tune as TuneIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { capitalize, map } from 'lodash';

// import profilePicture from './images/profile.jpg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    height: 260,
    // backgroundImage: `url(${profilePicture})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
  },
  nestedDrawerItems: {
    paddingLeft: theme.spacing(4),
  },
}));

const DrawerComponent = (props) => {
  const classes = useStyles();

  const { ColorModeContext } = props;
  
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  const [ openSettings, setOpenSettings ] = useState(false);
  const [ selectedDrawerItem, setSelectedDrawerItem ] = useState('about');

  const drawerItems = [
    {
      icon: <PersonOutlineIcon />,
      label: 'About',
      name: 'about',
      url: '/portfolio',
    },
    {
      icon: <ListIcon />,
      label: 'Skills',
      name: 'skills',
      url: '/skills',
    },
    {
      icon: <CodeIcon />,
      label: 'Works',
      name: 'works',
      url: '/works',
    },
    {
      icon: <AlternateEmailIcon />,
      label: 'Contact',
      name: 'contact',
      url: '/contact',
    },
  ];

  const moreSubItems = [
    {
      icon: <HelpOutlineIcon />,
      label: 'About this site',
      name: 'site_info',
      url: '/site_info',
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Paper variant="elevation" elevation={2} square>
        <Box className={classes.toolbar}>
          <Typography variant="h5">Christian Arvie</Typography>
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>Benito</Typography>
          <Typography variant="caption" style={{ paddingTop: 15 }}>Web Developer</Typography>
        </Box>
      </Paper>

      <List>
        {
          map(drawerItems, (item, index) => {
            return (
              <ListItem button selected={item.name === selectedDrawerItem} key={`item-${item.name}-${index}`} component={Link} to={item.url} onClick={() => setSelectedDrawerItem(item.name)}>
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
          <ListItemText primary="More" />
          { openSettings ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
        </ListItem>

        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List disablePadding>
            {
              map(moreSubItems, (item, index) => {
                return (
                  <ListItem button selected={item.name === selectedDrawerItem} key={`item-${item.name}-${index}`} component={Link} to={item.url} onClick={() => setSelectedDrawerItem(item.name)} className={classes.nestedDrawerItems}>
                    <ListItemIcon>{ item.icon }</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                );
              })
            }
            
            <ListItem button className={classes.nestedDrawerItems} onClick={colorMode.toggleColorMode}>
              <ListItemIcon>{ theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon /> }</ListItemIcon>
              <ListItemText primary={`${capitalize(theme.palette.type === 'light' ? 'dark' : 'light')} mode`} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

export default DrawerComponent;