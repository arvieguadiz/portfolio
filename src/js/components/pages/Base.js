import React from 'react';
import { Box, CssBaseline, Grid } from '@material-ui/core';
// import { Brightness4Rounded as Brightness4RoundedIcon, Brightness7Rounded as Brightness7RoundedIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Base = (props) => {
  const classes = useStyles();

  const { children } = props;
  // const { children, ColorModeContext } = props;
  
  // const colorMode = useContext(ColorModeContext);
  // const theme = useTheme();

  return (
    <Box mt={5} mb={5} className={classes.root}>
      <CssBaseline />

      <Grid container justifyContent="center">
        <Grid item container xs={11} sm={11} md={10} lg={8} xl={7} justifyContent="center">
          {/* <Grid item container xs={12} justifyContent="flex-end">
            <Tooltip title={<Typography variant="body2">{theme.palette.type === 'light' ? 'Dark Mode' : 'Light Mode'}</Typography>} TransitionComponent={Zoom}>
              <IconButton size="small" onClick={colorMode.toggleColorMode}>
                { theme.palette.type === 'light' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon /> }
              </IconButton>
            </Tooltip>
          </Grid> */}
          
          { children }
        </Grid>
      </Grid>
    </Box>
  );
}

export default Base;