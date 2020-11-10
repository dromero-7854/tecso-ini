import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Button, Checkbox, Link, Typography } from '@material-ui/core';
import { blue as muiBlue, blueGrey as muiBlueGrey, deepOrange as muiDeepOrange } from '@material-ui/core/colors';

const blue = muiBlue[600];
const btnHoverBlue = muiBlue[800];
const checkboxHoverBlue = muiBlue[50];
const blueGrey = muiBlueGrey[800];
const deepOrange = muiDeepOrange[700];
const white = '#fff';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto'
  },
  logo: {
    width: 50
  },
  title: {
    fontSize: 15
  },
  loginField: {
    width: 350
  },
  fieldIcon: {
    color: blueGrey
  },
  msg: {
    color: deepOrange,
    fontSize: 15
  }
}));

const LoginTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: blue
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: blue
      }
    }
  }
})(TextField);

const LoginCheckBox = withStyles({
  root: {
    color: blueGrey,
    '&$checked': {
      color: blue,
      '&:hover': {
        backgroundColor: checkboxHoverBlue
      }
    },
    '&:hover': {
      backgroundColor: checkboxHoverBlue
    }
  },
  checked: {}
})(Checkbox);

const RememberMeTypography = withStyles({
  root: {
    color: blueGrey
  }
})(Typography);

const LoginLink = withStyles({
  root: {
    color: blue
  }
})(Link);

const LoginButton = withStyles({
  root: {
    width: 250,
    color: white,
    backgroundColor: blue,
    '&:hover': {
      backgroundColor: btnHoverBlue
    }
  }
})(Button);

export { useStyles, LoginTextField, LoginCheckBox, RememberMeTypography, LoginLink, LoginButton };