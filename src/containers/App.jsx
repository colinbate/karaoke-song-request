import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Chrome from '../components/Chrome';
import Header from '../components/Header';
import RequestForm from '../components/RequestForm';
import Requests from './Requests';
import Example from './Example';

export default class App extends Component {
  render() {
    return (
      <div id="main-wrap">
        <Chrome>
          <Header>Requested Songs</Header>
          <main className="mdl-layout__content">
            <div className="page-content">
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                  <Requests />
                </div>
                <div className="mdl-cell mdl-cell--6-col">
                  <RequestForm />
                  <Example />
                </div>
              </div>
            </div>
          </main>
        </Chrome>
      </div>
    );
  }
}