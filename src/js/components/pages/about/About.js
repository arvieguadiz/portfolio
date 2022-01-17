import React from 'react';
import { Divider, Grid, Link, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  const mdDownScreenSize = useMediaQuery(theme.breakpoints.down('md'));
  
  const classes = {
    root: {
      paddingTop: theme.spacing(5),
    },
    gridPadding: {
      padding: theme.spacing(1),
    },
    divider: {
      width: mdDownScreenSize ? '100%' : '75%',
      border: 2,
      borderColor: 'divider',
      borderRadius: '2px',
      mt: 5,
      mb: 5,
    },
  };

  return (
    <Grid container justifyContent="flex-end" sx={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={9} lg={9} xl={9}>
        <Typography variant="h3">About</Typography>
        <Typography variant="body1">Everything about this page.</Typography>
      </Grid>

      <Divider sx={classes.divider} />

      <Grid item container xs={12} sm={12} md={9} lg={9} xl={9}>
        <Typography variant="h5" gutterBottom>What I used</Typography>
        <Grid item container spacing={2} sx={classes.gridPadding}>
          <Grid item xs={12}>
            <Typography variant="body1">
              This page was made with <Link href="https://reactjs.org/" underline="hover" target="_blank">React</Link> and <Link href="https://mui.com/" underline="hover" target="_blank">Material-UI v5</Link>.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={classes.divider} />

      <Grid item container xs={12} sm={12} md={9} lg={9} xl={9}>
        <Typography variant="h5" gutterBottom>Inspired by</Typography>
        <Grid item container spacing={2} sx={classes.gridPadding}>
          <Grid item xs={12}>
            <Typography variant="body1">
              This page was inspired by these two awesome people <Link href="https://sebkay.com/" underline="hover" target="_blank">Seb Kay</Link> and <Link href="https://kvnglvz.github.io/" underline="hover" target="_blank">Kevin Galvez</Link>'s portfolios.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;