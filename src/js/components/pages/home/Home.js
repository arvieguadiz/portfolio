import React, { useContext } from 'react';
import { Avatar, Grid, Hidden, IconButton, Tooltip, Typography, Zoom } from '@material-ui/core';
import { Brightness4Rounded as Brightness4RoundedIcon, Brightness7Rounded as Brightness7RoundedIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon, Twitter as TwitterIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import profilePicture from '../../../../images/profile2.jpg';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(24),
    height: theme.spacing(28),
  },
  avatarBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   justifyContent: 'center',
    // },
    padding: theme.spacing(1),
  },
  greetingBox: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    // [theme.breakpoints.down('sm')]: {
    //   justifyContent: 'center',
    // },
    margin: theme.spacing(1),
  },
  profileBox: {
    // [theme.breakpoints.down('sm')]: {
    //   alignItems: 'center',
    // },
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    margin: theme.spacing(1),
  },
  socialBox: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    // [theme.breakpoints.down('sm')]: {
    //   justifyContent: 'center',
    // },
    margin: theme.spacing(1),
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const { ColorModeContext } = props;

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Grid item container xs={12} justifyContent="flex-start">
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4} className={classes.avatarBox}>
        <Avatar src={profilePicture} className={classes.avatar} />
      </Grid>

      <Grid item container xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid item container className={classes.greetingBox}>
          <Typography variant="h6">Good day!</Typography>
          <Tooltip title={<Typography variant="body2">{theme.palette.type === 'light' ? 'Dark Mode' : 'Light Mode'}</Typography>} TransitionComponent={Zoom}>
            <IconButton size="small" onClick={colorMode.toggleColorMode}>
              { theme.palette.type === 'light' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon /> }
            </IconButton>
          </Tooltip>
        </Grid>
        
        <Grid item container direction="column" className={classes.profileBox}>
          <Typography variant="h6">Hi, my name is</Typography>
          <Hidden mdUp>
            <Typography variant="h5">Christian Arvie Benito</Typography>
          </Hidden>
          <Hidden smDown>
            <Typography variant="h4">Christian Arvie Benito</Typography>
          </Hidden>
          <Typography variant="body1" style={{ paddingTop: 15 }}>a web developer from the Philippines.</Typography>
        </Grid>

        <Grid item container spacing={1} className={classes.socialBox}>
          <Grid item>
            <Tooltip title={<Typography variant="body2">GitHub</Typography>} TransitionComponent={Zoom}>
              <IconButton size="small" onClick={() => window.open('https://github.com/arvieguadiz')}><GitHubIcon /></IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">LinkedIn</Typography>} TransitionComponent={Zoom}>
              <IconButton size="small" onClick={() => window.open('https://www.linkedin.com/in/christian-arvie-benito-378399211/')}><LinkedInIcon /></IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">Twitter</Typography>} TransitionComponent={Zoom}>
              <IconButton size="small" onClick={() => window.open('https://twitter.com/ILoveAGuadiz')}><TwitterIcon /></IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">Email</Typography>} TransitionComponent={Zoom}>
              <IconButton size="small" onClick={() => window.location.href = 'mailto:arvieguadiz@gmail.com'}><MailIcon /></IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;