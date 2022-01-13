import React, { useState } from 'react';
import { Box, Chip, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Paper, Typography, useMediaQuery } from '@mui/material';
import { Close as CloseIcon, Info as InfoIcon, PhotoLibrary as PhotoLibraryIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import Image from 'material-ui-image';
import { map } from 'lodash';

import workLists from './workLists';

const Works = () => {
  const theme = useTheme();
  const smDownScreenSize = useMediaQuery(theme.breakpoints.down('sm'));
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
    noImageGrid: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #000',
    },
    dialogTitleRoot: {
      margin: 0,
      padding: theme.spacing(2),
    },
    dialogCloseButton: {
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
  };

  const [ openWorkModal, setOpenWorkModal ] = useState(false);
  const [ selectedWork, setSelectedWork ] = useState({});

  const ImageListFunc = (props) => {
    const { cols } = props;

    return (
      <ImageList rowHeight={180} cols={cols ? cols : 2} sx={{ overflow: 'hidden' }}>
        {/* <ImageListItem cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Hello</ListSubheader>
        </ImageListItem> */}
        {
          map(workLists, (item, index) => {
            return (
              <ImageListItem key={`list-${item.thumbnail}-${index}`} onClick={() => handleWorkModalOpen(item)} sx={{ cursor: 'pointer' }}>
                {
                  item.thumbnail === 'no-image'
                    ? <Grid container direction="column" sx={classes.noImageGrid}>
                      <PhotoLibraryIcon color="disabled" style={{ fontSize: 60 }} />
                      <Typography color="textSecondary">No Available Image</Typography>
                    </Grid>
                    : <img src={item.thumbnail} alt={item.title} />
                }
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.subtitle}
                  actionIcon={
                    <IconButton onClick={() => handleWorkModalOpen(item)}>
                      <InfoIcon />
                    </IconButton>
                  }
                  sx={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  }}
                />
              </ImageListItem>
            );
          })
        }
      </ImageList>
    );
  };

  const handleWorkModalOpen = (item) => {
    setOpenWorkModal(true);
    setSelectedWork(item);
  };

  const handleWorkModalClose = () => {
    setOpenWorkModal(false);
  };

  const CustomDialogTitle = (props) => {
    const { children, onClose } = props;

    return (
      <DialogTitle sx={classes.dialogTitleRoot}>
        {children}
        {
          onClose ? (
            <IconButton onClick={onClose} sx={classes.dialogCloseButton} style={{ position: 'absolute', color: theme.palette.grey[500] }}>
              <CloseIcon />
            </IconButton>
          ) : null
        }
      </DialogTitle>
    );
  };

  return (
    <Grid item container xs={12} justifyContent="flex-start" sx={classes.root}>
      <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4} sx={{...classes.gridPadding, ...classes.sideTitle}}>
        <Typography variant="h6">Works</Typography>
        {
          !mdDownScreenSize && <Divider width="100%" />
        }
      </Grid>

      <Grid item container spacing={3} xs={12} sm={12} md={8} lg={8} xl={8} sx={classes.gridPadding}>
        <Grid item container spacing={1}>
          <Grid item xs={12}>
            {
              smDownScreenSize ? <ImageListFunc cols={1} /> : <ImageListFunc />
            }
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        fullWidth
        maxWidth="lg"
        fullScreen={smDownScreenSize}
        open={openWorkModal}
        onClose={handleWorkModalClose}
      >
        <CustomDialogTitle onClose={handleWorkModalClose}>
          {selectedWork.title}
        </CustomDialogTitle>
        <DialogContent>
          <Carousel
            autoPlay={false}
            animation="slide"
            cycleNavigation={false}
            navButtonsAlwaysVisible={!smDownScreenSize}
          >
            {
              map(selectedWork.images, (item, index) => {
                return (
                  <Paper key={`list-${item}-${index}`}>
                    <Image
                      src={item}
                      aspectRatio={20/9}
                      disableTransition
                      color={theme.palette.background.paper}
                      errorIcon={
                        <Grid container direction="column" alignItems="center" justifyContent="center">
                          <PhotoLibraryIcon color="disabled" style={{ fontSize: 60 }} />
                          <Typography color="textSecondary">No Available Image</Typography>
                        </Grid>
                      }
                    />
                  </Paper>
                );
              })
            }
          </Carousel>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>Platform:</Typography>
              <Grid container spacing={1}>
                {
                  map(selectedWork.platform, (item, index) => {
                    return (
                      <Grid item key={`chip-${item}-${index}`}>
                        <Chip label={item} variant="outlined" />
                      </Grid>
                    );
                  })
                }
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>Technology:</Typography>
              <Grid container spacing={1}>
                {
                  map(selectedWork.technology, (item, index) => {
                    return (
                      <Grid item key={`chip-${item}-${index}`}>
                      <Chip label={item} variant="outlined" />
                      </Grid>
                    );
                  })
                }
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>Responsibility:</Typography>
              <Box m={1}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default Works;