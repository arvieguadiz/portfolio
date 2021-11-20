import React from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sideTitle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  },
  gridPadding: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} justifyContent="flex-start">
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={`${classes.gridPadding} ${classes.sideTitle}`}>
        <Typography variant="h6">About Me</Typography>
      </Grid>

      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={classes.gridPadding}>
        <Typography variant="body2">Age: 26</Typography>
        <Typography variant="body2">Nationality: Filipino</Typography>
        <Typography variant="body2">Religion: Roman Catholic</Typography>
        <Hidden mdUp>
          <Typography variant="body2">Address: 032 Poblacion, Laoac, Pangasinan</Typography>
          <Typography variant="body2">Phone: 0926 839 5843</Typography>
          <Typography variant="body2">Email: arvieguadiz@gmail.com</Typography>
        </Hidden>
      </Grid>
      
      <Hidden smDown>
        <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={classes.gridPadding}>
          <Typography variant="body2">Address: 032 Poblacion, Laoac, Pangasinan</Typography>
          <Typography variant="body2">Phone: 0926 839 5843</Typography>
          <Typography variant="body2">Email: arvieguadiz@gmail.com</Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default About;