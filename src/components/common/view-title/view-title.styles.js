import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  titleBox: {
    textAlign: 'center',
    padding: '15px 0 15px 0',
    backgroundColor: '#039be5'
  },
  title: {
    fontSize: 22,
    fontWeight: 300,
    color: '#fff'
  }
}));

export { useStyles };