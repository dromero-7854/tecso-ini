import React from 'react';
import { withRouter } from 'react-router-dom';
import * as routerConfig from '../../../config/router/routes';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { logout } from '../../../actions/auth';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton, Divider, Box, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import FullLogo from '../../../images/full-logo.png';
import clsx from 'clsx';
import { useStyles } from './sidebar.styles';

const Sidebar = props => {

  const { history, dispatch } = props;
  const theme = useTheme();
  const classes = useStyles();

  const logOut = () => {
    dispatch(logout());
  }

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.drawerOpened,
        [classes.drawerClose]: !props.drawerOpened
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.drawerOpened,
          [classes.drawerClose]: !props.drawerOpened
        })
      }}>
      <div className={classes.toolbar}>
        <div style={{ width: '100%' }}>
          <Box display='flex' alignItems='center'>
            <Box display='flex' flexGrow={1}>
              <img src={FullLogo} className={classes.fullLogo} alt='app logo' />
            </Box>
            <Box>
              <IconButton
                onClick={() => props.onChange()}
                className={classes.toggleButton}>
                {theme.direction === 'rtl' ? <ChevronRightIcon fontSize='small' /> : <ChevronLeftIcon fontSize='small' />}
              </IconButton>
            </Box>
          </Box>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <Box className={classes.userCard}>
          <Box>
            <Typography variant='overline' display='block' noWrap={true} align='center'
              className={clsx(classes.userFullName, {
                [classes.visible]: props.drawerOpened,
                [classes.collapse]: !props.drawerOpened
              })}>
              Dante Romero
            </Typography>
          </Box>
          <Box>
            <Typography variant='overline' display='block' noWrap={true} align='center'
              className={clsx(classes.email, {
                [classes.visible]: props.drawerOpened,
                [classes.collapse]: !props.drawerOpened
              })}>
              rl.dante@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box display='flex' className={classes.avatarBox} justifyContent='center'>
          <Avatar className={[classes.orange, classes.avatar].join(' ')}>DR</Avatar>
        </Box>
      </div>
      <List className={classes.listBox}>
        {routerConfig.routes.map((item, index) => {
          return (
            <ListItem button onClick={() => history.push(item.path)} key={item.key}>
              <ListItemIcon className={classes.listItemIcon} > {item.icon} </ListItemIcon>
              <ListItemText primary={item.text} disableTypography={true} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List className={classes.listBox}>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon} > <SettingsIcon /> </ListItemIcon>
          <ListItemText primary='Configuración' disableTypography={true} />
        </ListItem>
        <ListItem button onClick={logOut}>
          <ListItemIcon className={classes.listItemIcon} > <PowerSettingsNewIcon /> </ListItemIcon>
          <ListItemText primary='Logout' disableTypography={true} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default compose(withRouter, connect())(Sidebar);