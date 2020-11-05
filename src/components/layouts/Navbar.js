import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as appConsts from '../../consts/app-consts';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '& .MuiToolbar-gutters': {
      paddingLeft: 16,
      paddingRight: 16
    },
    backgroundColor: '#fff'
  },
  appBarShift: {
    marginLeft: appConsts.DRAWER_WIDTH,
    width: `calc(100% - ${appConsts.DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: 'none'
  },
  menuIcon: {
    color: '#1e2129'
  }
}));

const Navbar = props => {
  const classes = useStyles();
  return (
    <AppBar elevation={2} position='fixed' className={clsx(classes.appBar, { [classes.appBarShift]: props.drawerOpened })}>
      <Toolbar>
        <IconButton color='default' aria-label='open drawer' onClick={() => props.onChange()}
          edge='start' className={clsx(classes.menuIcon, { [classes.hide]: props.drawerOpened })}>
          <MenuIcon fontSize='small' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;