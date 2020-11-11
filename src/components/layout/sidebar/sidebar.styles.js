import { makeStyles } from '@material-ui/core/styles';
import { deepOrange as muiDeepOrange, grey as muiGrey} from '@material-ui/core/colors';
import * as appConsts from '../../../consts/app-consts';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: appConsts.DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: appConsts.DRAWER_WIDTH,
    overflowX: 'hidden',
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
    paddingRight: 16,
    color: muiGrey[800]
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backgroundColor: muiGrey[900],
    ...theme.mixins.toolbar // necessary for content to be below app bar
  },
  toggleButton: {
    color: '#fff',
    '&:hover': {
      backgroundColor: '#37474f'
    },
    '& .MuiIconButton-label': {
      marginRight: 1
    }
  },
  fullLogo: {
    width: 90
  },
  userCard: {
    backgroundColor: muiGrey[900],
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
    backgroundColor: muiGrey[900]
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: -20,
    border: 'solid 2px ' + muiGrey[900],
  },
  orange: {
    color: theme.palette.getContrastText(muiDeepOrange[500]),
    backgroundColor: muiDeepOrange[600],
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

export { useStyles };