export const SELECT_REQUEST = 'SELECT_REQUEST';
export const UNSELECT_REQUEST = 'UNSELECT_REQUEST';
export const SELECT_ALL_REQUESTS = 'SELECT_ALL_REQUESTS';
export const UNSELECT_ALL_REQUESTS = 'UNSELECT_ALL_REQUESTS';

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