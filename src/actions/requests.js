import shortid from 'shortid';
import {songListApi} from 'setup';

export const ADD_REQUEST = 'ADD_REQUEST';
export const SET_REQUESTS = 'SET_REQUESTS';

export const DELETE_SELECTED_REQUESTS = 'DELETE_SELECTED_REQUESTS';
export const FULFILL_SELECTED_REQUESTS = 'FULFILL_SELECTED_REQUESTS';

export const PURGE_EVERYTHING = 'PURGE_EVERYTHING';
export const ARCHIVE_FULFILLED = 'ARCHIVE_FULFILLED';

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

export function purgeEverything() {
  return {
    promise: songListApi.clear(),
    type: PURGE_EVERYTHING
  };
}

export function archiveFulfilled() {
  return {
    promise: songListApi.archive(),
    type: ARCHIVE_FULFILLED
  };
}