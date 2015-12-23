import shortid from 'shortid';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_REQUESTS = 'ADD_REQUESTS';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export function addRequest(request) {
  request.key = shortid.generate();
  request.when = new Date();
	return {
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

export function clearError() {
	return {
		type: CLEAR_ERROR
	};
}