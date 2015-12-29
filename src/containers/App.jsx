import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Chrome from '../components/Chrome';
import Header from '../components/Header';
import RequestForm from '../components/RequestForm';
import Requests from './Requests';
import Example from './Example';
import ErrorHud from './ErrorHud';
import RequestControls from './RequestControls';
import FulFilled from './FulFilled';

export default class App extends Component {
  render() {
    return (
      <div id="main-wrap">
        <Chrome>
          <Header>Requested Songs</Header>
          <main className="mdl-layout__content">
            <div className="page-content">
              <ErrorHud />
              <div className="mdl-grid" id="main-container">
                <div className="mdl-cell mdl-cell--8-col">
                  <Requests />
                  <RequestControls />
                  <FulFilled />
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                  <RequestForm />
                </div>
              </div>
            </div>
          </main>
        </Chrome>
      </div>
    );
  }
}