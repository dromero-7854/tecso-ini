import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from './types';
import * as authService from '../services/auth.service';

export const login = (username, password) => (dispatch) => {
  return authService.login(username, password)
    .then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data }
        });
        return Promise.resolve();
      },
      (error) => {
        let message;
        if (error.response && error.response.data) {
          if (error.response.data.status === 400) {
            message = 'Validation failed';
          } else if (error.response.data.status === 401) {
            message = 'Usuario o contraseña incorrectos';
          }
        } else {
          message = error.message || error.toString()
        }
        dispatch({
          type: LOGIN_FAIL
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message
        });
        return Promise.reject(error);
      }
    );
};

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch({
    type: LOGOUT
  });
};