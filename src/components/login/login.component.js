import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { login } from '../../actions/auth';
import { Container, Paper, Grid, Box, Typography, InputAdornment, IconButton, FormControlLabel } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Back from '../../images/dark-material-bg.jpg';
import Logo from '../../images/logo.png';
import Fuse from '../../images/fuse-black.png';
import { useStyles, LoginTextField, LoginCheckBox, RememberMeTypography, LoginLink, LoginButton } from './login.styles';

const Login = (props) => {
  const classes = useStyles();
  const { message, dispatch, history } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e) => {
    e.persist();
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    e.persist();
    setPassword(e.target.value);
  }

  const handleVisibilityPassChange = () => {
    setShowPass(!showPass);
  }

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  }

  const preventDefault = (e) => {
    e.preventDefault();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password))
      .then(
        () => history.push('/'),
        error => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(message)
        });
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundImage: `url(${Back})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }}>
      <Container className={classes.container} maxWidth='sm'>
        <Paper className={classes.paper}>
          <Grid container direction='column'>
            <Box display='flex' justifyContent='center'>
              <img src={Logo} className={classes.logo} alt='login logo' />
            </Box>
            <Box display='flex' justifyContent='center' mt={1}>
              <img src={Fuse} className={classes.logo} alt='login appName' />
            </Box>
            <Box mt={1}>
              <Typography variant='overline' display='block' align='center' className={classes.title}>
                Ingresa a tu cuenta
              </Typography>
            </Box>
            <Box display='flex' justifyContent='center' mt={1}>
              <form onSubmit={onSubmit}>
                <Grid container direction='column'>
                  <Box>
                    <LoginTextField
                      className={classes.loginField}
                      id='username'
                      label='Usuario'
                      variant='outlined'
                      autoComplete='off'
                      onChange={(e) => handleUsernameChange(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              disabled={true}
                              size='small'>
                              <AccountCircle className={classes.fieldIcon} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Box>
                  <Box mt={2}>
                    <LoginTextField
                      className={classes.loginField}
                      id='password'
                      label='Contraseña'
                      variant='outlined'
                      autoComplete='off'
                      type={showPass ? 'text' : 'password'}
                      onChange={(e) => handlePasswordChange(e)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              size='small'
                              className={classes.fieldIcon}
                              onClick={() => handleVisibilityPassChange()}>
                              {showPass ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Box>
                  <Box display='flex' alignItems='center' mt={2}>
                    <Box flexGrow={1}>
                      <FormControlLabel
                        control={
                          <LoginCheckBox
                            checked={rememberMe}
                            onChange={() => { handleRememberMeChange() }}
                            name='rememberMe'
                          />
                        }
                        label={
                          <RememberMeTypography variant='subtitle1'>Recordarme</RememberMeTypography>
                        }
                      />
                    </Box>
                    <Box>
                      <Typography variant='subtitle2'>
                        <LoginLink href='#' onClick={(e) => { preventDefault(e) }}>
                          ¿Has olvidado tu contraseña?
                      </LoginLink>
                      </Typography>
                    </Box>
                  </Box>
                  <Box display='flex' justifyContent='center' mt={2}>
                    <LoginButton variant='contained' type='submit' disableElevation>
                      Login
                    </LoginButton>
                  </Box>
                  {message &&
                    (
                      <Box mt={1}>
                        <Typography variant='subtitle2' align='center' className={classes.msg}>
                          {message}
                        </Typography>
                      </Box>
                    )
                  }
                </Grid>
              </form>
            </Box>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { message } = state.message;
  return {
    message
  };
}

export default compose(withRouter, connect(mapStateToProps))(Login);