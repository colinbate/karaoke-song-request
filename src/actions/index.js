import shortid from 'shortid';
import {songListApi} from 'setup';
import {signin, signout} from '../api/auth';

export const ADD_REQUEST = 'ADD_REQUEST';
export const SET_REQUESTS = 'SET_REQUESTS';

export const CLEAR_ERROR = 'CLEAR_ERROR';

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const SELECT_REQUEST = 'SELECT_REQUEST';
export const UNSELECT_REQUEST = 'UNSELECT_REQUEST';
export const SELECT_ALL_REQUESTS = 'SELECT_ALL_REQUESTS';
export const UNSELECT_ALL_REQUESTS = 'UNSELECT_ALL_REQUESTS';
export const DELETE_SELECTED_REQUESTS = 'DELETE_SELECTED_REQUESTS';
export const FULFILL_SELECTED_REQUESTS = 'FULFILL_SELECTED_REQUESTS';

export function addRequest(request) {
  request.key = shortid.generate();
  request.when = new Date();
	return {
    promise: songListApi.add(request),
		request,
		type: ADD_REQUEST
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

export function selectRequest(request) {
  return {
    request,
    type: SELECT_REQUEST
  };
}

export function unselectRequest(request) {
  return {
    request,
    type: UNSELECT_REQUEST
  };
}

export function selectAllRequests(requests) {
  return {
    requests,
    type: SELECT_ALL_REQUESTS
  };
}

export function unselectAllRequests() {
  return {
    type: UNSELECT_ALL_REQUESTS
  };
}

export function toggleRequest(event, request) {
  if (event.target.checked) {
    return selectRequest(request);
  }
  return unselectRequest(request);
}

export function toggleAllRequests(event, requests) {
  if (event.target.checked) {
    return selectAllRequests(requests);
  }
  return unselectAllRequests();
}

export function deleteSelectedRequests(selection) {
  return {
    promise: songListApi.remove(...selection.keys()),
    selection,
    type: DELETE_SELECTED_REQUESTS
  };
}

export function fulfillSelectedRequests(selection) {
  return {
    promise: songListApi.fulfill(...selection.keys()),
    selection,
    type: FULFILL_SELECTED_REQUESTS
  };
}