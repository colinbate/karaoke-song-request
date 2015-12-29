//import 'babel-core/polyfill'
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store';
import {checkForExistingUser} from 'setup';
import {refreshRequestList} from './actions';

const store = configureStore();
checkForExistingUser(store);
store.dispatch(refreshRequestList());

render(
  <Root store={store} />,
  document.getElementById('app')
);