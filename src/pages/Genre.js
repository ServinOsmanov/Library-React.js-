import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import library from '../stores/AppStore';
import AppActions from '../actions/AppActions';

class GenrePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: library.getAll()
		}
	}

	componentDidMount(props) {
		AppActions.LoadGenre(this.props);
	}

	componentWillMount() {
		library.on('change', () => {
			this.setState({
				books: library.getAll()
			})
		})
	}

	render() {
		console.log(this.state.books);
		return (
			<div>
		 		<p className='linkToMainPage'>
		 			<Link to={'/'}>Back to the main page</Link>
		 		</p>
		 		<h1 className='genreHeader'>Books With The Same Genre</h1>
		 		{this.state.books} 
			</div>
		)
	}
}

export default GenrePage;