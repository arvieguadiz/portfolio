import React from 'react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  const mdDownScreenSize = useMediaQuery(theme.breakpoints.down('md'));
  
  const classes = {
    root: {
      paddingTop: theme.spacing(5),
    },
    sideTitle: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
    },
    gridPadding: {
      padding: theme.spacing(1),
    },
  };

  return (
    <Grid item container xs={12} justifyContent="flex-start" sx={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} sx={{...classes.gridPadding, ...classes.sideTitle}}>
        <Typography variant="h6">About</Typography>
        {
          !mdDownScreenSize && <Divider width="100%" />
        }
      </Grid>

      <Grid item container spacing={3} xs={12} sm={12} md={8} lg={8} xl={8} sx={classes.gridPadding}>
        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">This page was made with React and Material-UI.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;