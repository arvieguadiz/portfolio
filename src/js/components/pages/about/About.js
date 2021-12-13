import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: `2px solid ${theme.palette.text.disabled}`,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} justifyContent="flex-start" className={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={`${classes.gridPadding} ${classes.sideTitle}`}>
        <Typography variant="h6">About</Typography>
      </Grid>

      <Grid item container spacing={3} xs={12} sm={12} md={8} lg={8} xl={8} className={classes.gridPadding}>
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