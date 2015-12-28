import React from 'react';
import {connect} from 'react-redux';
import {clearError} from '../actions';

const ErrorHud = ({message, clearError}) => (
  <div className={message ? 'mdl-grid' : 'hidden'} id="error-hud">
    <div className="mdl-cell mdl-cell--12-col mdl-color--red mdl-shadow--2dp">
      <button className="mdl-button mdl-js-button" onClick={clearError}><i className="material-icons">close</i></button>
      <span>{message}</span>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    message: state.errorMessage
  };
}

export default connect(mapStateToProps, {clearError})(ErrorHud);