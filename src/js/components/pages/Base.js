import React, { useState } from 'react';
import { Box, CssBaseline, Grid, Tab, Typography, useMediaQuery } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { useTheme } from '@mui/material/styles';

const Base = (props) => {
  const { children } = props;
  
  const theme = useTheme();
  const mdDownScreenSize = useMediaQuery(theme.breakpoints.down('md'));

  const classes = {
    root: {
      display: 'flex',
    },
    tabsBox: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    },
    tabsMain: {
      [`& .${tabsClasses.scrollButtons}`]: {
        '&.Mui-disabled': { opacity: 0.3 },
      },
      width: '75%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  };

  const [ value, setValue ] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;

    return (
      <div role="tabpanel" hidden={value !== index}>
        {
          value === index && (
            // <Box sx={{ p: 3 }}>
            //   { children }
            // </Box>
            children
          )
        }
      </div>
    );
  };

  return (
    <Box mt={5} mb={5} sx={classes.root}>
      <CssBaseline />

      <Grid container justifyContent="center">
        <Grid item container xs={11} sm={11} md={10} lg={8} xl={7} justifyContent="center">
          { children[0] }

          <Box pt={3} sx={{ width: '100%' }}>
            <Box sx={classes.tabsBox}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={classes.tabsMain}
              >
                <Tab label={mdDownScreenSize ? "Skills" : <Typography sx={{ fontWeight: 'bold' }}>Skills</Typography>} />
                <Tab label={mdDownScreenSize ? "Projects" : <Typography sx={{ fontWeight: 'bold' }}>Projects</Typography>} />
                <Tab label={mdDownScreenSize ? "Contact" : <Typography sx={{ fontWeight: 'bold' }}>Contact</Typography>} />
                <Tab label={mdDownScreenSize ? "About" : <Typography sx={{ fontWeight: 'bold' }}>About</Typography>} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={value}>
              { children[value + 1] }
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Base;