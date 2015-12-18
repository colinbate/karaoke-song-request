import { combineReducers } from 'redux';
import * as Actions from '../actions';

function counter(state = 0, action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return state + 1;
    case Actions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter
});

export default rootReducer;