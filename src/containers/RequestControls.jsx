import React from 'react';
import {connect} from 'react-redux';
import {deleteSelectedRequests, fulfillSelectedRequests} from '../actions';

const RequestControls = ({isAdmin, hasSelection, deleteSelectedRequests, fulfillSelectedRequests}) => (
  <div className={isAdmin ? 'control-bar' : 'hidden'}>
    <button disabled={!hasSelection} className="mdl-button mdl-js-button space-right" onClick={fulfillSelectedRequests}><i className="material-icons">assignment_return</i> Fulfill Selected</button>
    <button disabled={!hasSelection} className="mdl-button mdl-js-button danger-button" onClick={deleteSelectedRequests}><i className="material-icons">delete</i> Delete Selected</button>
  </div>
);

function mapStateToProps(state) {
  return {
    isAdmin: state.user.admin,
    hasSelection: state.selectedRequests.size > 0,
    selection: state.selectedRequests
  };
}

function mergeProps(stateProps, dispatchProps) {
  return Object.assign({}, {
    isAdmin: stateProps.isAdmin,
    hasSelection: stateProps.hasSelection,
    deleteSelectedRequests: () => dispatchProps.deleteSelectedRequests(stateProps.selection),
    fulfillSelectedRequests: () => dispatchProps.fulfillSelectedRequests(stateProps.selection)
  });
}

export default connect(mapStateToProps, {deleteSelectedRequests, fulfillSelectedRequests}, mergeProps)(RequestControls);