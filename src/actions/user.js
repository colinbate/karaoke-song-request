import {signin, signout} from '../api/auth';
import {refreshRequestList} from './requests';

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export function setUser(user) {
  return {
    result: user,
    ready: true,
    type: SET_USER
  };
}

export function login() {
  return {
    promise: signin(),
    after: () => refreshRequestList(),
    type: SET_USER
  }
}

export function logout() {
  signout();
  return dispatch => {
    dispatch({
      type: CLEAR_USER
    });
    dispatch(refreshRequestList());
  }
}