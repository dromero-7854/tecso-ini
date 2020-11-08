import { makeStyles } from '@material-ui/core/styles';
import * as appConsts from '../../../consts/app-consts';

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

export { useStyles };
