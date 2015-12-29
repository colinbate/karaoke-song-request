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
        return [...action.result];
      }
    case Actions.ADD_REQUESTS:
      if (action.ready && action.result) {
        return [...state, ...action.result];
      }
    default:
      return state;
  }
  return state;
}

function selectedRequests(state = new Set(), action) {
  switch (action.type) {
    case Actions.SELECT_REQUEST:
      return (new Set(state)).add(action.id);
    case Actions.UNSELECT_REQUEST:
      {
        let newstate = new Set(state);
        newstate.delete(action.id);
        return newstate;
      }
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