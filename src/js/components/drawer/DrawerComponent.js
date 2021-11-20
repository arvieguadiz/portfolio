import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Collapse, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AlternateEmailRounded as AlternateEmailRoundedIcon, Brightness4Rounded as Brightness4RoundedIcon, Brightness7Rounded as Brightness7RoundedIcon, CodeRounded as CodeRoundedIcon, ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, HelpRounded as HelpRoundedIcon, HomeRounded as HomeRoundedIcon, ListRounded as ListRoundedIcon, PersonRounded as PersonRoundedIcon, TuneRounded as TuneRoundedIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { capitalize, map } from 'lodash';

// import profilePicture from './images/profile.jpg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: `calc(100% - 55px)`,
      marginLeft: 55,
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: 55,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: 55,
    },
    // justifyContent: 'center',
  },
  defaultToolbar: theme.mixins.toolbar,
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
  listItemIconBox: {
    [theme.breakpoints.down('sm')]: {
      minWidth: 0,
    },
  },
}));

const DrawerComponent = (props) => {
  const classes = useStyles();

  const { ColorModeContext } = props;
  
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  const [ openSettings, setOpenSettings ] = useState(false);
  const [ selectedDrawerItem, setSelectedDrawerItem ] = useState('home');

  const drawerItems = [
    {
      icon: <HomeRoundedIcon />,
      label: 'Home',
      name: 'home',
      url: '/portfolio',
    },
    {
      icon: <PersonRoundedIcon />,
      label: 'About',
      name: 'about',
      url: '/about',
    },
    {
      icon: <ListRoundedIcon />,
      label: 'Skills',
      name: 'skills',
      url: '/skills',
    },
    {
      icon: <CodeRoundedIcon />,
      label: 'Works',
      name: 'works',
      url: '/works',
    },
    {
      icon: <AlternateEmailRoundedIcon />,
      label: 'Contact',
      name: 'contact',
      url: '/contact',
    },
  ];

  const moreSubItems = [
    {
      icon: <HelpRoundedIcon />,
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
      <Hidden smDown>
        <Box className={classes.defaultToolbar}></Box>
      </Hidden>

      {/* <Paper variant="elevation" elevation={2} square>
        <Box className={classes.toolbar}>
          <Typography variant="h5">Christian Arvie</Typography>
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>Benito</Typography>
          <Typography variant="caption" style={{ paddingTop: 15 }}>Web Developer</Typography>
        </Box>
      </Paper> */}

      <List>
        {
          map(drawerItems, (item, index) => {
            return (
              <ListItem button selected={item.name === selectedDrawerItem} key={`item-${item.name}-${index}`} component={Link} to={item.url} onClick={() => setSelectedDrawerItem(item.name)}>
                <ListItemIcon className={classes.listItemIconBox}>{ item.icon }</ListItemIcon>
                <Hidden smDown>
                  <ListItemText primary={item.label} />
                </Hidden>
              </ListItem>
            );
          })
        }

        <Hidden mdUp>
          {
            map(moreSubItems, (item, index) => {
              return (
                <ListItem button selected={item.name === selectedDrawerItem} key={`item-${item.name}-${index}`} component={Link} to={item.url} onClick={() => setSelectedDrawerItem(item.name)}>
                  <ListItemIcon className={classes.listItemIconBox}>{ item.icon }</ListItemIcon>
                </ListItem>
              );
            })
          }
            
          <ListItem button onClick={colorMode.toggleColorMode}>
            <ListItemIcon className={classes.listItemIconBox}>{ theme.palette.type === 'light' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon /> }</ListItemIcon>
          </ListItem>
        </Hidden>

        <Hidden smDown>
          <ListItem button onClick={() => setOpenSettings(!openSettings)}>
            <ListItemIcon><TuneRoundedIcon /></ListItemIcon>
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
                <ListItemIcon>{ theme.palette.type === 'light' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon /> }</ListItemIcon>
                <ListItemText primary={`${capitalize(theme.palette.type === 'light' ? 'dark' : 'light')} mode`} />
              </ListItem>
            </List>
          </Collapse>
        </Hidden>
      </List>
    </Drawer>
  );
}

export default DrawerComponent;