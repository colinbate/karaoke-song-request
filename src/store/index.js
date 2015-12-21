import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}

/*
{
  requests: [{title, artist}, ...],
  errorMessage: ''m
  form: {redux-form}
}
*/