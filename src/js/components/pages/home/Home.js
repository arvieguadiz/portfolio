import React, { useContext } from 'react';
import { Avatar, Grid, IconButton, Tooltip, Typography, useMediaQuery, Zoom } from '@mui/material';
import { Brightness4Rounded as Brightness4RoundedIcon, Brightness7Rounded as Brightness7RoundedIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import profilePicture from '../../../../images/profile2.jpg';

const Home = (props) => {
  const { ColorModeContext } = props;

  const colorMode = useContext(ColorModeContext);

  const theme = useTheme();
  const mdDownScreenSize = useMediaQuery(theme.breakpoints.down('md'));
  
  const classes = {
    avatarBox: {
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-start',
      },
      padding: theme.spacing(1),
    },
    greetingBox: {
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      // [theme.breakpoints.down('sm')]: {
      //   justifyContent: 'center',
      // },
      // margin: theme.spacing(1),
    },
    profileBox: {
      // [theme.breakpoints.down('sm')]: {
      //   alignItems: 'center',
      // },
      alignItems: 'flex-start',
      justifyContent: 'center',
      // margin: theme.spacing(1),
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
      <Grid item container xs={12} sm={12} md={3} lg={3} xl={3} sx={classes.avatarBox}>
        <Avatar src={profilePicture} sx={{ width: mdDownScreenSize ? theme.spacing(14) : theme.spacing(18), height: mdDownScreenSize ? theme.spacing(14) : theme.spacing(18) }} />
      </Grid>

      <Grid item container xs={12} sm={12} md={9} lg={9} xl={9}>
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
          <Typography variant="h5">CHRISTIAN ARVIE BENITO</Typography>
          <Typography variant="body1" style={{ paddingTop: 15 }}>a web developer from the Philippines.</Typography>
        </Grid>

        {/* <Grid item container spacing={1} sx={classes.socialBox}>
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
              <IconButton size="small" onClick={() => window.open('https://twitter.com/arvieguadiz')}><TwitterIcon /></IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">Email</Typography>} TransitionComponent={Zoom}>
              <IconButton size="small" onClick={() => window.location.href = 'mailto:arvieguadiz@gmail.com'}><MailIcon /></IconButton>
            </Tooltip>
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default Home;