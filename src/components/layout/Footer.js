import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import TecsoLogo from '../../images/tecso-logo.png';
import * as appConsts from '../../consts/app-consts';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#1e2129',
    height: 50,
    position: 'fixed',
    left: 0,
    bottom: 0,
    marginLeft: 56,
    width: `calc(100% - ${appConsts.MINI_DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  footerShift: {
    marginLeft: appConsts.DRAWER_WIDTH,
    width: `calc(100% - ${appConsts.DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  container: {
    margin: 'auto 15px',
    height: '100%'
  },
  tecsoLogo: {
    width: 20
  },
  visible: {
    visibility: 'visible'
  },
  collapse: {
    visibility: 'collapse'
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.footer, { [classes.footerShift]: props.drawerOpened })}>
      <Box display='flex' className={classes.container} alignItems='center' flexDirection='row-reverse'>
        <Box>
          <img src={TecsoLogo} className={classes.tecsoLogo} alt='tecso logo' />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;