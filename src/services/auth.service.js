import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';
const LOGIN_URL = API_URL + 'signin';

export const login = (username, password) => {
  return axios
    .post(LOGIN_URL, { username, password })
    .then(
      (response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
}

export const logout = () => {
  localStorage.removeItem('user');
}