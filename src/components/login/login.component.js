import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { login } from '../../actions/auth';

const Login = (props) => {

  const { message, dispatch, history } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameOnChange = (e) => {
    e.persist();
    setUsername(e.target.value);
  }

  const passwordOnChange = (e) => {
    e.persist();
    setPassword(e.target.value);
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
    <div>
      <h1>Login Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={usernameOnChange}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={passwordOnChange}
        />
        <br />
        <input
          type='submit'
          value='Login'
        />
        {message && (
          <div>
            <span>{message}</span>
          </div>
        )}
      </form>
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