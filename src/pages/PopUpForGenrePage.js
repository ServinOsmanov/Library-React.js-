import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'

import AppActions from '../actions/AppActions';
import popUpStore from '../stores/PopUpStore';

class PopUpForGenrePage extends Component {
	constructor() {
		super();
		this.state = {
			authorName: popUpStore.popUp.authorName,
			liElements: popUpStore.popUp.liElements
		}
	}

	componentDidMount(props) {
		AppActions.LoadPopUpGenre(this.props);
	}

	componentWillMount() {
		popUpStore.on('change', () => {
			this.setState({
				authorName: popUpStore.popUp.authorName,
				liElements: popUpStore.popUp.liElements
			})
		})
	}

	render() {
		return ( 
			<Modal.Dialog>
      			<Modal.Header>
      				<Button bsStyle="link" className='btn'><Link to={`/Genre/${this.props.match.params.genre}`}>x</Link></Button>
        			<Modal.Title>{this.state.authorName}</Modal.Title>
      			</Modal.Header>

     			<Modal.Body>
        			{this.state.liElements}
      			</Modal.Body>
    		</Modal.Dialog>
		)
	}
}

export default PopUpForGenrePage;