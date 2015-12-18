import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Chrome from './components/Chrome';
import Header from './components/Header';

export default class App extends Component {
	render() {
		return (
			<div id="main-wrap">
				<Chrome>
					<Header>Requested Songs</Header>
				</Chrome>
			</div>
		);
	}
}
