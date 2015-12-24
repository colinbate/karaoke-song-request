import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './Button';
import {login} from '../actions';

const Header = ({ user, children }) => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">{children}</span>
      <div className="mdl-layout-spacer"></div>
      <div>{user.email ? user.email : <Button accent="true" onClick={login}>Login</Button>}</div>
    </div>
  </header>
);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {login})(Header);
