import React from 'react';
import { Box } from '@material-ui/core';
import TecsoLogo from '../../../images/tecso-logo.png';
import clsx from 'clsx';
import { useStyles } from './footer.styles';

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