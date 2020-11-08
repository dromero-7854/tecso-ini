import { makeStyles } from '@material-ui/core/styles';
import * as appConsts from '../../../consts/app-consts';

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

export { useStyles };