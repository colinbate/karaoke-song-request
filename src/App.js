import React from 'react';
import Chrome from './Chrome';
import Header from './Header';

export default class App extends React.Component {
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
