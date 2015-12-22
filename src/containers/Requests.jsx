import React from 'react';
import {connect} from 'react-redux';
import SongList from '../components/SongList';

function mapStateToProps(state) {
  return {
    requests: state.requests
  };
}

export default connect(mapStateToProps)(SongList);