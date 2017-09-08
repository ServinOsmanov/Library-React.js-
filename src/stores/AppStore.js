import React from 'react';
import { EventEmitter} from 'events';
import dispatcher from '../dispatcher/AppDispatcher';
import { Link } from 'react-router-dom';
import Data from '../Data.js';
import dataGenre from '../dataGenre.js';

class Library extends EventEmitter {
	constructor() {
		super();
		this.books = [];
		this.book;
		this.author = {};
		this.handleActions = this.handleActions.bind(this);
	}

	getAll() {
		return this.books;
	}

	handleActions(action) {
		switch(action.type) {
			case 'LOAD_LIST_OF_BOOKS': {
				let books = Data.map((data, index) => {
	    			return(
				      <div className="cover">
				        <p className="author">
				          <Link to={`/${Data[index].books[0].Author}`}>{Data[index].books[0].Author}</Link>
				        </p>
				      
				        <p className="title" key={data.books[0].Title}>
				          <Link to={`/TitlePage/${data.books[0].Title}`}>{Data[index].books[0].Title}</Link>
				        </p>
				      </div>
				    )
			  	})
			  	this.books = books;
			  	this.emit('change');
			  	break;
			}
			case 'LOAD_BOOK': {
				if(action.value !== undefined) {
					let book = Data.map((data, index) => {
						let result = data.books.map((data1,index) => {
							if(action.value.match.params.title === data.books[index].Title) {
								return(
									<div>
										<p className='linkToMainPage'>
											<Link to={'/'}>Back to the main page</Link>
										</p>
										<div className='cover'>
											<p className='author'>
												<Link to={`/Author/${data.Author}`}>{data.Author}</Link>
											</p>
											<p className='title'>{data.books[index].Title}</p>
										</div>

										<ul className="pageBookUl">
											<li>Author: {data.Author}</li>
											<li>Title: {data.books[index].Title}</li>
											<li>Genre:
												<Link to={`/Genre/${data.books[index].Genre}`}> {data.books[index].Genre}</Link>
											</li>
											<li>Summary: {data.books[index].Summary}</li>
										</ul>
									</div>
								)
							}
						})
						return result;
					})
					this.book = book;
					this.emit('change');
				}
				break;
			}
			case 'LOAD_AUTHOR': {
				if(action.value !== undefined) {
					let  AuthorIndex;
					let AmountOfLi;
					let author = Data.map((data, index) => {
						if(action.value.match.params.name === data.Author) {
							AuthorIndex = index;
							return(
								<div>
									<h1>{data.Author}</h1>
									<p dangerouslySetInnerHTML={{__html: data.Biography}}></p>
								</div>
							)	
						}
					})
					
					AmountOfLi = Data[AuthorIndex].books.map((data, index) => {
						return(
							<li>
								<Link to={`/TitlePage/${Data[AuthorIndex].books[index].Title}`}>{Data[AuthorIndex].books[index].Title}</Link>
							</li>
						)
					})	
					this.author.books = AmountOfLi;
					this.author.info = author;
					this.emit('change');
				}
				break;
			}
			case 'LOAD_GENRE': {
				if(action.value !== undefined) {
					let genreIndex;
					let genreBooks
					dataGenre.map((data, index) => {
						if(action.value.match.params.genre === data.Genre) {
							genreIndex = index;
						}
					})
						genreBooks = dataGenre[genreIndex].books.map((data,index) => {
							return (
								<div className='cover'>
									<p className='author'>
										<Link to={`/Genre/${dataGenre[genreIndex].Genre}/${dataGenre[genreIndex].books[index].Author}`}>{dataGenre[genreIndex].books[index].Author}</Link>
									</p>
									
									<p className='title'>
										<Link to={`/TitlePage/${dataGenre[genreIndex].books[index].Title}`}>{dataGenre[genreIndex].books[index].Title}</Link>
									</p>
								</div>
							)
						})	
					this.books = genreBooks;
				  	this.emit('change');	
				}
				break;
			}
			default: {
				return;
			}
		}
	}
}	

let library = new Library;
dispatcher.register(library.handleActions);
export default library;