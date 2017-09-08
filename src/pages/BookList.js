import React, { Component } from 'react';

import library from '../stores/AppStore';
import AppActions from '../actions/AppActions';

class BookList extends Component {
	constructor() {
		super();
		this.state = {
			books: library.getAll()
		}
	}

	componentDidMount() {
		AppActions.LoadBookListPage();
	}

	componentWillMount() {
		library.on('change', () => {
			this.setState({
				books: library.getAll()
			})
		})
	}

	render() {
		return(<div>{this.state.books}</div>)
	}
}

export default BookList;