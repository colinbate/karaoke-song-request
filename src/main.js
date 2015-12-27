//import 'babel-core/polyfill'
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store';
import {songListApi, checkForExistingUser} from 'setup';
import {fetchRequests} from './actions';

const store = configureStore();
store.dispatch(fetchRequests(songListApi));
checkForExistingUser(store);

render(
  <Root store={store} />,
  document.getElementById('app')
);