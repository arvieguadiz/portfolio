import React from 'react';
import { Avatar, Grid, Tooltip, Typography, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import laravelLogo from '../../../../images/logo/laravel.jpg';
import nodeJsLogo from '../../../../images/logo/nodejs.png';
import reactLogo from '../../../../images/logo/react.jpg';
import wordPressLogo from '../../../../images/logo/wordpress.png';
import jQueryLogo from '../../../../images/logo/jquery.jpg';
import bootstrapLogo from '../../../../images/logo/bootstrap.jpg';
import redisLogo from '../../../../images/logo/redis.png';
import nedbLogo from '../../../../images/logo/nedb.png';
import expressJsLogo from '../../../../images/logo/expressjs.png';
import dockerLogo from '../../../../images/logo/docker.png';
import kohanaLogo from '../../../../images/logo/kohana.jpg';
import reactNativeLogo from '../../../../images/logo/react-native.jpg';
import mongoDbLogo from '../../../../images/logo/mongodb.jpg';

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

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} justifyContent="flex-start" className={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={`${classes.gridPadding} ${classes.sideTitle}`}>
        <Typography variant="h6">Skills</Typography>
      </Grid>

      <Grid item container spacing={3} xs={12} sm={12} md={8} lg={8} xl={8} className={classes.gridPadding}>
        {/* <Grid item container direction="column">
          <Typography variant="body2">2014 - 2018</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>Pangasinan State University</Typography>
          <Typography variant="body2">San Vicente, Urdaneta City, Pangasinan</Typography>
          <Typography variant="body1">Bachelor of Science in Information Technology</Typography>
        </Grid>
        
        <Grid item container direction="column">
          <Typography variant="body2">2008 - 2012</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>Laoac National High School</Typography>
          <Typography variant="body2">Poblacion, Laoac, Pangasinan</Typography>
        </Grid>
        
        <Grid item container direction="column">
          <Typography variant="body2">2002 - 2008</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>Lipit Elementary School</Typography>
          <Typography variant="body2">Lipit Norte, Manaoag, Pangasinan</Typography>
        </Grid> */}

        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">I mostly use</Typography>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">Laravel</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="Laravel" src={laravelLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">NodeJS</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="NodeJS" src={nodeJsLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">React</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="React" src={reactLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">I had experience using</Typography>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">WordPress</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="WordPress" src={wordPressLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">JQuery</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="JQuery" src={jQueryLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">Bootstrap</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="Bootstrap" src={bootstrapLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">Redis</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="Redis" src={redisLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">NeDB</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="NeDB" src={nedbLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">ExpressJS</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="ExpressJS" src={expressJsLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">Docker</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="Docker" src={dockerLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">Kohana</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="Kohana" src={kohanaLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">I want to learn</Typography>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">React Native</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="React Native" src={reactNativeLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={<Typography variant="body2">MongoDB</Typography>} TransitionComponent={Zoom}>
              <Avatar alt="MongoDB" src={mongoDbLogo} className={classes.avatar} />
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;