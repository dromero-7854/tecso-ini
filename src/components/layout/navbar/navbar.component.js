import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../../../actions/auth';
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import FullLogo from '../../../images/full-logo-navbar.png';
import clsx from 'clsx';
import { useStyles } from './navbar.styles';

const Navbar = props => {
  const classes = useStyles();
  const { dispatch } = props;
  
  const logOut = () => {
    dispatch(logout());
  }

  return (
    <AppBar elevation={2} position='fixed' className={clsx(classes.appBar, { [classes.appBarShift]: props.drawerOpened })}>
      <Toolbar>
        <IconButton color='default' aria-label='open drawer' onClick={() => props.onChange()}
          edge='start' className={clsx(classes.menuIcon, { [classes.hide]: props.drawerOpened })}>
          <MenuIcon fontSize='small' />
        </IconButton>
        <Box
          ml={'3px'}
          display='flex'
          alignItems='center'
          flexGrow={1}
          className={clsx({
            [classes.visible]: !props.drawerOpened,
            [classes.collapse]: props.drawerOpened
          })}>
          <img src={FullLogo} className={classes.fullLogo} alt='app navbar logo' />
        </Box>
        <IconButton className={classes.menuIcon} aria-label='logout' onClick={logOut}>
          <PowerSettingsNewIcon fontSize='small' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(Navbar);
