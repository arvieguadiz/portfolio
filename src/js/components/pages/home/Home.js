import React from 'react';
import { Avatar, Grid, Hidden, IconButton, Typography } from '@material-ui/core';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import profilePicture from '../../../../images/profile.jpg';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
  avatarBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  profileBox: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
  socialBox: {
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    padding: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} justifyContent="flex-start">
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4} className={classes.avatarBox}>
        <Avatar src={profilePicture} className={classes.avatar} />
      </Grid>

      <Grid item container xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid item container direction="column" className={classes.profileBox}>
          <Hidden mdUp>
            <Typography variant="h5">Christian Arvie Benito</Typography>
          </Hidden>
          <Hidden smDown>
            <Typography variant="h4">Christian Arvie Benito</Typography>
          </Hidden>
          <Typography variant="body1">Web Developer</Typography>
        </Grid>

        <Grid item container spacing={1} className={classes.socialBox}>
          <Grid item>
            <IconButton size="small"><LinkedInIcon /></IconButton>
          </Grid>
          <Grid item>
            <IconButton size="small"><GitHubIcon /></IconButton>
          </Grid>
          <Grid item>
            <IconButton size="small"><MailIcon /></IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;