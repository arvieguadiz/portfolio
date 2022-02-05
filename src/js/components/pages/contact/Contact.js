import React from 'react';
import { Avatar, Box, Divider, Grid, IconButton, Tooltip, Typography, useMediaQuery, Zoom } from '@mui/material';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon, Twitter as TwitterIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { map } from 'lodash';

const Skills = () => {
  const theme = useTheme();
  const mdDownScreenSize = useMediaQuery(theme.breakpoints.down('md'));
  
  const classes = {
    root: {
      paddingTop: theme.spacing(5),
    },
    gridPadding: {
      padding: theme.spacing(1),
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      border: `2px solid ${theme.palette.text.disabled}`,
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

  const emailInfo = [
    { name: 'Email', icon: <MailIcon />, link: 'mailto:arvieguadiz@gmail.com', },
  ];

  const snsInfo = [
    { name: 'Twitter', icon: <TwitterIcon />, link: 'https://twitter.com/arvieguadiz', },
    { name: 'LinkedIn', icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/christian-arvie-benito-378399211/', },
  ];

  const githubInfo = [
    { name: 'GitHub', icon: <GitHubIcon />, link: 'https://github.com/arvieguadiz', },
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
              <Grid item xs={6} sm={4} md={4} lg={3} xl={3} key={`item-${item.name}-${index}`}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <Tooltip title={<Typography variant="body2">{item.name === 'Email' ? `Send ${item.name}` : `Go to ${item.name}`}</Typography>} TransitionComponent={Zoom}>
                      <IconButton size="small" onClick={() => item.name === 'Email' ? window.location.href = item.link : window.open(item.link)}>
                        <Avatar sx={classes.avatar}>{item.icon}</Avatar>
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box sx={{ ml: 1 }}>
                    <Typography variant="body2">{item.name}</Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })
        }
      </Grid>
    );
  };

  return (
    <Grid container justifyContent="flex-end" sx={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={9} lg={9} xl={9}>
        <Typography variant="h3">Contact</Typography>
        <Typography variant="body1">Feel free to say hello and I'll get back to you as soon as I can.</Typography>
      </Grid>

      <Divider sx={classes.divider} />
      
      <Grid item container xs={12} sm={12} md={9} lg={9} xl={9}>
        <Typography variant="h5" gutterBottom>Get in touch with</Typography>

        <Grid item container spacing={3} xs={12} sx={classes.gridPadding}>
          <SkillListFunc title="Email" data={emailInfo} />
          <SkillListFunc title="Social Networking Services" data={snsInfo} />
          <SkillListFunc title="Github" data={githubInfo} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;