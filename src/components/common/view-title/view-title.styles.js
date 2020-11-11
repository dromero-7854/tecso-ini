import { makeStyles } from '@material-ui/core/styles';
import { blue as muiBlue } from '@material-ui/core/colors';

const blue = muiBlue[600];
const white = '#fff';

const useStyles = makeStyles(() => ({
  titleBox: {
    textAlign: 'center',
    padding: '15px 0 15px 0',
    backgroundColor: blue
  },
  title: {
    fontSize: 22,
    fontWeight: 300,
    color: white
  }
}));

export { useStyles };