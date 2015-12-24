import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import promiseMiddleware from './promise-middleware';

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
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