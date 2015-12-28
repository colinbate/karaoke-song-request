import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import promiseMiddleware from './promise-middleware';
import thunkMiddleware from './thunk-middleware';

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    thunkMiddleware
  )(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

/*
{
  requests: [{title, artist}, ...],
  errorMessage: '',
  user,
  form: {redux-form}
}
*/