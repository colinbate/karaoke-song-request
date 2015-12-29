import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import * as Actions from '../actions';

function requests(state = [], action) {
  switch (action.type) {
    case Actions.ADD_REQUEST:
      if (!action.ready) {
        return [...state, action.request];
      }
      break;
    case Actions.SET_REQUESTS:
      if (action.ready) {
        return [...action.result.requests];
      }
      break;
    case Actions.DELETE_SELECTED_REQUESTS:
    case Actions.FULFILL_SELECTED_REQUESTS:
      if (action.ready && action.selection.size > 0 && !action.error) {
        return state.filter(r => !action.selection.has(r.key))
      }
      break;
    default:
      return state;
  }
  return state;
}

function completed(state = [], action) {
  switch (action.type) {
    case Actions.FULFILL_SELECTED_REQUESTS:
      if (action.ready && action.selection.size > 0 && !action.error) {
        return [...state, ...action.selection.values()];
      }
      break;
    case Actions.SET_REQUESTS:
      if (action.ready) {
        return [...action.result.fulfilled];
      }
  }
  return state;
}

function selectedRequests(state = new Map(), action) {
  switch (action.type) {
    case Actions.SELECT_REQUEST:
      return (new Map(state)).set(action.request.key, action.request);
    case Actions.UNSELECT_REQUEST:
      {
        let newstate = new Map(state);
        newstate.delete(action.request.key);
        return newstate;
      }
    case Actions.SELECT_ALL_REQUESTS:
      return new Map(action.requests.map(r => [r.key, r]));
    case Actions.UNSELECT_ALL_REQUESTS:
      return new Map();
    case Actions.DELETE_SELECTED_REQUESTS:
    case Actions.FULFILL_SELECTED_REQUESTS:
      if (action.ready && !action.error) {
        return new Map();
      }
      break;
  }
  return state;
}

function errorMessage(state = '', action) {
  if (action.type === Actions.CLEAR_ERROR) {
    return '';
  }
  if (action.error) {
    return '' + action.error;
  }
  return state;
}

function user(state = {}, action) {
  switch (action.type) {
    case Actions.CLEAR_USER:
      return {};
    case Actions.SET_USER:
      if (action.ready && action.result) {
        return {
          ...action.result
        };
      }
    default:
      return state;
  }
  return state;
}

const rootReducer = combineReducers({
  requests,
  completed,
  selectedRequests,
  errorMessage,
  user,
  form: formReducer.plugin({
    requestForm(state, action) {
      if (action.type === Actions.ADD_REQUEST) {
        return {
          ...state,
          title: {},
          artist: {}
        };
      }
      return state;
    }
  })
});

export default rootReducer;