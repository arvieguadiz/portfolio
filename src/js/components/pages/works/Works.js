import React from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
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
}));

const Works = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} justifyContent="flex-start" className={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={`${classes.gridPadding} ${classes.sideTitle}`}>
        <Typography variant="h6">Works</Typography>
      </Grid>

      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={classes.gridPadding}>
        {/* <Typography variant="body1">Age: 26</Typography>
        <Typography variant="body1">Nationality: Filipino</Typography>
        <Typography variant="body1">Religion: Roman Catholic</Typography>
        <Hidden mdUp>
          <Typography variant="body1">Address: 032 Poblacion, Laoac, Pangasinan</Typography>
          <Typography variant="body1">Phone: 0926 839 5843</Typography>
          <Typography variant="body1">Email: arvieguadiz@gmail.com</Typography>
        </Hidden> */}
        WIP
      </Grid>
      
      {/* <Hidden smDown>
        <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={classes.gridPadding}>
          <Typography variant="body1">Address: 032 Poblacion, Laoac, Pangasinan</Typography>
          <Typography variant="body1">Phone: 0926 839 5843</Typography>
          <Typography variant="body1">Email: arvieguadiz@gmail.com</Typography>
        </Grid>
      </Hidden> */}
    </Grid>
  );
}

export default Works;