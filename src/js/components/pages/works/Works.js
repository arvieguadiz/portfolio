import React from 'react';
import { Divider, Grid, Hidden, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from '@material-ui/core';
import { Info as InfoIcon, PhotoLibrary as PhotoLibraryIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { map } from 'lodash';

import loopmod_01 from '../../../../images/loopmod_01.png';
import loopim_02 from '../../../../images/loopim_02.png';
import msb_03 from '../../../../images/msb_03.png';
import ocrms_01 from '../../../../images/ocrms_01.png';

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
  noImageGrid: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000',
  },
}));

const Works = () => {
  const classes = useStyles();

  const workLists = [
    { img: 'no-image', title: 'Project 1', subtitle: 'Project 1' },
    { img: 'no-image', title: 'Project 2', subtitle: 'Project 2' },
    { img: 'no-image', title: 'LOOP Moderation Bridge', subtitle: 'LOOP Moderation Bridge' },
    { img: loopmod_01, title: 'LOOP Moderation', subtitle: 'Content Moderation' },
    { img: 'no-image', title: 'NMS Apps', subtitle: 'Interconnected Applications and Services' },
    { img: loopim_02, title: 'LOOP IM', subtitle: 'Instant Messaging' },
    { img: msb_03, title: 'MSB Image Review', subtitle: 'OJT System' },
    { img: ocrms_01, title: 'E-Police OCRMS', subtitle: 'Thesis System' },
  ];

  return (
    <Grid item container xs={12} justifyContent="flex-start" className={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} className={`${classes.gridPadding} ${classes.sideTitle}`}>
        <Typography variant="h6">Works</Typography>
        <Hidden smDown>
          <Divider width="100%" />
        </Hidden>
      </Grid>

      <Grid item container spacing={3} xs={12} sm={12} md={8} lg={8} xl={8} className={classes.gridPadding}>
        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Hidden xsDown>
              <ImageList rowHeight={180}>
                {/* <ImageListItem cols={2} style={{ height: 'auto' }}>
                  <ListSubheader component="div">Hello</ListSubheader>
                </ImageListItem> */}
                {
                  map(workLists, (item, index) => {
                    return (
                      <ImageListItem key={`list-${item.img}-${index}`}>
                        {
                          item.img === 'no-image'
                            ? <Grid container direction="column" className={classes.noImageGrid}>
                              <PhotoLibraryIcon color="disabled" style={{ fontSize: 60 }} />
                              <Typography color="textSecondary">No Available Image</Typography>
                            </Grid>
                            : <img src={item.img} alt={item.title} />
                        }
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.subtitle}
                          actionIcon={
                            <IconButton>
                              <InfoIcon />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    );
                  })
                }
              </ImageList>
            </Hidden>
            <Hidden smUp>
              <ImageList rowHeight={180} cols={1}>
                {
                  map(workLists, (item, index) => {
                    return (
                      <ImageListItem key={`list-${item.img}-${index}`}>
                        {
                          item.img === 'no-image'
                            ? <Grid container direction="column" className={classes.noImageGrid}>
                              <PhotoLibraryIcon color="disabled" style={{ fontSize: 60 }} />
                              <Typography color="textSecondary">No Available Image</Typography>
                            </Grid>
                            : <img src={item.img} alt={item.title} />
                        }
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.subtitle}
                          actionIcon={
                            <IconButton>
                              <InfoIcon />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    );
                  })
                }
              </ImageList>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Works;