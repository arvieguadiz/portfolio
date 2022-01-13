import React, { useContext } from 'react';
import { Avatar, Grid, IconButton, Tooltip, Typography, useMediaQuery, Zoom } from '@mui/material';
import { Brightness4Rounded as Brightness4RoundedIcon, Brightness7Rounded as Brightness7RoundedIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon, Twitter as TwitterIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import profilePicture from '../../../../images/profile2.jpg';

const Home = (props) => {
  const { ColorModeContext } = props;

  const colorMode = useContext(ColorModeContext);

  const theme = useTheme();
  const smDownScreenSize = useMediaQuery(theme.breakpoints.down('sm'));
  
  const classes = {
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
  };

  return (
    <Grid item container xs={12} justifyContent="flex-start">
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4} sx={classes.avatarBox}>
        <Avatar src={profilePicture} sx={{ width: theme.spacing(24), height: theme.spacing(28) }} />
      </Grid>

      <Grid item container xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid item container sx={classes.greetingBox}>
          <Typography variant="h6">Good day!</Typography>
          <Tooltip title={<Typography variant="body2">{theme.palette.mode === 'light' ? 'Dark Mode' : 'Light Mode'}</Typography>} TransitionComponent={Zoom}>
            <IconButton size="small" onClick={colorMode.toggleColorMode}>
              { theme.palette.mode === 'light' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon /> }
            </IconButton>
          </Tooltip>
        </Grid>
        
        <Grid item container direction="column" sx={classes.profileBox}>
          <Typography variant="h6">Hi, my name is</Typography>
          {
            smDownScreenSize && <Typography variant="h5">Christian Arvie Benito</Typography>
          }
          {
            !smDownScreenSize && <Typography variant="h4">Christian Arvie Benito</Typography>
          }
          <Typography variant="body1" style={{ paddingTop: 15 }}>a web developer from the Philippines.</Typography>
        </Grid>

        <Grid item container spacing={1} sx={classes.socialBox}>
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