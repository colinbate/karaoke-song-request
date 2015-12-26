import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './Button';
import {login, logout} from '../actions';

const Header = ({ user, loginAction, logoutAction, children }) => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">{children}</span>
      <div className="mdl-layout-spacer"></div>
      <div>{user.email ?
        <div><span>{user.email}</span> <Button accent="true" onClick={logoutAction}>Logout</Button></div> :
        <Button accent="true" onClick={loginAction}>Login</Button>}
      </div>
    </div>
  </header>
);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {loginAction: login, logoutAction: logout})(Header);
