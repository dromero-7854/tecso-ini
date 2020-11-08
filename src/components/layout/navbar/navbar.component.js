import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './navbar.styles';

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