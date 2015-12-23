import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import * as Actions from '../actions';

function requests(state = [], action) {
  switch (action.type) {
    case Actions.ADD_REQUEST:
      return [...state, action.request];
    case Actions.ADD_REQUESTS:
      if (action.ready) {
        return [...state, ...action.result];
      }
    default:
      return state;
  }
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

const rootReducer = combineReducers({
  requests,
  errorMessage,
  form: formReducer.plugin({
    requestForm(state, action) {
      if (action.type === Actions.ADD_REQUEST) {
        return {
          ...state,
          title: {focus:true},
          artist: {}
        };
      }
      return state;
    }
  })
});

export default rootReducer;