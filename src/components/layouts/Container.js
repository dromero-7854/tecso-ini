import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CssBaseline, Typography } from '@material-ui/core';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar // necessary for content to be below app bar
  },
  content: {
    flexGrow: 1
  },
  titleBox: {
    textAlign: 'center',
    padding: '15px 0 15px 0',
    backgroundColor: '#039be5'
  },
  title: {
    fontSize: 22,
    fontWeight: 300,
    color: '#fff'
  }
}));

const Container = () => {
  const classes = useStyles();
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar drawerOpened={drawerOpened} onChange={() => setDrawerOpened(!drawerOpened)} />
      <Sidebar drawerOpened={drawerOpened} onChange={() => setDrawerOpened(!drawerOpened)} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box className={classes.titleBox}>
          <span className={classes.title}>Pacientes</span>
        </Box>
      </main>
    </div>
  );
};

export default Container;