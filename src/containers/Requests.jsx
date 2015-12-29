import React from 'react';
import {connect} from 'react-redux';
import SongList from '../components/SongList';
import {toggleRequest} from '../actions';

function mapStateToProps(state) {
  return {
    requests: state.requests,
    selState: state.selectedRequests
  };
}

export default connect(mapStateToProps, {toggleRequest})(SongList);