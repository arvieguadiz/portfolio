import React from 'react';
import { Avatar, Box, Divider, Grid, LinearProgress, Tooltip, Typography, useMediaQuery, Zoom } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
import pythonLogo from '../../../../images/logo/python.png';

const Skills = () => {
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
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      border: `2px solid ${theme.palette.text.disabled}`,
    },
  };

  const backendSkills = [
    { name: 'PHP', value: 75, },
    { name: 'Node.js', value: 65, },
    { name: 'SQL', value: 80, },
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

  const stillImprovingTech = [
    { name: 'Redis', src: redisLogo },
    { name: 'Docker', src: dockerLogo },
  ];

  const hadExperienceUsingTech = [
    { name: 'JQuery', src: jQueryLogo },
    { name: 'Bootstrap', src: bootstrapLogo },
    { name: 'NeDB', src: nedbLogo },
    { name: 'ExpressJS', src: expressJsLogo },
    { name: 'Kohana', src: kohanaLogo },
    { name: 'WordPress', src: wordPressLogo },
  ];

  const wantToLearnTech = [
    { name: 'React Native', src: reactNativeLogo },
    { name: 'Python', src: pythonLogo },
    { name: 'MongoDB', src: mongoDbLogo },
  ];

  const SkillListFunc = (props) => {
    const { title, data } = props;

    return (
      <Grid item container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body1">{title}</Typography>
        </Grid>
        {
          map(data, (item, index) => {
            return (
              <Grid item key={`item-${item.name}-${index}`}>
                <Tooltip title={<Typography variant="body2">{item.name}</Typography>} TransitionComponent={Zoom}>
                  <Avatar alt={item.name} src={item.src} sx={classes.avatar} />
                </Tooltip>
              </Grid>
            );
          })
        }
      </Grid>
    );
  };

  return (
    <Grid item container xs={12} justifyContent="flex-start" sx={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} sx={{...classes.gridPadding, ...classes.sideTitle}}>
        <Typography variant="h6">Skills</Typography>
        {
          !mdDownScreenSize && <Divider width="100%" />
        }
      </Grid>

      <Grid item container spacing={3} xs={12} sm={12} md={8} lg={8} xl={8} sx={classes.gridPadding}>
        <Grid item container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="body1">Backend</Typography>
            {
              map(backendSkills, (item, index) => {
                return (
                  <Box key={`item-${item.name}-${index}`} sx={classes.gridPadding}>
                    <Box>
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                    <Box>
                      <LinearProgress variant="determinate" value={item.value} sx={{ height: 8, borderRadius: 3 }} />
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
                  <Box key={`item-${item.name}-${index}`} sx={classes.gridPadding}>
                    <Box>
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                    <Box>
                      <LinearProgress variant="determinate" value={item.value} sx={{ height: 8, borderRadius: 3 }} />
                    </Box>
                  </Box>
                );
              })
            }
          </Grid>
        </Grid>

        <SkillListFunc title="I mostly use" data={mostlyUseTech} />
        <SkillListFunc title="I am still improving on" data={stillImprovingTech} />
        <SkillListFunc title="I had experience using" data={hadExperienceUsingTech} />
        <SkillListFunc title="I want to learn" data={wantToLearnTech} />
      </Grid>
    </Grid>
  );
}

export default Skills;