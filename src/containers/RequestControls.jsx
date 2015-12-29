import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/requests';

const RequestControls = ({
    isAdmin,
    hasSelection,
    hasFulfilled,
    hasAny,
    deleteSelectedRequests,
    fulfillSelectedRequests,
    archiveFulfilled,
    purgeEverything
  }) => (
  <div className={isAdmin ? 'control-bar' : 'hidden'}>
    <button disabled={!hasSelection} className="mdl-button mdl-js-button space-right" onClick={fulfillSelectedRequests}><i className="material-icons">assignment_return</i> Fulfill Selected</button>
    <button id="menu-delete" className="mdl-button mdl-js-button danger-button mdl-button--icon"><i className="material-icons">more_vert</i></button>
    <ul className="mdl-menu mdl-js-menu full-button-menu" htmlFor="menu-delete">
      <li className="mdl-menu__item"><button className="mdl-button mdl-js-button danger-button" disabled={!hasSelection} onClick={deleteSelectedRequests}><i className="material-icons">delete</i> Delete Selected Requests</button></li>
      <li className="mdl-menu__item"><button className="mdl-button mdl-js-button danger-button" disabled={!hasFulfilled} onClick={archiveFulfilled}><i className="material-icons">warning</i> Delete Fulfilled</button></li>
      <li className="mdl-menu__item"><button className="mdl-button mdl-js-button danger-button" disabled={!hasAny} onClick={purgeEverything}><i className="material-icons">warning</i> Delete EVERYTHING!</button></li>
    </ul>
  </div>
);

function mapStateToProps(state) {
  return {
    isAdmin: state.user.admin,
    hasSelection: state.selectedRequests.size > 0,
    selection: state.selectedRequests,
    hasFulfilled: !!state.completed.length,
    hasAny: !!(state.completed.length + state.requests.length)
  };
}

function mergeProps(stateProps, dispatchProps) {
  return Object.assign({}, {
    isAdmin: stateProps.isAdmin,
    hasSelection: stateProps.hasSelection,
    hasFulfilled: stateProps.hasFulfilled,
    hasAny: stateProps.hasAny,
    deleteSelectedRequests: () => dispatchProps.deleteSelectedRequests(stateProps.selection),
    fulfillSelectedRequests: () => dispatchProps.fulfillSelectedRequests(stateProps.selection),
    purgeEverything: dispatchProps.purgeEverything,
    archiveFulfilled: dispatchProps.archiveFulfilled
  });
}

export default connect(mapStateToProps, actions, mergeProps)(RequestControls);