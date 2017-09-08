import React, { Component } from 'react';

import library from '../stores/AppStore';
import AppActions from '../actions/AppActions';

class TitlePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book : []
		}
	}

	componentDidMount(props) {
		AppActions.LoadBook(this.props);
	}

	componentWillMount() {
		library.on('change', () => {
			this.setState({
				book: library.book
			})
		})
	}

	render() {	
		return (
			<div>
				{this.state.book}
			</div>
			);
	}
}

export default TitlePage;