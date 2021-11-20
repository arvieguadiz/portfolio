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

const Background = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} justifyContent="flex-start">
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={`${classes.gridPadding} ${classes.sideTitle}`}>
        <Hidden smDown>
          <Typography variant="h6">Educational</Typography>
          <Typography variant="h6">Background</Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h6">Educational Background</Typography>
        </Hidden>
      </Grid>

      <Grid item container spacing={3} xs={12} sm={12} md={8} lg={8} xl={8} className={classes.gridPadding}>
        <Grid item container direction="column">
          <Typography variant="subtitle2">2014 - 2018</Typography>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Pangasinan State University</Typography>
          <Typography variant="subtitle2">San Vicente, Urdaneta City, Pangasinan</Typography>
          <Typography variant="subtitle1">Bachelor of Science in Information Technology</Typography>
        </Grid>
        
        <Grid item container direction="column">
          <Typography variant="subtitle2">2008 - 2012</Typography>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Laoac National High School</Typography>
          <Typography variant="subtitle2">Poblacion, Laoac, Pangasinan</Typography>
        </Grid>
        
        <Grid item container direction="column">
          <Typography variant="subtitle2">2002 - 2008</Typography>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Lipit Elementary School</Typography>
          <Typography variant="subtitle2">Lipit Norte, Manaoag, Pangasinan</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Background;