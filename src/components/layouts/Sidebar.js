import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton, Divider, Box, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar } from '@material-ui/core';
import deepOrange from '@material-ui/core/colors/deepOrange';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import FullLogo from '../../images/full-logo.png';
import * as appConsts from '../../consts/app-consts';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: appConsts.DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: appConsts.DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1
  },
  listItemIcon: {
    minWidth: 24,
    paddingRight: 16
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backgroundColor: '#1e2129',
    ...theme.mixins.toolbar // necessary for content to be below app bar
  },
  toggleButton: {
    color: '#fff',
    '&:hover': {
      backgroundColor: '#37474f'
    }
  },
  fullLogo: {
    width: 90
  },
  userCard: {
    backgroundColor: '#1e2129',
    padding: '0 5px 5px 5px'
  },
  userFullName: {
    color: '#fff',
    fontSize: 13,
    letterSpacing: 1
  },
  email: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'lowercase',
    lineHeight: '1.77'
  },
  avatarBox: {
    height: 28,
    marginBottom: 28,
    backgroundColor: '#1e2129'
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: -20,
    border: 'solid 2px #2d323c',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[600],
  },
  listBox: {
    padding: '4px 0 4px 0'
  },
  visible: {
    visibility: 'visible'
  },
  collapse: {
    visibility: 'collapse'
  }
}));

const Sidebar = props => {
  const classes = useStyles();
  const theme = useTheme();
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
            <Typography variant='overline' display='block' noWrap='true' align='center'
              className={clsx(classes.userFullName, {
                [classes.visible]: props.drawerOpened,
                [classes.collapse]: !props.drawerOpened
              })}>
              Dante Romero
            </Typography>
          </Box>
          <Box>
            <Typography variant='overline' display='block' noWrap='true' align='center'
              className={clsx(classes.email, {
                [classes.visible]: props.drawerOpened,
                [classes.collapse]: !props.drawerOpened
              })}>
              rl.dante@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box display='flex' className={classes.avatarBox} justifyContent='center'>
          <Avatar className={[classes.orange, classes.avatar]}>DR</Avatar>
        </Box>
      </div>
      <List className={classes.listBox}>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon} > <DateRangeIcon /> </ListItemIcon>
          <ListItemText primary='Agenda' disableTypography='true' />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon} > <AccountBoxIcon /> </ListItemIcon>
          <ListItemText primary='Pacientes' disableTypography='true' />
        </ListItem>
      </List>
      <Divider />
      <List className={classes.listBox}>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon} > <SettingsIcon /> </ListItemIcon>
          <ListItemText primary='Configuración' disableTypography='true' />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon} > <PowerSettingsNewIcon /> </ListItemIcon>
          <ListItemText primary='Logout' disableTypography='true' />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;