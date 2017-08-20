import React from 'react';
import { Link } from 'react-router-dom';
import dataGenre from './dataGenre.js';

function Genre(props) {
	let genreIndex;
	dataGenre.map((data, index) => {
		if(props.match.params.genre === data.Genre) {
			genreIndex = index;
		}
	})
	
	let result = dataGenre[genreIndex].books.map((data,index) => {
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

	return ( 
		<div>
	 		<p className='linkToMainPage'>
	 			<Link to={'/'}>Back to the main page</Link>
	 		</p>
	 		<h1 className='genreHeader'>Books With The Same Genre</h1>
	 		{result} 
		</div>
	 )
}

export default Genre;