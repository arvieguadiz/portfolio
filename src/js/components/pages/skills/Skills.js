import React from 'react';
import { Avatar, Box, Divider, Grid, Hidden, LinearProgress, Tooltip, Typography, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { map } from 'lodash';

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

  const backendSkills = [
    { name: 'PHP', value: 75, },
    { name: 'Node.js', value: 65, },
    { name: 'SQL', value: 85, },
  ];

  const frontendSkills = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 75 },
    { name: 'JavaScript', value: 70 },
  ];

  const mostlyUseTech = [
    { name: 'Laravel', src: laravelLogo, },
    { name: 'NodeJS', src: nodeJsLogo, },
    { name: 'React', src: reactLogo, },
  ];

  const hadExperienceUsingTech = [
    { name: 'WordPress', src: wordPressLogo },
    { name: 'JQuery', src: jQueryLogo },
    { name: 'Bootstrap', src: bootstrapLogo },
    { name: 'Redis', src: redisLogo },
    { name: 'NeDB', src: nedbLogo },
    { name: 'ExpressJS', src: expressJsLogo },
    { name: 'Docker', src: dockerLogo },
    { name: 'Kohana', src: kohanaLogo },
  ];

  const wantToLearnTech = [
    { name: 'React Native', src: reactNativeLogo },
    { name: 'MongoDB', src: mongoDbLogo },
  ];

  return (
    <Grid item container xs={12} justifyContent="flex-start" className={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={`${classes.gridPadding} ${classes.sideTitle}`}>
        <Typography variant="h6">Skills</Typography>
        <Hidden smDown>
          <Divider width="100%" />
        </Hidden>
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
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="body1">Backend</Typography>
            {
              map(backendSkills, (item, index) => {
                return (
                  <Box key={`item-${item.name}-${index}`} className={classes.gridPadding}>
                    <Box>
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                    <Box>
                      <LinearProgress variant="determinate" value={item.value} style={{ height: 8, borderRadius: 3 }} />
                    </Box>
                  </Box>
                );
              })
            }
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="body1">Frontend</Typography>
            {
              map(frontendSkills, (item, index) => {
                return (
                  <Box key={`item-${item.name}-${index}`} className={classes.gridPadding}>
                    <Box>
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                    <Box>
                      <LinearProgress variant="determinate" value={item.value}  style={{ height: 8, borderRadius: 3 }} />
                    </Box>
                  </Box>
                );
              })
            }
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">I mostly use</Typography>
          </Grid>
          {
            map(mostlyUseTech, (item, index) => {
              return (
                <Grid item key={`item-${item.name}-${index}`}>
                  <Tooltip title={<Typography variant="body2">{item.name}</Typography>} TransitionComponent={Zoom}>
                    <Avatar alt={item.name} src={item.src} className={classes.avatar} />
                  </Tooltip>
                </Grid>
              );
            })
          }
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">I had experience using</Typography>
          </Grid>
          {
            map(hadExperienceUsingTech, (item, index) => {
              return (
                <Grid item key={`item-${item.name}-${index}`}>
                  <Tooltip title={<Typography variant="body2">{item.name}</Typography>} TransitionComponent={Zoom}>
                    <Avatar alt={item.name} src={item.src} className={classes.avatar} />
                  </Tooltip>
                </Grid>
              );
            })
          }
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">I want to learn</Typography>
          </Grid>
          {
            map(wantToLearnTech, (item, index) => {
              return (
                <Grid item key={`item-${item.name}-${index}`}>
                  <Tooltip title={<Typography variant="body2">{item.name}</Typography>} TransitionComponent={Zoom}>
                    <Avatar alt={item.name} src={item.src} className={classes.avatar} />
                  </Tooltip>
                </Grid>
              );
            })
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;