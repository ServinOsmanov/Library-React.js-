import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import library from '../stores/AppStore';
import AppActions from '../actions/AppActions';

class AuthorPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: [],
			books: []
		}
	}	

	componentDidMount(props) {
		AppActions.LoadAuthor(this.props);
	}

	componentWillMount() {
		library.on('change', () => {
			this.setState({
				author: library.author.info,
				books: library.author.books
			})
		})
	}

	render() {
		console.log(this.state.author);
		return(
			<div className='blockquote'>
				<p className='linkToMainPage'>
					<Link to={'/'}>Back to the main page</Link>
				</p>

				<ul className='ulClass'>
					{this.state.books}	
				</ul>
				{this.state.author}
			</div>
		)
	}
	
}

export default AuthorPage;