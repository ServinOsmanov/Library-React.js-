import React from 'react';
import { EventEmitter} from 'events';
import dispatcher from '../dispatcher/AppDispatcher';
import { Link } from 'react-router-dom';
import Data from '../Data.js';

class PopUpStore extends EventEmitter {
	constructor() {
		super();
		this.popUp = {};
		this.handleActions = this.handleActions.bind(this);
	}

	handleActions(action) {
		switch(action.type) {
			case 'LOAD_POPUP_GENRE' : {
				let PopUpIndex;
				let authorName = Data.map((data, index) => {
					if(action.value.match.params.author === data.Author) {
						PopUpIndex = index
						return(
							<li><Link to={`/Author/${data.Author}`}>{data.Author}</Link></li>
						)
					}
				})

				let liElements = Data[PopUpIndex].books.map((data, index) => {
					return(
						<li>
							<Link to={`/TitlePage/${Data[PopUpIndex].books[index].Title}`}>{Data[PopUpIndex].books[index].Title}</Link>
						</li>
					)
				}) 
				this.popUp.authorName = authorName;
				this.popUp.liElements = liElements;
				this.emit('change');
				break;
			}
			case 'LOAD_POPUP' : {
				let PopUpIndex;
				let authorName = Data.map((data, index) => {
					if(action.value.match.params.author === data.Author) {
						PopUpIndex = index
						return(
							<li>
								<Link to={`/Author/${data.Author}`}>{data.Author}</Link>
							</li>
						)
					}
				})

				let liElements = Data[PopUpIndex].books.map((data, index) => {
					return(
						<li>
							<Link to={`/TitlePage/${Data[PopUpIndex].books[index].Title}`}>{Data[PopUpIndex].books[index].Title}</Link>
						</li>
					)
				}) 
				this.popUp.authorName = authorName;
				this.popUp.liElements = liElements;
				this.emit('change');
				break;
			}
			default: {
				return;
			}
		}
	}	
}

let popUpStore = new PopUpStore;
dispatcher.register(popUpStore.handleActions);
export default popUpStore;