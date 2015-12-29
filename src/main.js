//import 'babel-core/polyfill'
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store';
import {songListApi, checkForExistingUser} from 'setup';
import {fetchRequests} from './actions';

const store = configureStore();
checkForExistingUser(store);
store.dispatch(fetchRequests(songListApi));

render(
  <Root store={store} />,
  document.getElementById('app')
);