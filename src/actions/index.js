import shortid from 'shortid';
import {songListApi} from 'setup';
import {signin, signout} from '../api/auth';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_REQUESTS = 'ADD_REQUESTS';
export const SET_REQUESTS = 'SET_REQUESTS';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export function addRequest(request) {
  request.key = shortid.generate();
  request.when = new Date();
	return {
    promise: songListApi.add(request),
		request,
		type: ADD_REQUEST
	};
}

export function fetchRequests(api) {
	return {
		promise: api.get(),
		type: ADD_REQUESTS
	};
}

export function refreshRequestList() {
  return {
    promise: songListApi.get(),
    type: SET_REQUESTS
  }
}

export function clearError() {
	return {
		type: CLEAR_ERROR
	};
}

export function setUser(email) {
  return {
    result: {email},
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