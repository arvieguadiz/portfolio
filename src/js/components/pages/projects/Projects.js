import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Chip, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Paper, Typography, useMediaQuery } from '@mui/material';
import { ArrowForwardIos as ArrowForwardIosIcon, Close as CloseIcon, Info as InfoIcon, PhotoLibrary as PhotoLibraryIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import Image from 'material-ui-image';
import { map } from 'lodash';

import projectLists from './projectLists';

const Projects = () => {
  const theme = useTheme();
  const mdDownScreenSize = useMediaQuery(theme.breakpoints.down('md'));
  
  const classes = {
    root: {
      paddingTop: theme.spacing(5),
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
    divider: {
      width: mdDownScreenSize ? '100%' : '75%',
      border: 2,
      borderColor: 'divider',
      borderRadius: '2px',
      mt: 5,
      mb: 5,
    },
  };

  const [ openProjectModal, setOpenProjectModal ] = useState(false);
  const [ selectedProject, setSelectedProject ] = useState({});

  const ImageListFunc = (props) => {
    const { cols } = props;

    return (
      <ImageList rowHeight={180} cols={cols ? cols : 2} sx={{ overflow: 'hidden' }}>
        {
          map(projectLists, (item, index) => {
            return (
              <ImageListItem key={`list-${item.thumbnail}-${index}`} onClick={() => handleProjectModalOpen(item)} sx={{ cursor: 'pointer' }}>
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
                    <IconButton onClick={() => handleProjectModalOpen(item)}>
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

  const handleProjectModalOpen = (item) => {
    setOpenProjectModal(true);
    setSelectedProject(item);
  };

  const handleProjectModalClose = () => {
    setOpenProjectModal(false);
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

  const RenderProjectFunc = () => {
    return (
      <Grid item container xs={12} sm={12} md={9} lg={9} xl={9}>
        {
          map(projectLists, (item, index) => {
            return (
              <Grid item container spacing={2} key={`list-${item.title}-${index}`} sx={classes.gridPadding}>
                <Grid item xs={12}>
                  {/* {
                    smDownScreenSize ? <ImageListFunc cols={1} /> : <ImageListFunc />
                  } */}
                  <Card variant="outlined" sx={{ p: 2, pb: theme.spacing(3), border: 'none' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
                        <Card raised>
                          <CardContent sx={{ p: 0 }} style={{ paddingBottom: 0 }}>
                            {/* <CardMedia
                              component="img"
                              image={item.thumbnail}
                              alt={item.title}
                            /> */}
                            <Image
                              src={item.thumbnail}
                              aspectRatio={4/5}
                              disableTransition
                              color={theme.palette.background.paper}
                              errorIcon={
                                <Grid container direction="column" alignItems="center" justifyContent="center">
                                  <PhotoLibraryIcon color="disabled" style={{ fontSize: 60 }} />
                                  <Typography color="textSecondary">No Available Image</Typography>
                                </Grid>
                              }
                            />
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item container alignItems="center" xs={12} sm={5} md={5} lg={5} xl={5}>
                        <CardContent>
                          <Grid container direction="column" spacing={1}>
                            <Grid item>
                              <Typography variant="h5" sx={{ fontSize: 28 }}>{item.title}</Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="body1" sx={{ fontSize: 18 }}>{item.subtitle}</Typography>
                            </Grid>
                            <Grid item sx={{ mt: 3, mb: 3 }}>
                              {
                                map(item.responsibility?.tasks, (item_task, index_task) => {
                                  return (
                                    <Typography variant="body1" key={`task-${item_task}-${index_task}`} sx={{ fontSize: 20 }}>
                                      <ArrowForwardIosIcon sx={{ fontSize: 16 }} /> {item_task}
                                    </Typography>
                                  );
                                })
                              }
                            </Grid>
                            <Grid item container justifyContent="flex-start">
                              <Link component="button" variant="body2" underline="hover" onClick={() => handleProjectModalOpen(item)} sx={{ fontSize: 18 }}>View Details →</Link>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
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
        <Typography variant="h3">Projects</Typography>
        <Typography variant="body1">List of projects that I made, contributed to the development, or helped to improve.</Typography>
      </Grid>

      <Divider sx={classes.divider} />

      <RenderProjectFunc />

      <Dialog
        fullWidth
        maxWidth="lg"
        fullScreen={mdDownScreenSize}
        open={openProjectModal}
        onClose={handleProjectModalClose}
      >
        <CustomDialogTitle onClose={handleProjectModalClose}>
          {selectedProject.title}
        </CustomDialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item container spacing={1} xs={12}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  {selectedProject.subtitle}
                </Typography>
              </Grid>
              <Grid item container spacing={1} xs={12} sx={{ mt: 0.5, mb: 3 }}>
                {
                  map(selectedProject.responsibility?.tasks, (item_task, index_task) => {
                    return (
                      <Grid item key={`task-${item_task}-${index_task}`}>
                        <Typography variant="body1">
                          <ArrowForwardIosIcon sx={{ fontSize: 14 }} /> {item_task}
                        </Typography>
                      </Grid>
                    );
                  })
                }
              </Grid>
            </Grid>

            <Grid item container spacing={1} xs={12} sm={12} md={9} lg={9} xl={9}>
              <Grid item xs={12}>
                <Carousel
                  autoPlay={false}
                  animation="slide"
                  cycleNavigation={false}
                  navButtonsAlwaysVisible={!mdDownScreenSize}
                >
                  {
                    map(selectedProject.images, (item, index) => {
                      return (
                        <Paper key={`list-${item}-${index}`}>
                          <Image
                            src={item}
                            aspectRatio={16/9}
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
              </Grid>
            </Grid>

            <Grid item container spacing={1} xs={12} sm={12} md={3} lg={3} xl={3}>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>Platform:</Typography>
                <Grid container spacing={0.5}>
                  {
                    map(selectedProject?.platform, (item, index) => {
                      return (
                        <Grid item key={`chip-${item}-${index}`}>
                          <Chip label={item} variant="outlined" />
                        </Grid>
                      );
                    })
                  }
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>Technology:</Typography>
                <Grid container spacing={0.5}>
                  {
                    map(selectedProject?.technology, (item, index) => {
                      return (
                        <Grid item key={`chip-${item}-${index}`}>
                          <Chip label={item} variant="outlined" />
                        </Grid>
                      );
                    })
                  }
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>Responsibility:</Typography>
                <Box m={1}>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default Projects;